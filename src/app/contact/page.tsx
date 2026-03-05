"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="relative pt-64 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="container relative z-10 text-center">
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white mb-6"
           >
              Let's <span className="text-accent italic">Connect</span>
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-xl max-w-2xl mx-auto"
           >
              Our engineering team is ready to assist you with a custom power assessment 
              for your industrial or commercial project.
           </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 flex flex-col pt-4">
              <h2 className="mb-10 font-black italic">Rapid <span className="text-accent underline decoration-accent/30">Support</span> <br />Across the GCC.</h2>
              <p className="text-lg text-foreground-muted mb-12 leading-relaxed">
                Whether you're in a remote oil field or a massive infrastructure project 
                in the heart of Dubai, our rapid-deployment teams are available 24/7.
              </p>

              <div className="flex flex-col gap-8 mb-12">
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-surface-light text-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-all shadow-sm">
                      <Phone size={24} />
                   </div>
                   <div>
                      <span className="text-xs font-black uppercase tracking-widest text-accent-muted mb-1 block">Speak to Engineer</span>
                      <a href="tel:+971500000000" className="text-2xl font-black text-primary hover:text-accent transition-colors">+971 50 000 0000</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-surface-light text-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-all shadow-sm">
                      <Mail size={24} />
                   </div>
                   <div>
                      <span className="text-xs font-black uppercase tracking-widest text-accent-muted mb-1 block">Official Inquiry</span>
                      <a href="mailto:info@beyrenergy.com" className="text-2xl font-black text-primary hover:text-accent transition-colors text-wrap break-all">info@beyrenergy.com</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-surface-light text-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-all shadow-sm">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <span className="text-xs font-black uppercase tracking-widest text-accent-muted mb-1 block">Visit Headquarters</span>
                      <p className="text-2xl font-black text-primary leading-tight">Dubai Industrial City, <br />Dubai, UAE</p>
                   </div>
                </div>
              </div>

              <div className="mt-auto p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="relative z-10 flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent">
                       <Clock size={24} />
                    </div>
                    <div>
                       <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Response Time</div>
                       <div className="text-lg font-black italic">Under 2 Hours Protected</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-10 lg:p-16 rounded-[4rem] bg-surface-light border border-border relative shadow-premium overflow-hidden">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Send size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-black italic mb-4">Request Received!</h3>
                    <p className="text-foreground-muted mb-10 text-lg">Your inquiry has been successfully routed to our engineering team. We will contact you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-black uppercase text-sm tracking-widest border-b-2 border-accent">Send Another Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                       <div className="flex-1 flex flex-col gap-2">
                          <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Full Name</label>
                          <input {...register("name")} className="w-full bg-white px-8 py-5 rounded-2xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold transition-all" placeholder="John Doe" />
                          {errors.name && <span className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name.message as string}</span>}
                       </div>
                       <div className="flex-1 flex flex-col gap-2">
                          <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Work Email</label>
                          <input {...register("email")} className="w-full bg-white px-8 py-5 rounded-2xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold transition-all" placeholder="john@company.com" />
                          {errors.email && <span className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email.message as string}</span>}
                       </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                       <div className="flex-1 flex flex-col gap-2">
                          <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Phone Number</label>
                          <input {...register("phone")} className="w-full bg-white px-8 py-5 rounded-2xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold transition-all" placeholder="+971 50 000 0000" />
                          {errors.phone && <span className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.phone.message as string}</span>}
                       </div>
                       <div className="flex-1 flex flex-col gap-2">
                          <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Inquiry Subject</label>
                          <input {...register("subject")} className="w-full bg-white px-8 py-5 rounded-2xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold transition-all" placeholder="BESS Rental Quote" />
                          {errors.subject && <span className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.subject.message as string}</span>}
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Project Details</label>
                       <textarea {...register("message")} rows={5} className="w-full bg-white px-8 py-5 rounded-2xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold transition-all resize-none" placeholder="Tell us about your power requirements..."></textarea>
                       {errors.message && <span className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.message.message as string}</span>}
                    </div>

                    <button disabled={isSubmitting} className="btn-primary w-full justify-center group shadow-xl h-20 text-lg">
                       {isSubmitting ? "Routing Inquiry..." : "Submit Secure Request"} 
                       {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Segment */}
      <section className="h-[400px] lg:h-[600px] bg-surface-dark relative grayscale hover:grayscale-0 transition-all duration-1000">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115638.156555198!2d55.1562217112046!3d24.992686159518115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0dad4747ebc7%3A0xc3995f51f506ca64!2sDubai%20Industrial%20City!5e0!3m2!1sen!2sae!4v1709664214567!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
