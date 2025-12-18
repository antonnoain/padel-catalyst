import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting
const submissions = new Map<string, number[]>();

function checkRateLimit(identifier: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(identifier) || [];
  const recentSubmissions = userSubmissions.filter(time => now - time < windowMs);
  
  if (recentSubmissions.length >= maxRequests) {
    return false;
  }
  
  recentSubmissions.push(now);
  submissions.set(identifier, recentSubmissions);
  return true;
}

// Basic validation
function validateContact(data: unknown): { valid: boolean; error?: string; data?: { name: string; email: string; organization: string | null; message: string } } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { name, email, organization, message } = data as Record<string, unknown>;

  // Validate name
  if (typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'Name is required' };
  }
  if (name.length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters' };
  }

  // Validate email
  if (typeof email !== 'string' || email.trim().length === 0) {
    return { valid: false, error: 'Email is required' };
  }
  if (email.length > 255) {
    return { valid: false, error: 'Email must be less than 255 characters' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Validate organization (optional)
  if (organization !== undefined && organization !== null && organization !== '') {
    if (typeof organization !== 'string' || organization.length > 200) {
      return { valid: false, error: 'Organization must be less than 200 characters' };
    }
  }

  // Validate message
  if (typeof message !== 'string' || message.trim().length === 0) {
    return { valid: false, error: 'Message is required' };
  }
  if (message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }
  if (message.length > 5000) {
    return { valid: false, error: 'Message must be less than 5000 characters' };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      organization: (typeof organization === 'string' && organization.trim()) || null,
      message: message.trim(),
    }
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Rate limiting: 3 submissions per hour per IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    console.log(`Contact form submission attempt from IP: ${ip}`);
    
    if (!checkRateLimit(ip, 3, 60 * 60 * 1000)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again in an hour.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const validation = validateContact(body);
    
    if (!validation.valid) {
      console.log(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error } = await supabase
      .from('contacts')
      .insert({
        name: validation.data!.name,
        email: validation.data!.email,
        organization: validation.data!.organization,
        message: validation.data!.message,
      });

    if (error) {
      console.error('Database insert error:', error.message);
      throw error;
    }

    console.log(`Contact form submitted successfully for: ${validation.data!.email}`);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Submission failed. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
