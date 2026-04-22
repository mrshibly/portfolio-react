import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

const defaultData = {
  hero: {
    name: "Md. Mahmudur Rahman",
    title: "Agentic AI Systems Architect",
    bio: "AI Engineer & Python Specialist. I architect autonomous multi-agent workflows, high-performance backend services, and production-ready RAG pipelines. NASA Space Apps Global Winner '21 & Google Hacking Participant.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
  },
  projects: [
    {
      id: "llamaocr",
      title: "LlamaOCR",
      category: "Document Intelligence",
      desc: "An advanced OCR pipeline for structured data extraction from handwritten and digital documents using Llama 3.3 and OpenCV.",
      tags: ["Llama 3.3", "OpenCV", "Python", "OCR"],
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2000&auto=format&fit=crop",
      link: "https://github.com/mrshibly/LlamaOCR-Pipeline",
      featured: true
    },
    {
      id: "phantomapi",
      title: "PhantomAPI",
      category: "AI Infrastructure",
      desc: "An innovative bridge that transforms ChatGPT's free web interface into an OpenAI-compatible API, enabling free AI automation for n8n agents.",
      tags: ["FastAPI", "Playwright", "Python", "API"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      link: "https://github.com/mrshibly/PhantomAPI",
      featured: true
    },
    {
      id: "research-agent",
      title: "Autonomous Research Agent",
      category: "Multi-Agent Systems",
      desc: "A multi-agent system built with LangChain that autonomously searches academic sources and analyzes PDFs to generate cited research reports.",
      tags: ["LangChain", "Multi-Agent", "Research", "Python"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2000&auto=format&fit=crop",
      link: "https://github.com/mrshibly/autonomous-research-agent",
      featured: true
    },
    {
      id: "bd-insight",
      title: "BD-Insight",
      category: "NLP / RAG",
      desc: "A domain-specific RAG system tailored for the Bangla language, utilizing FAISS and Flan-T5 for deep document analysis.",
      tags: ["FAISS", "Flan-T5", "Bangla", "RAG"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
      featured: true
    }
  ],
  stats: [
    { label: "Systems Built", value: "24+" },
    { label: "Agentic Workflows", value: "150+" },
    { label: "Data Processed", value: "12TB" },
    { label: "Global Hackathons", value: "05" }
  ],
  affiliations: [
    { name: "Cyber Security Club", logo: "" },
    { name: "BASIS Student Forum", logo: "" },
    { name: "Team Apex", logo: "" }, 
    { name: "Creative IT Institute", logo: "" },
    { name: "Daffodil University", logo: "" },
    { name: "Red Crescent", logo: "" },
    { name: "GM Organization", logo: "" },
    { name: "SETU Founder", logo: "" }
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
      desc: "Strategic technical leadership and competitive hacking (Google Hacking Contest Champion).",
      icon: "Shield",
      accent: "#EF4444"
    },
    {
      title: "Document AI",
      desc: "Intelligent document processing and OCR using Llama 3.3 and advanced computer vision.",
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
    twitter: "https://twitter.com/mr_shibly"
  },
  manifesto: {
    lines: [
      "I believe code is not just instructions, but a medium for digital evolution.",
      "Intelligence should be decentralized and autonomous.",
      "Simplicity is the ultimate sophistication in architectural design."
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

