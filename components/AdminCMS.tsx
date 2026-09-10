"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Plus,
  Trash2,
  Edit,
  LogOut,
  FolderKanban,
  Award,
  Inbox,
  Wrench,
} from "lucide-react";
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/data";


export default function AdminCMS() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"projects" | "certificates" | "skills" | "inbox">(
    "projects"
  );
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "Generative AI & RAG",
    streamlitUrl: "",
    tech: "",
    github: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const s = sessionStorage.getItem("najeeb_admin_auth");
      if (s === "true") setAuthed(true);
    }
  }, []);

  const handleLogin = () => {
    const secret =
      process.env.NEXT_PUBLIC_ADMIN_SECRET || "najeeb-admin-2026";
    if (password === secret) {
      setAuthed(true);
      sessionStorage.setItem("najeeb_admin_auth", "true");
      setError("");
    } else {
      setError("Access Denied — Only Muhammad Najeeb Brohi can access this.");
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    sessionStorage.removeItem("najeeb_admin_auth");
  };

  const addProject = () => {
    if (!newProject.title || !newProject.streamlitUrl) return;
    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: newProject.title,
        description: newProject.description,
        category: newProject.category,
        streamlitUrl: newProject.streamlitUrl,
        tech: newProject.tech.split(",").map((t) => t.trim()).filter(Boolean),
        github: newProject.github || undefined,
      },
    ]);
    setNewProject({
      title: "",
      description: "",
      category: "Generative AI & RAG",
      streamlitUrl: "",
      tech: "",
      github: "",
    });
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="glass-card shimmer-border p-8 max-w-md w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-3xl bg-gradient-to-br from-gold-500/30 to-gold-300/10 border border-gold-500/30">
              <Lock className="text-gold-400 w-10 h-10" />
            </div>
          </div>
          <h1 className="text-2xl font-serif gold-text text-center mb-2">
            Admin Portal
          </h1>
          <p className="text-center text-rose text-xs mb-6">
            Restricted Access — Muhammad Najeeb Brohi only
          </p>
          <input
            type="password"
            placeholder="Enter Admin Secret Key"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full bg-black/30 border border-gold-500/30 rounded-2xl px-4 py-3 text-cream mb-3 focus:outline-none focus:border-gold-500 transition"
          />
          {error && (
            <p className="text-red-400 text-xs mb-3 text-center">{error}</p>
          )}
          <button onClick={handleLogin} className="gold-btn w-full">
            Authenticate
          </button>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "inbox", label: "Inbox", icon: Inbox },
  ] as const;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-serif gold-text">
          Admin CMS Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="glass-btn text-xs px-4 py-2"
        >
          <LogOut size={14} /> Logout
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                tab === t.id
                  ? "bg-gradient-to-r from-gold-500 to-gold-300 text-[#0D0104] border-transparent font-semibold"
                  : "border-gold-500/30 text-cream/80 hover:bg-white/5"
              }`}
            >
              <Icon size={14} /> {t.label}
            </button>
          );
        })}
      </div>

      {tab === "projects" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6"
          >
            <h2 className="text-lg text-cream mb-4 flex items-center gap-2">
              <Plus size={18} className="text-gold-500" /> Add New Project
            </h2>
            <div className="space-y-3">
              <input
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500"
              />
              <textarea
                placeholder="Description"
                rows={3}
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500 resize-none"
              />
              <select
                value={newProject.category}
                onChange={(e) =>
                  setNewProject({ ...newProject, category: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500"
              >
                <option>Generative AI & RAG</option>
                <option>Machine Learning</option>
                <option>Streamlit Live Apps</option>
                <option>Automation & Scraping</option>
              </select>
              <input
                placeholder="Streamlit URL"
                value={newProject.streamlitUrl}
                onChange={(e) =>
                  setNewProject({ ...newProject, streamlitUrl: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500"
              />
              <input
                placeholder="Tech (comma separated)"
                value={newProject.tech}
                onChange={(e) =>
                  setNewProject({ ...newProject, tech: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500"
              />
              <input
                placeholder="GitHub URL (optional)"
                value={newProject.github}
                onChange={(e) =>
                  setNewProject({ ...newProject, github: e.target.value })
                }
                className="w-full bg-black/30 border border-gold-500/25 rounded-xl px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold-500"
              />
              <button onClick={addProject} className="gold-btn w-full">
                <Plus size={16} /> Add Project
              </button>
            </div>
          </motion.div>

          <div className="space-y-4">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 flex items-start justify-between gap-3"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-cream truncate">
                    {p.title}
                  </h3>
                  <p className="text-xs text-rose mt-1">{p.category}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="p-2 rounded-full hover:bg-white/10 text-gold-400">
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => deleteProject(p.id)}
                    className="p-2 rounded-full hover:bg-red-500/20 text-red-400"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {tab === "certificates" && (
        <div className="glass-card p-6">
          <h2 className="text-lg text-cream mb-2">Manage Certificates</h2>
          <p className="text-rose text-sm">
            Upload new certificates and licenses. (Connect Supabase for full
            image upload.)
          </p>
          <button className="gold-btn text-sm mt-4">
            <Plus size={14} /> Upload Certificate
          </button>
        </div>
      )}

      {tab === "skills" && (
        <div className="glass-card p-6">
          <h2 className="text-lg text-cream mb-2">Update Skills</h2>
          <p className="text-rose text-sm">
            Manage technical stack badges dynamically.
          </p>
        </div>
      )}

      {tab === "inbox" && (
        <div className="glass-card p-6">
          <h2 className="text-lg text-cream mb-2">📬 Messages Inbox</h2>
          <p className="text-rose text-sm">
            View real-time messages sent through the Contact Form.
          </p>
        </div>
      )}
    </div>
  );
}