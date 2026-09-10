"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Plus, Trash2, Edit } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Note: In production, use Supabase Auth instead of simple secret
    if (password === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      setIsAuthenticated(true);
    } else {
      alert("Access Denied: Only Muhammad Najeeb Brohi can access this.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 max-w-md w-full"
        >
          <div className="flex justify-center mb-6">
            <Lock className="text-gold-500 w-12 h-12" />
          </div>
          <h1 className="text-2xl font-serif gold-text text-center mb-2">Admin Portal</h1>
          <p className="text-center text-rose text-sm mb-6">Restricted Access</p>
          <input
            type="password"
            placeholder="Enter Admin Secret Key"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black/30 border border-gold-500/30 rounded-xl px-4 py-3 text-cream mb-4 focus:outline-none focus:border-gold-500"
          />
          <button onClick={handleLogin} className="gold-btn w-full">
            Authenticate
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-serif gold-text mb-8">Admin CMS Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Projects Section */}
        <div className="glass-card p-6">
          <h2 className="text-xl text-cream mb-4 flex items-center gap-2"><Plus size={20} /> Add / Edit Projects</h2>
          <p className="text-rose text-sm mb-4">Manage your live Streamlit URLs and project details.</p>
          <button className="gold-btn text-sm">+ New Project</button>
        </div>
        {/* Manage Certificates */}
        <div className="glass-card p-6">
          <h2 className="text-xl text-cream mb-4 flex items-center gap-2"><Edit size={20} /> Manage Certificates</h2>
          <p className="text-rose text-sm mb-4">Upload new certificates and licenses.</p>
          <button className="gold-btn text-sm">Upload Certificate</button>
        </div>
        {/* Messages Inbox */}
        <div className="glass-card p-6">
          <h2 className="text-xl text-cream mb-4">📬 Messages Inbox</h2>
          <p className="text-rose text-sm">View contact form submissions.</p>
        </div>
      </div>
    </div>
  );
}