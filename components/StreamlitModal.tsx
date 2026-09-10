"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MonitorPlay } from "lucide-react";
import type { Project } from "@/lib/data";

export default function StreamlitModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gold-500/20">
              <div className="flex items-center gap-3 min-w-0">
                <MonitorPlay className="text-gold-500 shrink-0" size={20} />
                <h3 className="text-sm md:text-base font-semibold text-cream truncate">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.streamlitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 text-gold-400 transition"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-cream transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black/40">
              <iframe
                src={project.streamlitUrl}
                title={project.title}
                className="w-full h-full"
                allow="clipboard-write"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}