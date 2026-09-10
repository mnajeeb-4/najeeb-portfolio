export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  streamlitUrl: string;
  tech: string[];
  github?: string;
};

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  serial?: string;
  date?: string;
  duration?: string;
  performance?: string;
  description?: string;
  imageUrl?: string;
};
export const projectsData = [
  {
    id: 1,
    title: "Enterprise Hybrid RAG System",
    tech: ["Python", "Vector DB", "LangChain", "LLM APIs"],
    description: "Scalable retrieval-augmented generation engine combining dense and sparse mechanisms for context-aware, zero-hallucination querying.",
    streamlitUrl: "https://ai-chatbot-aeyurfdcszn26sjmmamdg6.streamlit.app/",
    category: "Generative AI & RAG",
  },
  {
    id: 2,
    title: "Intelligent Financial Advisory Engine",
    tech: ["Machine Learning", "Scikit-Learn", "Pandas", "Predictive Logic"],
    description: "Evaluates user income streams and budget data to automatically generate custom risk-indexed wealth management strategies.",
    streamlitUrl: "https://ens92lajr354nxmens6mfj.streamlit.app/",
    category: "Machine Learning",
  },
  {
    id: 3,
    title: "AI-Powered Attendance & Monitoring Architecture",
    tech: ["Computer Vision", "OpenCV/QR", "Python", "Streamlit"],
    description: "Real-time attendance platform featuring dynamic QR verification and interactive admin monitoring analytics.",
    streamlitUrl: "https://financialadvisor-a84b83lyagytbuvxn32wr7.streamlit.app/",
    category: "Streamlit Live Apps",
  },
  {
    id: 4,
    title: "Advanced Data Extraction & Automation Suite",
    tech: ["Selenium", "Scrapy", "High-Concurrency Python", "NumPy"],
    description: "High-performance scraping toolkit designed to bypass anti-bot protections and feed sanitized data directly into ML pipelines.",
    streamlitUrl: "https://news-scraper-subhgdnmpxojqqhyg927tv.streamlit.app/",
    category: "Automation & Scraping",
  },
];

export const certificatesData = [
  {
    id: 1,
    title: "Python Programming Certification",
    issuer: "Gexton Education",
    serial: "01287",
    description: "Three Month Course. Registered with NAVTTC, BBSHRRDB, PSEB, P@SHA.",
    performance: "Good",
  },
  {
    id: 2,
    title: "Python Programming Internship Completion Letter",
    issuer: "Gexton Corporation / Gexton Education",
    date: "July 23, 2026",
    duration: "6-Week Internship",
    performance: "Outstanding",
  },
  {
    id: 3,
    title: "Specialization in Generative AI, LLMs & Automation",
    issuer: "Gexton Institute of Technology",
  },
];