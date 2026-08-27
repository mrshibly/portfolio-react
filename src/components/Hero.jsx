import React from 'react'
import { 
  FileText, ArrowUpRight, Mail, MapPin, 
  Award, Terminal, Layers, ArrowRight
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  const specialties = [
    "Multi-Agent Swarms",
    "LangGraph & LangChain",
    "Production RAG",
    "Model Context Protocol (MCP)",
    "FastAPI Microservices",
    "Llama 3.3 & Groq"
  ]

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800/80">
      
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 bg-linear-grid opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        {/* Top Precision Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">AVAILABLE FOR ROLES</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Award size={13} className="text-blue-600 dark:text-blue-400" />
            <span>NASA Space Apps Global Nominee · 2x Google Champion</span>
          </div>
        </div>

        {/* Identity & Portrait Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 mb-8 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          
          <div className="space-y-1.5 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Md. Mahmudur Rahman
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
              AI Systems Architect & Backend Engineer
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
              <MapPin size={12} />
              <span>Dhaka, Bangladesh · DIU B.Sc. CSE (3.63 CGPA)</span>
            </p>
          </div>

          {/* Crisp Framed Portrait */}
          <div className="shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-300/80 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs">
              <img 
                src={hero.avatar || "/profile.png"} 
                alt="Md. Mahmudur Rahman" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

        </div>

        {/* Editorial Statement */}
        <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          <p>
            I architect autonomous multi-agent workflows, deterministic RAG pipelines, and high-concurrency Python microservices. Most recently at <strong className="font-semibold text-slate-900 dark:text-white">Studio Butterfly</strong> and <strong className="font-semibold text-slate-900 dark:text-white">Betopia Group / Softvence</strong>, I built production agent swarms with LangGraph, Model Context Protocol (MCP) tool systems, and low-latency LLM inference pipelines.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Passionate about deterministic agent execution, clean system contracts, and bridging cutting-edge AI research with resilient production infrastructure.
          </p>
        </div>

        {/* Linear Hairline Specialties Strip */}
        <div className="mb-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5 font-semibold">
            Core Architecture & Tooling
          </span>
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Precision Action & Link Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm font-medium">
          
          <a
            href="/mahmudur_rahman_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-2xs transition-colors"
          >
            <FileText size={14} />
            <span>Download CV (PDF)</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub (@mrshibly)</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <Mail size={14} />
            <span>{contact.email}</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero
