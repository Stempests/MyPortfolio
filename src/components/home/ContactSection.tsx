"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { ResumeButton } from "@/components/ui/ResumeButton";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      reset();

      // Reset success status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-subtle-red to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <ResumeButton 
            text="Download My Resume" 
            variant="primary"
            iconType="download"
            className="w-full md:w-auto text-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px]" />

          <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
            {/* Honeypot field for simple spam protection */}
            <div className="hidden" aria-hidden="true">
              <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  {...register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-subtle-red focus:ring-1 focus:ring-subtle-red transition-all resize-none"
                placeholder="Let's build something amazing together..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 group"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Message Sent Successfully 🚀
                </>
              ) : status === "error" ? (
                <>
                  <XCircle className="w-6 h-6" />
                  Something went wrong
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
