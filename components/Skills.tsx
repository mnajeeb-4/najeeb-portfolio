"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Server,
  Bot,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Generative AI & RAG",
    icon: Brain,
    skills: [
      "Hybrid RAG Pipelines",
      "Vector DBs (Pinecone, ChromaDB)",
      "LangChain",
      "Prompt Engineering",
      "Semantic Search",
      "Fine-Tuning LLMs",
    ],
  },
  {
    title: "Machine Learning & Data",
    icon: Database,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Predictive Analytics",
      "Supervised/Unsupervised Learning",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Python (Advanced OOP)",
      "RESTful API Design",
      "Microservices",
      "FastAPI",
      "Streamlit",
    ],
  },
  {
    title: "Scraping & Automation",
    icon: Bot,
    skills: [
      "Selenium",
      "Scrapy",
      "BeautifulSoup",
      "Dynamic DOM Handling",
      "Anti-Bot Bypass",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: [
      "Git / GitHub",
      "Linux CLI",
      "VS Code",
      "Supabase",
      "Docker",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Technical Skills Vault
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        The full stack of AI engineering — from raw data ingestion to
        production deployment.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card shimmer-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-300/10 border border-gold-500/30">
                  <Icon className="text-gold-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-cream">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] md:text-xs px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-cream/90 hover:bg-[#D4AF37]/20 hover:border-gold-500/50 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}