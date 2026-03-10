"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="page-hero text-center">
        <div className="absolute inset-0 bg-dark-grid" />
        <div className="container-wide relative z-10 text-center">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-energy" />
            Contact & Support
            <span className="w-8 h-px bg-energy" />
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Get in Touch with Our <span className="text-gradient-green">Engineering Team</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you need a massive multi-MW rental deployment or technical support for an ongoing project, we're here 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-28 relative z-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Box */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-energy" />
                <div className="w-12 h-12 rounded-xl bg-energy/10 text-energy flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-xl mb-2">Dubai Headquarters</h3>
                <p className="text-gray-500 leading-relaxed mb-6">Beyond Rental of Alternative Energy Equipment LLC<br />Dubai, United Arab Emirates</p>
                <div className="space-y-4">
                  <a href="tel:+971000000000" className="flex items-center gap-3 text-gray-600 hover:text-energy transition-colors group/link">
                    <Phone className="w-4 h-4 text-energy group-hover/link:scale-110 transition-transform" />
                    +971 00 000 0000
                  </a>
                  <a href="mailto:info@beyrenergy.com" className="flex items-center gap-3 text-gray-600 hover:text-energy transition-colors group/link">
                    <Mail className="w-4 h-4 text-energy group-hover/link:scale-110 transition-transform" />
                    info@beyrenergy.com
                  </a>
                </div>
              </div>

              {/* Support Box */}
              <div className="bg-navy-900 rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-grid opacity-20" />
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2 relative z-10">24/7 Operations Center</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  Our remote monitoring and engineering support teams operate around the clock for all critical deployments.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
              <h2 className="font-display font-bold text-navy-900 text-2xl mb-2">Request a Quote or Consultation</h2>
              <p className="text-gray-500 mb-8">Fill out the form below and an energy specialist will respond within 24 hours.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Company Name (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Company LLC"
                      {...register("company")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="john@example.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="+971 50 123 4567"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Service of Interest *</label>
                  <select
                    className={`form-input appearance-none ${errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    {...register("service")}
                  >
                    <option value="">Select a service...</option>
                    <option value="BESS Rental">Battery Energy Storage (BESS) Rental</option>
                    <option value="Solar Hybrid">Solar Hybrid Systems</option>
                    <option value="Temporary Power">Temporary Power Solutions</option>
                    <option value="Peak Shaving">Peak Shaving Systems</option>
                    <option value="Emergency Backup">Emergency Backup Power</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1.5">{errors.service.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Project Details / Message *</label>
                  <textarea
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    placeholder="Tell us about your power requirements, location, and timeline..."
                    {...register("message")}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-800 font-semibold text-sm">Message Sent Successfully</h4>
                      <p className="text-green-700 text-sm mt-1">Thank you for reaching out. A BEYR Energy specialist will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-red-800 font-semibold text-sm">Failed to Send Message</h4>
                      <p className="text-red-700 text-sm mt-1">Please try again later or contact us directly via phone or WhatsApp.</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center shadow-green-glow py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926922!2d55.27071281500665!3d25.19719698389658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1655000000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BEYR Energy Dubai Office Location"
          className="grayscale opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-50 to-transparent opacity-50" />
      </section>
    </div>
  );
}
