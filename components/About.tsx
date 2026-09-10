"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Cpu, Zap, Target, Award } from "lucide-react";

const codeLines = [
  `import torch, rag_engine`,
  `engineer = Developer(name="Muhammad Najeeb Brohi", location="Hyderabad, PK")`,
  `print(engineer.get_capabilities())`,
  `# Output: ["Hybrid RAG", "LLM Fine-Tuning", "Predictive ML", "Selenium Automation"]`,
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= codeLines.length) return;
    const full = codeLines[lineIdx];
    if (current.length < full.length) {
      const t = setTimeout(() => {
        setCurrent(full.slice(0, current.length + 1));
      }, 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, full]);
        setCurrent("");
        setLineIdx((i) => i + 1);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [current, lineIdx]);

  return (
    <div className="glass-card p-4 md:p-5 font-mono text-xs md:text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold-500/20">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-[#D1A3B0] text-[11px]">
          najeeb@ai-engine: ~/workspace
        </span>
      </div>
      <div className="space-y-1.5 leading-relaxed">
        <div className="text-[#D1A3B0]">
          <span className="text-gold-500">➜</span>{" "}
          <span className="text-gold-400">~</span> python evaluate_engineer.py
        </div>
        {visibleLines.map((l, i) => (
          <div
            key={i}
            className={
              l.startsWith("#")
                ? "text-gold-400/80"
                : l.startsWith("engineer")
                ? "text-[#F3E5AB]"
                : "text-cream"
            }
          >
            {l}
          </div>
        ))}
        {lineIdx < codeLines.length && (
          <div className="text-cream">
            {current}
            <span className="inline-block w-2 h-4 bg-gold-500 ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

function Counter({
  end,
  suffix,
  label,
  icon: Icon,
}: {
  end: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setVal(end);
        clearInterval(interval);
      } else setVal(Math.floor(start));
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass-card p-5 flex flex-col items-center text-center"
    >
      <Icon className="text-gold-500 mb-2" size={22} />
      <div className="text-2xl md:text-3xl font-bold gold-text">
        {val}
        {suffix}
      </div>
      <div className="text-xs text-rose mt-1">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        From Qasimabad, Hyderabad — building enterprise-grade AI systems that
        actually ship.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="glass-card p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs mb-3">
              <MapPin size={14} /> Qasimabad, Hyderabad, Sindh, Pakistan
            </div>
            <h3 className="text-2xl md:text-3xl font-serif gold-text mb-4">
              Engineering Intelligence, One Pipeline at a Time.
            </h3>
            <p className="text-cream/85 text-sm leading-relaxed mb-4">
              I'm an AI & Python Software Engineer specializing in Large
              Language Models, Hybrid RAG architectures, and generative
              intelligence. I turn raw, messy data into production-ready AI
              systems that drive real business outcomes.
            </p>
            <p className="text-rose text-sm leading-relaxed">
              From fine-tuning LLMs and designing vector search pipelines to
              building autonomous scrapers and predictive ML engines — I ship
              bug-free, optimized architectures.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          <Terminal />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Counter
          end={80}
          suffix="%+"
          label="Workflow Automation Efficiency"
          icon={Zap}
        />
        <Counter
          end={99}
          suffix=".1%"
          label="Model Accuracy Achieved"
          icon={Target}
        />
        <Counter
          end={4}
          suffix="+"
          label="Enterprise AI Architectures Deployed"
          icon={Award}
        />
      </div>
    </section>
  );
}