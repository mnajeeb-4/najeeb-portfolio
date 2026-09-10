"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 glass-card shimmer-border px-4 md:px-6 py-3 flex items-center justify-center gap-4 md:gap-6 w-[95vw] md:w-auto md:max-w-fit"
    >
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`relative text-sm font-medium transition-colors ${
              active === item
                ? "text-gold-400"
                : "text-cream/70 hover:text-cream"
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

      <div className="flex items-center justify-center gap-2 md:gap-4 w-full lg:w-auto">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn text-xs px-4 py-2 hidden md:inline-flex"
        >
          <Download size={14} /> Resume
        </a>
        <button
          className="lg:hidden text-cream p-1 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-0 right-0 glass-card p-4 flex flex-col gap-3 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                }}
                className="text-sm text-cream/80 hover:text-gold-400 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}