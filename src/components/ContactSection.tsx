import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Validation schema matching database constraints
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().max(200, "Organization must be less than 200 characters").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please fix the form errors");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contacts') 
        .insert([{
          name: result.data.name,
          email: result.data.email,
          organization: result.data.organization || null,
          message: result.data.message,
        }]);

      if (error) throw error;

      toast.success(t("contact.form.success"));
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t("contact.email.label")}</p>
                  <a
                    href="mailto:info@padelcatalyst.com"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    info@padelcatalyst.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t("contact.address.label")}</p>
                  <p className="text-foreground font-medium">
                    Plaza Marqués de Salamanca 9<br />
                    28006, Madrid
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-background rounded-lg border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.name.placeholder")}
                    className={`h-11 ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email.placeholder")}
                    className={`h-11 ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.organization")}
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  maxLength={200}
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder={t("contact.form.organization.placeholder")}
                  className={`h-11 ${errors.organization ? "border-destructive" : ""}`}
                />
                {errors.organization && <p className="text-destructive text-xs mt-1">{errors.organization}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message.placeholder")}
                  className={`min-h-[120px] resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t("contact.form.submitting")
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t("contact.form.submit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
