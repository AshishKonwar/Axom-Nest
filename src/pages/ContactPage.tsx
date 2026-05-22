import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>();

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-hero-gradient py-16 relative overflow-hidden">
        <div className="blob absolute -top-20 -right-20 w-72 h-72 bg-accent/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-white mb-3"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70"
          >
            We're here to help. Reach out for any queries about listings, partnerships, or support.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "Dibrugarh, Assam\nIndia — 786001" },
              { icon: Phone, title: "Phone", text: "+91 11111 11111" },
              { icon: Mail, title: "Email", text: "dibrudigital@gmail.com" },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-card border border-slate-100"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">{title}</div>
                  <div className="text-slate-500 text-sm whitespace-pre-line">{text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-card border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h2>

            {sent && (
              <div className="mb-6 bg-primary/5 border border-primary/20 rounded-xl p-4 text-primary text-sm font-medium">
                ✓ Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                  <Input {...register("name", { required: "Required" })} placeholder="Your name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <Input {...register("email", { required: "Required" })} type="email" placeholder="you@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                <Input {...register("subject", { required: "Required" })} placeholder="How can we help?" />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  {...register("message", { required: "Required" })}
                  rows={5}
                  placeholder="Tell us more…"
                  className="flex w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 resize-none"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
