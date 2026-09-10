"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Typewriter } from "nextjs-simple-typewriter"; // Make sure to install: npm i react-simple-typewriter
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#D4AF37" />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#2D080F"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block glass-card px-4 py-2 mb-6 text-sm text-gold-400"
        >
          ✨ Available for AI, LLM & Python Engineering Roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold font-serif gold-text mb-4"
        >
          Muhammad Najeeb Brohi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-cream mb-6 h-8"
        >
          <Typewriter
            words={[
              "AI & Python Software Engineer",
              "Hybrid RAG Pipeline Architect",
              "Generative AI & LLM Specialist",
              "Predictive ML & Automation Expert",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-rose max-w-2xl mx-auto mb-10 text-sm md:text-base"
        >
          Architecting scalable enterprise Hybrid RAG systems, engineering autonomous scraping engines, and transforming raw data into high-accuracy intelligent applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="gold-btn">Explore Live AI Apps</a>
          <button className="glass-card px-8 py-3 rounded-full text-cream hover:bg-white/10 transition">
            Download Resume / CV
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: <Github />, href: "https://github.com/mnajeeb-4" },
            { icon: <Linkedin />, href: "https://www.linkedin.com/in/muhammad-najeeb-brohi-07883939b" },
            { icon: <Mail />, href: "mailto:brohinajeeb10@gmail.com" },
            { icon: <Phone />, href: "tel:+923471115737" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="p-3 glass-card rounded-full text-gold-400 hover:text-gold-300 hover:scale-110 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}