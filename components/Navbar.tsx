"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import Link from "next/link";

const navItems = ["Home", "About", "Skills", "Projects", "Certificates", "Experience", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 flex items-center gap-6"
    >
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`relative text-sm font-medium transition-colors ${
              active === item ? "text-gold-400" : "text-cream/70 hover:text-cream"
            }`}
          >
            {item}
            {active === item && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
              />
            )}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="/admin" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
          <Lock size={18} className="text-gold-500" />
        </Link>
        <button className="gold-btn text-xs px-4 py-2 hidden md:block">Resume</button>
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
}