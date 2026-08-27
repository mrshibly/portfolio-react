import React from 'react'
import { 
  FileText, ArrowUpRight, Mail, MapPin, 
  Award, Sparkles, Terminal, Layers
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        {/* Identity Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-8">
          
          {/* Authentic Portrait Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-2xs">
              <img 
                src={hero.avatar || "/profile.png"} 
                alt="Md. Mahmudur Rahman" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Available for Roles" />
          </div>

          {/* Name & Primary Role */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Md. Mahmudur Rahman
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Roles
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium">
              AI Systems Architect & Backend Engineer
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono pt-0.5">
              <span className="inline-flex items-center gap-1">
                <Award size={13} className="text-blue-600 dark:text-blue-400" />
                NASA Space Apps Winner & Global Nominee
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={13} />
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

        </div>

        {/* Editorial Bio Statement */}
        <div className="space-y-3.5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          <p>
            I build autonomous multi-agent reasoning swarms, production RAG pipelines, and high-concurrency Python backend services. Most recently architected agentic systems at <strong className="text-slate-900 dark:text-white font-semibold">Studio Butterfly</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Betopia Group / Softvence</strong>, engineering hierarchical LangGraph workflows, vector retrieval, and Model Context Protocol (MCP) integrations.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Two-time Google Hacking Contest Champion with a B.Sc. in Computer Science & Engineering from Daffodil International University (CGPA 3.63/4.00). Focused on bridging the gap between frontier AI research and resilient, scalable production software.
          </p>
        </div>

        {/* Technical Architecture Quick Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-3 rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">Primary Focus</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block truncate">Multi-Agent Swarms</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">Core Backend</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block truncate">FastAPI & Python</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">Security</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block truncate">2x Google Champion</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">Academic Degree</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block truncate">B.Sc. CSE (3.63 CGPA)</span>
          </div>
        </div>

        {/* Editorial Action & Connection Bar */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-5 border-t border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-medium">
          
          <a 
            href="/mahmudur_rahman_cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            <FileText size={15} />
            <span>Curriculum Vitae (PDF)</span>
            <ArrowUpRight size={14} />
          </a>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>

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

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>

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

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>

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
