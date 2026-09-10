"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Qasimabad, Hyderabad, Sindh, Pakistan",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+92 347 1115737",
    href: "tel:+923471115737",
  },
  {
    icon: Mail,
    label: "Primary Email",
    value: "brohinajeeb10@gmail.com",
    href: "mailto:brohinajeeb10@gmail.com",
  },
  {
    icon: Mail,
    label: "Secondary Email",
    value: "mnajeeb0418@gmail.com",
    href: "mailto:mnajeeb0418@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const mailto = `mailto:brohinajeeb10@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        Have an AI project in mind? Let's build something intelligent together.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="glass-card p-6 md:p-8 space-y-5"
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={i}
                {...(c.href ? { href: c.href } : {})}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-gold-500/25 to-gold-300/10 border border-gold-500/30 group-hover:scale-110 transition">
                  <Icon className="text-gold-400" size={18} />
                </div>
                <div>
                  <p className="text-xs text-rose">{c.label}</p>
                  <p className="text-sm text-cream font-medium break-all">
                    {c.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}

          <a
            href="https://wa.me/923471115737"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn w-full mt-4"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="glass-card p-6 md:p-8 space-y-4"
        >
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-black/30 border border-gold-500/25 rounded-2xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold-500 transition"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-black/30 border border-gold-500/25 rounded-2xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold-500 transition"
          />
          <input
            required
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full bg-black/30 border border-gold-500/25 rounded-2xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold-500 transition"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-black/30 border border-gold-500/25 rounded-2xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold-500 transition resize-none"
          />
          <button type="submit" className="gold-btn w-full">
            {sent ? (
              <>
                <CheckCircle2 size={16} /> Message Ready!
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>

      <footer className="mt-20 text-center text-xs text-rose/70">
        © {new Date().getFullYear()} Muhammad Najeeb Brohi — Crafted with AI,
        Python & Passion.
      </footer>
    </section>
  );
}