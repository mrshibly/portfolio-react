import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

const defaultData = {
  hero: {
    name: "Md. Mahmudur Rahman",
    title: "Backend, AI & Automation Engineer",
    bio: "AI Engineer specializing in autonomous multi-agent workflows, production-ready RAG pipelines, and highly-scalable backend services. NASA Space Apps Global Winner & Google Hacking Champion.",
    image: "/profile.png",
    avatar: "/profile.png"
  },
  affiliations: [
    "NASA Space Apps",
    "Google",
    "BASIS",
    "Daffodil International University",
    "Softvence Agency",
    "Betopia Group",
    "GM Organization",
    "Creative IT Institute",
    "Red Crescent Youth"
  ],
  projects: [
    {
      id: "bioacoustic-pneumonia-hear-xai",
      title: "Bioacoustic Pneumonia & Respiratory Disease Detection via AST & XAI",
      category: "Bioacoustic AI / Healthcare ML",
      desc: "Clinician-interpretable bioacoustic diagnostic framework using Audio Spectrogram Transformers and Explainable AI (Grad-CAM) on ICBHI 2017 benchmark with 0% patient data leakage.",
      tags: ["Audio Spectrogram Transformer", "PyTorch", "Explainable AI (Grad-CAM)", "SMOTE", "ICBHI Benchmark"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/bioacoustic-pneumonia-hear-xai",
      featured: true,
      stars: 2
    },
    {
      id: "song-automation-n8n",
      title: "Song-Automation-N8N",
      category: "Workflow Automation",
      desc: "Asynchronous pipeline orchestrating Salla store webhooks, Claude 3.5 Sonnet lyric generation, Suno V4 audio synthesis, Flux image generation, and custom FastAPI/Whisper video rendering microservice.",
      tags: ["n8n", "FastAPI", "Whisper", "Claude 3.5", "Suno AI", "Telegram Bot"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/Song-Automation-N8N",
      featured: true,
      stars: 1
    },
    {
      id: "autonomous-research-agent",
      title: "Autonomous AI Research Agent",
      category: "Multi-Agent Systems",
      desc: "Multi-agent system coordinating Planner, Search, Paper (PDF parsing), Summarizer, Critic, and Writer agents. Implements Hybrid RAG (FAISS + BM25) and WebSockets live streaming.",
      tags: ["Multi-Agent", "LangChain", "FAISS", "FastAPI", "WebSockets", "BM25 Hybrid RAG"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/autonomous-research-agent",
      liveDemo: "https://huggingface.co/spaces/mrshibly/autonomous-research-agent",
      featured: true,
      stars: 3
    },
    {
      id: "data-analyst-agent",
      title: "Lumina Analyst — Autonomous AI Data Analyst",
      category: "Autonomous AI Agents",
      desc: "Autonomous AI data analyst featuring AST-sandboxed Python execution, Scikit-Learn linear regression & Isolation Forest anomaly detection, Groq multi-model failover, and executive PDF reporting.",
      tags: ["FastAPI", "Python", "React 19", "TypeScript", "Scikit-Learn", "Plotly", "Groq"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/data-analyst-agent",
      featured: true,
      stars: 2
    },
    {
      id: "rag-assistant-fastapi",
      title: "Mini AI Assistant (Production RAG & Tool Calling)",
      category: "Production RAG / Microservices",
      desc: "High-throughput FastAPI microservice with document ingestion (PDF, Markdown), fastembed BGE-small embeddings, persistent ChromaDB collections, conversational memory, and order/product tool calling.",
      tags: ["FastAPI", "ChromaDB", "FastEmbed", "Groq Llama-3.3", "LangChain", "Docker"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/rag-assistant-fastapi",
      liveDemo: "https://rag-assistant-fastapi.onrender.com/docs",
      featured: true,
      stars: 2
    },
    {
      id: "phantomapi",
      title: "PhantomAPI — Reverse AI Gateway",
      category: "AI Infrastructure",
      desc: "An innovative bridge that transforms ChatGPT's free web interface into an OpenAI-compatible API, enabling free AI automation for n8n agents with real-time SSE streaming.",
      tags: ["FastAPI", "Playwright", "Python", "Docker", "SSE Streaming", "n8n"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/PhantomAPI",
      featured: true,
      stars: 8
    },
    {
      id: "banglasupport-llm",
      title: "BanglaSupport-LLM (QLoRA Domain Fine-Tuning)",
      category: "LLM Fine-Tuning & NLP",
      desc: "Instruction fine-tuning on 289K curated Bangla datasets using Unsloth (4-bit NF4). Evaluated across BLEU-4, ROUGE-L, and BERTScore with Document RAG and agentic SQLite tool calling.",
      tags: ["Unsloth (QLoRA)", "Qwen", "FastAPI", "ChromaDB", "React", "BERTScore"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/BanglaSupport-LLM",
      featured: true,
      stars: 2
    },
    {
      id: "eraao",
      title: "ERAAO — Applied AI & Cybersecurity Platform",
      category: "Full-Stack SaaS",
      desc: "Enterprise-grade Applied AI and Offensive Cybersecurity Learning Academy & B2B Consulting Platform built with Next.js 16 App Router, FastAPI, PostgreSQL 16, and Redis 7 rate-limiting.",
      tags: ["Next.js 16", "FastAPI", "PostgreSQL 16", "Redis 7", "Python 3.12", "Argon2"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/ERAAO",
      liveDemo: "https://eraao.com",
      featured: true,
      stars: 2
    }
  ],
  stats: [
    { label: "Systems Built", value: "24+" },
    { label: "Agentic Workflows", value: "150+" },
    { label: "Professional Experience", value: "07 Years" },
    { label: "Global Nominee", value: "03 Times" }
  ],
  resumeUrl: "https://example.com/resume.pdf",
  experience: [
    {
      title: "AI Developer",
      company: "Betopia Group",
      duration: "Feb 2026 - Present",
      desc: "Architecting AI-native platforms using FastAPI and multi-agent workflows. Optimizing LLM inference using Groq and vLLM.",
      logo: ""
    },
    {
      title: "IT Specialist & International Coordinator",
      company: "GM Organization",
      duration: "2019 - 2026",
      desc: "Managed global communications and managed digital assets for 7+ years.",
      logo: ""
    }
  ],
  leadership: [
    { 
      title: "Lead Executive",
      org: "Cyber Security Club", 
      duration: "2024 - 2026",
      desc: "Organized events and promoted cybersecurity awareness among students.",
      logo: "" 
    },
    { 
      title: "Campus Ambassador",
      org: "Creative IT Institute", 
      duration: "2023 - 2026",
      desc: "Coordinated tech seminars and created awareness regarding skilled training.",
      logo: "" 
    }
  ],
  certifications: [
    {
      title: "NASA Space Apps Challenge — Winner",
      issuer: "NASA",
      date: "2024",
      link: "",
      icon: ""
    },
    {
      title: "Google Hacking Contest — Champion",
      issuer: "Google",
      date: "2023",
      link: "",
      icon: ""
    }
  ],
  techStack: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "AI / ML" },
    { name: "LangChain", icon: "", category: "AI / ML" },
    { name: "CrewAI", icon: "", category: "AI / ML" },
    { name: "LangGraph", icon: "", category: "AI / ML" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Backend" },
    { name: "n8n", icon: "", category: "Automation" },
    { name: "Playwright", icon: "", category: "Automation" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "2022 - 2025",
      desc: "Focused on AI, Algorithms, and Software Engineering. GPA: 3.64/4.00",
      logo: ""
    }
  ],
  competencies: [
    {
      title: "Agentic Workflows",
      desc: "Architecting autonomous multi-agent systems using CrewAI, LangGraph, and AutoGen for complex reasoning.",
      icon: "Network",
      accent: "#3B82F6"
    },
    {
      title: "Python & FastAPI",
      desc: "Building highly-scalable, production-ready backend services and AI-native application bridges.",
      icon: "Zap",
      accent: "#8B5CF6"
    },
    {
      title: "Workflow Automation",
      desc: "n8n Expert designing complex business process automations and intelligent lead generation systems.",
      icon: "Cpu",
      accent: "#10B981"
    },
    {
      title: "RAG & NLP",
      desc: "Developing production-ready RAG pipelines and semantic search systems with FAISS and ChromaDB.",
      icon: "Database",
      accent: "#06B6D4"
    },
    {
      title: "Cyber Security",
      desc: "Champion hacker with deep expertise in ethical hacking and strategic technical leadership.",
      icon: "Shield",
      accent: "#EF4444"
    },
    {
      title: "Document AI",
      desc: "Intelligent document processing and structured extraction using Llama 3.3 and computer vision.",
      icon: "Brain",
      accent: "#F59E0B"
    }
  ],
  contact: {
    email: "mahmudurrahman858@gmail.com",
    headline: "Ready to automate the Unimaginable?",
    subtext: "I'm currently open to architectural consultations, specialized AI engineering roles, and high-impact technical partnerships.",
    linkedin: "https://linkedin.com/in/mrshibly",
    github: "https://github.com/mrshibly",
    twitter: "https://twitter.com/mrshibly"
  },
  manifesto: {
    lines: [
      "AI is not a tool, it's a <span class='text-electric'>paradigm</span> shift.",
      "I bridge the gap between <span class='text-drama'>research</span> and production automation.",
      "Building the <span class='text-electric'>infrastructure</span> of digital reasoning."
    ]
  }
};

// GET portfolio data
router.get('/', async (req, res) => {
  try {
    // Attempt to fetch from DB with a timeout
    const portfolio = await Portfolio.findOne().maxTimeMS(2000);
    if (!portfolio) {
      // If no document exists, try to create it, but if that fails, return defaultData
      try {
        const newPortfolio = await Portfolio.create(defaultData);
        return res.json(newPortfolio);
      } catch (createError) {
        console.warn("Could not create portfolio in DB, using default data:", createError.message);
        return res.json(defaultData);
      }
    }
    res.json(portfolio);
  } catch (error) {
    console.error("Database fetch failed, serving default data:", error.message);
    // Return defaultData as a fallback instead of 500
    res.json(defaultData);
  }
});

// Verify admin password
router.get('/verify', (req, res) => {
  if (req.headers.authorization === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// PUT portfolio data
router.put('/', async (req, res) => {
  try {
    if (req.headers.authorization !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Update all provided fields reliably
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, runValidators: true }
    );
    
    if (!updatedPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    
    res.json(updatedPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

