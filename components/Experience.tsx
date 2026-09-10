"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "AI & Python Software Engineer Intern",
    org: "Gexton Institute of Technology",
    period: "2026",
    points: [
      "Engineered AI automation bots, cutting manual data entry by over 80%.",
      "Built backend pipelines integrating ML models, third-party REST APIs, and core Python logic.",
      "Designed web scrapers extracting thousands of dynamic data points daily.",
      "Collaborated on Generative AI capabilities and prompt architecture.",
    ],
  },
];

const education = [
  {
    degree: "Intermediate",
    school: "Govt. Boys Higher Secondary School Garelo, Larkana",
    year: "Completed 2026",
  },
  {
    degree: "Matriculation",
    school: "Govt. Boys Higher Secondary School Garelo, Larkana",
    year: "Completed 2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Professional Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-sub"
      >
        Real-world impact delivered through intelligent engineering.
      </motion.p>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-400 to-transparent md:-translate-x-1/2" />

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative pl-14 md:pl-0 mb-12"
          >
            <div className="absolute left-2 md:left-1/2 top-3 w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.9)] md:-translate-x-1/2" />
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="md:text-right md:pr-8">
                <div className="glass-card p-6 inline-block text-left">
                  <div className="flex items-center gap-2 text-gold-400 text-xs mb-2">
                    <Briefcase size={14} /> {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold text-cream">
                    {exp.role}
                  </h3>
                  <p className="text-rose text-sm mb-3">{exp.org}</p>
                  <ul className="text-sm text-cream/85 space-y-1.5 list-disc list-inside">
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-serif gold-text text-center mt-16 mb-8"
      >
        Education
      </motion.h3>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 text-gold-400 text-xs mb-2">
              <GraduationCap size={14} /> {e.year}
            </div>
            <h4 className="text-lg font-semibold text-cream">{e.degree}</h4>
            <p className="text-rose text-sm mt-1">{e.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}