"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, Sparkles } from "lucide-react";
import { projectsData, Project } from "@/lib/data";
import StreamlitModal from "./StreamlitModal";

const filters = [
  "All",
  "Generative AI & RAG",
  "Machine Learning",
  "Streamlit Live Apps",
  "Automation & Scraping",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Live AI & Streamlit Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        Click any project to launch its live Streamlit interface — directly
        inside this portfolio.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-all ${
              filter === f
                ? "bg-gradient-to-r from-gold-500 to-gold-300 text-[#0D0104] border-transparent font-semibold"
                : "border-gold-500/30 text-cream/80 hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ y: -8 }}
              className="glass-card shimmer-border p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-cream leading-snug">
                  {p.title}
                </h3>
                <Sparkles className="text-gold-500 shrink-0" size={18} />
              </div>
              <p className="text-rose text-sm mb-4 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-cream/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelected(p)}
                  className="gold-btn text-xs px-5 py-2.5"
                >
                  <Play size={14} /> Launch Live App
                </button>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn text-xs px-5 py-2.5"
                  >
                    <ExternalLink size={14} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <StreamlitModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, Sparkles } from "lucide-react";
import { projectsData, Project } from "@/lib/data";
import StreamlitModal from "./StreamlitModal";

const filters = [
  "All",
  "Generative AI & RAG",
  "Machine Learning",
  "Streamlit Live Apps",
  "Automation & Scraping",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Live AI & Streamlit Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        Click any project to launch its live Streamlit interface — directly
        inside this portfolio.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-all ${
              filter === f
                ? "bg-gradient-to-r from-gold-500 to-gold-300 text-[#0D0104] border-transparent font-semibold"
                : "border-gold-500/30 text-cream/80 hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ y: -8 }}
              className="glass-card shimmer-border p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-cream leading-snug">
                  {p.title}
                </h3>
                <Sparkles className="text-gold-500 shrink-0" size={18} />
              </div>
              <p className="text-rose text-sm mb-4 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-cream/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelected(p)}
                  className="gold-btn text-xs px-5 py-2.5"
                >
                  <Play size={14} /> Launch Live App
                </button>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn text-xs px-5 py-2.5"
                  >
                    <ExternalLink size={14} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <StreamlitModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}