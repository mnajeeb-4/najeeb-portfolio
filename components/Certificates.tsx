"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, BadgeCheck } from "lucide-react";
import { certificatesData, Certificate } from "@/lib/data";

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Certificates & Achievements
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        Verified credentials from recognized institutions.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 120, damping: 14 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelected(c)}
            className="glass-card shimmer-border p-6 text-left"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-300/10 border border-gold-500/30 w-fit mb-4">
              <Award className="text-gold-400" size={22} />
            </div>
            <h3 className="text-base font-semibold text-cream mb-2 leading-snug">
              {c.title}
            </h3>
            <p className="text-rose text-xs mb-3">{c.issuer}</p>
            <div className="flex items-center gap-1.5 text-gold-400 text-xs">
              <BadgeCheck size={14} /> View credentials
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-lg p-6 md:p-8 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-cream"
              >
                <X size={18} />
              </button>
              <div className="p-3 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-300/10 border border-gold-500/30 w-fit mb-4">
                <Award className="text-gold-400" size={26} />
              </div>
              <h3 className="text-xl font-serif gold-text mb-3">
                {selected.title}
              </h3>
              <div className="space-y-2 text-sm text-cream/90">
                <p>
                  <span className="text-rose">Issuer:</span> {selected.issuer}
                </p>
                {selected.serial && (
                  <p>
                    <span className="text-rose">Serial No:</span>{" "}
                    {selected.serial}
                  </p>
                )}
                {selected.date && (
                  <p>
                    <span className="text-rose">Date:</span> {selected.date}
                  </p>
                )}
                {selected.duration && (
                  <p>
                    <span className="text-rose">Duration:</span>{" "}
                    {selected.duration}
                  </p>
                )}
                {selected.performance && (
                  <p>
                    <span className="text-rose">Performance:</span>{" "}
                    {selected.performance}
                  </p>
                )}
                {selected.description && (
                  <p className="text-rose pt-2 border-t border-gold-500/20 mt-3">
                    {selected.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}