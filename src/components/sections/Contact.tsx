"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: "Pakistan", href: undefined },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? Send me a message."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card space-y-6 p-8"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field} className="relative">
                <label
                  htmlFor={field}
                  className="mb-2 block text-sm font-medium text-muted"
                >
                  {field === "message" ? "Message" : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    required
                    rows={5}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    required
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="input-field"
                    placeholder={
                      field === "name" ? "Your name" : "your@email.com"
                    }
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-full disabled:opacity-70"
            >
              {status === "loading" && (
                <Loader2 size={18} className="animate-spin" />
              )}
              {status === "success" && (
                <CheckCircle size={18} className="text-green-400" />
              )}
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              {status === "idle" && <Send size={18} />}
            </motion.button>

            {status === "error" && (
              <p className="text-center text-sm text-red-400">{errorMsg}</p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-cyan">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-foreground transition-colors hover:text-accent-cyan"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan hover:shadow-glow-cyan"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Decorative illustration */}
            <div className="relative mt-12 hidden h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 opacity-40">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="h-3 w-3 rounded-full bg-accent-cyan"
                    />
                  ))}
                </div>
              </div>
              <p className="absolute bottom-4 left-4 text-xs text-muted">
                Available for remote & on-site opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
