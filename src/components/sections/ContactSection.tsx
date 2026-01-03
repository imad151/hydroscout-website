import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail, User, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

/**
 * CONTACT FORM CONFIGURATION
 * ==========================
 * 
 * To connect this form to send real emails, choose one of these options:
 * 
 * ─────────────────────────────────────────────────────────────────────
 * OPTION 1: Formspree (RECOMMENDED - No backend needed!)
 * ─────────────────────────────────────────────────────────────────────
 * 1. Sign up at https://formspree.io (free tier: 50 submissions/month)
 * 2. Create a new form and copy your form ID (looks like: "xyzabcde")
 * 3. Replace FORMSPREE_FORM_ID below with your ID
 * 4. Set USE_FORMSPREE to true
 * 
 * ─────────────────────────────────────────────────────────────────────
 * OPTION 2: EmailJS (Client-side, no backend)
 * ─────────────────────────────────────────────────────────────────────
 * - Sign up at https://www.emailjs.com
 * - Follow their React integration guide
 * 
 * ─────────────────────────────────────────────────────────────────────
 * OPTION 3: Lovable Cloud + Resend (Full backend control)
 * ─────────────────────────────────────────────────────────────────────
 * - Enable Lovable Cloud in project settings
 * - Set up Resend API key and edge function
 */

// ==========================================
// CONFIGURATION - Edit these values:
// ==========================================
const USE_FORMSPREE = true; // Set to true when you have a Formspree account
const FORMSPREE_FORM_ID = "xykzdgyb"; // Replace with your Formspree form ID
const RECIPIENT_EMAIL = "neeraj.kulkarni@gmail.com"; // Email shown in direct contact
// ==========================================

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (USE_FORMSPREE && FORMSPREE_FORM_ID !== "YOUR_FORM_ID") {
        // Send via Formspree
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            _replyto: formData.email,
            _subject: `[AquaMinds Contact] ${formData.subject}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
      } else {
        // Simulate submission when Formspree is not configured
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form data (configure Formspree to send real emails):", formData);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`min-h-screen flex items-center py-24 lg:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in HydroScout? Whether you're a researcher, educator, investor, or simply passionate about ocean conservation, we'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="gradient-card rounded-2xl p-6 sm:p-8 border border-border/30 shadow-card space-y-6"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                <User className="h-4 w-4 text-primary" aria-hidden="true" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="flex items-center gap-2 text-foreground">
                <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us how you'd like to get involved or ask any questions..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/50 border-border focus:border-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-ocean text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </span>
              )}
            </Button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              You can also reach us directly at{" "}
              <a
                href={`mailto:${RECIPIENT_EMAIL}`}
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                {RECIPIENT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
