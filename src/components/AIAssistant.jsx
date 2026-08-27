import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, Terminal, ArrowRight, Zap, CheckCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Intelligent client-side response matcher for instant answers
const getAIResponse = (rawQuery) => {
  const query = rawQuery.toLowerCase().trim();

  if (query.includes('phantomapi') || query.includes('api') || query.includes('chatgpt')) {
    return `**PhantomAPI** is Mahmudur's reverse-engineered API gateway (FastAPI + Playwright) that converts ChatGPT's free web session into an OpenAI-compatible endpoint. It has executed over 50,000+ automated invocations for n8n automations.\n\n🔗 GitHub: https://github.com/mrshibly/PhantomAPI`;
  }

  if (query.includes('apex') || query.includes('swarm') || query.includes('multi-agent') || query.includes('agent')) {
    return `**APEX Hybrid AI Lab** is Mahmudur's local-first multi-agent orchestration architecture. It features a central intent router, self-healing execution loops, conversational memory, and specialized Telegram bot agents powered by local LLMs (Gemma/Ollama).\n\n🔗 GitHub: https://github.com/mrshibly/APEX-Hybrid-AI-Lab`;
  }

  if (query.includes('banglasupport') || query.includes('qwen') || query.includes('fine-tune') || query.includes('bangla')) {
    return `**BanglaSupport-LLM** is an end-to-end Qwen3-8B model fine-tuned with QLoRA for Bengali e-commerce customer support, featuring hybrid RAG policy retrieval and streaming FastAPI endpoints.\n\n🔗 GitHub: https://github.com/mrshibly/BanglaSupport-LLM`;
  }

  if (query.includes('song') || query.includes('n8n') || query.includes('music') || query.includes('automation')) {
    return `**Song-Automation-N8N** is an enterprise multi-modal workflow integrating Salla store webhooks, Claude 3.5 Sonnet lyric generation, Suno V4 audio synthesis, Flux imagery, and custom FastAPI/Whisper video rendering.\n\n🔗 GitHub: https://github.com/mrshibly/Song-Automation-N8N`;
  }

  if (query.includes('llamaocr') || query.includes('ocr') || query.includes('document')) {
    return `**LlamaOCR Pipeline** is a document intelligence engine combining Llama 3.3 Vision and OpenCV adaptive thresholding, achieving 99.2% extraction accuracy on unstructured forms and handwritten sheets.\n\n🔗 GitHub: https://github.com/mrshibly/LlamaOCR-Pipeline`;
  }

  if (query.includes('nasa') || query.includes('space apps') || query.includes('award') || query.includes('google') || query.includes('hack')) {
    return `🏆 **Verified Honors & Accolades:**\n• **NASA Space Apps Winner & Global Nominee (2024)** (Regional Winner, Rajshahi Zone)\n• **NASA Space Apps Regional 2nd Runner-Up (2023)**\n• **Google Hacking Contest 2x Consecutive Champion (2022 & 2023)**\n• **Cisco Cyber Security Certified**`;
  }

  if (query.includes('experience') || query.includes('job') || query.includes('betopia') || query.includes('work') || query.includes('career') || query.includes('butterfly') || query.includes('softvence')) {
    return `💼 **Career Overview:**\n• **AI Developer** at Studio Butterfly (Jul 2026 – Aug 2026): Architecting multi-agent reasoning swarms (LangGraph/LangChain), enterprise RAG, and MCP tool protocols.\n• **AI Developer** at Betopia Group / Softvence (Feb 2026 – Jul 2026): Multi-agent reasoning workflows, FastAPI document analysis & Groq/vLLM inference.\n• **IT Specialist & International Coordinator** at GM Organization (2019 – 2026): Managed cross-border digital operations & international communications.\n• **Founder** at SETU Student Freelance Marketplace (DIU Accelerator Cup Grand Finalist).`;
  }

  if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('python') || query.includes('fastapi')) {
    return `⚡ **Core Technical Arsenal:**\n• **AI/ML:** Python, FastAPI, LangChain, LangGraph, CrewAI, Llama 3.3, PyTorch, FAISS, ChromaDB\n• **Backend:** FastAPI, WebSockets, Redis Streams, Playwright, Docker, Linux / Kali\n• **Automation:** n8n Expert, Make, Zapier, Webhooks\n• **Frontend & DB:** React, Tailwind CSS, PostgreSQL, MongoDB`;
  }

  if (query.includes('education') || query.includes('university') || query.includes('cgpa') || query.includes('gpa') || query.includes('degree')) {
    return `🎓 **Education:**\n• **B.Sc. in Computer Science & Engineering** from Daffodil International University (CGPA: 3.63/4.00, 2022–2025).\n• **HSC Science** from BNMPC (GPA: 5.00/5.00).\n• **SSC Science** from Govt. Laboratory High School (GPA: 5.00/5.00).`;
  }

  if (query.includes('resume') || query.includes('cv') || query.includes('pdf') || query.includes('download')) {
    return `📄 **Resume / CV:**\nYou can download Mahmudur's updated resume directly using this link:\n\n🔗 **[Download Resume (PDF)](/mahmudur_rahman_cv.pdf)**`;
  }

  if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('reach') || query.includes('phone') || query.includes('linkedin')) {
    return `📫 **Contact Information:**\n• **Primary Email:** mahmudurrahman858@gmail.com\n• **Academic Email:** rahman15-5347@diu.edu.bd\n• **Phone / WhatsApp:** +8801517835859\n• **LinkedIn:** https://linkedin.com/in/mrshibly\n• **GitHub:** https://github.com/mrshibly\n\nHe is open to high-impact AI Engineering roles, contract architecture, and consultations.`;
  }

  return `I am Mahmudur Rahman's Interactive AI Assistant. Mahmudur is an AI Systems Architect specializing in autonomous multi-agent workflows, FastAPI microservices, and RAG pipelines.\n\nFeel free to ask me about his **Projects** (PhantomAPI, APEX Lab, Song-Automation, LlamaOCR), **NASA & Google Awards**, **Skills**, **Resume**, or **Contact details**!`;
};

const quickSuggestions = [
  "Tell me about PhantomAPI",
  "What was your NASA Space Apps win?",
  "What are Mahmudur's top AI skills?",
  "How can I contact or hire Mahmudur?"
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hello! I am Mahmudur's AI Assistant. How can I help you explore his systems, research, career background, or resume?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const processQuery = (userQuery) => {
    if (!userQuery.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: userQuery }]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = getAIResponse(userQuery);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 350);
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    processQuery(input);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-13 sm:h-13 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/30 z-50 flex items-center justify-center border border-white/20 hover:scale-105 active:scale-95 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={20} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="relative flex items-center justify-center">
              <Bot size={22} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-blue-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-18 right-4 sm:bottom-22 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[480px] sm:h-[520px] max-h-[75vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 sm:gap-2">
                    <span>Mahmudur's AI Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">Ask about experience, code & resume</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 text-xs">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 mt-0.5">
                      <Bot size={13} />
                    </div>
                  )}
                  <div 
                    className={`px-3.5 py-2.5 rounded-2xl max-w-[88%] leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-xs' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/60 dark:border-slate-700/60 rounded-tl-none font-sans'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                    <Bot size={13} />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-tl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-3 py-2 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex gap-1.5 overflow-x-auto scrollbar-none">
              {quickSuggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => processQuery(suggestion)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 border border-slate-200 dark:border-slate-700 text-[10px] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} className="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, awards, skills..."
                className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition-colors shrink-0 shadow-xs"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
