-- Drop the existing public insert policy
DROP POLICY IF EXISTS "Allow public contact submissions" ON public.contacts;

-- Create a new policy that only allows service_role to insert contacts
-- This ensures all inserts must go through the edge function
CREATE POLICY "Allow edge function to insert contacts"
  ON public.contacts FOR INSERT
  TO service_role
  WITH CHECK (true);