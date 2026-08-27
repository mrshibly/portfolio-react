import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Trophy, Cpu, Send, FileText, ArrowRight, 
  Sparkles, CheckCircle2, Shield
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-blue-500/[0.04] dark:bg-blue-600/[0.06] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-36 right-12 w-64 h-64 bg-indigo-500/[0.03] dark:bg-cyan-500/[0.04] blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Unified Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono shadow-2xs">
              <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                <Trophy size={13} />
                <span>NASA Space Apps Winner</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Roles</span>
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Md. Mahmudur Rahman — AI Systems Architect
              </p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Architecting <span className="text-blue-600 dark:text-blue-500">Autonomous AI</span> & High-Throughput Backends
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl lg:mx-0 mx-auto">
              {hero.bio}
            </p>

            {/* Key Accolade Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-mono font-medium">
                <CheckCircle2 size={12} className="text-blue-600 dark:text-blue-400" />
                <span>Production Agent Swarms</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium">
                <Shield size={12} className="text-emerald-600 dark:text-emerald-400" />
                <span>2x Google Hacking Champion</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium">
                <Sparkles size={12} className="text-amber-500" />
                <span>FastAPI & RAG Specialist</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-colors group"
              >
                <Cpu size={14} />
                <span>Explore Systems</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/mahmudur_rahman_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
              >
                <FileText size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-100/90 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <Send size={13} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Profile Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-colors"
              >
                <GithubIcon size={13} />
                <span>GitHub (@mrshibly)</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-colors"
              >
                <LinkedinIcon size={13} />
                <span>LinkedIn</span>
              </a>
              <a
                href={contact.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <span className="font-bold text-amber-500 text-xs">HF</span>
                <span>Hugging Face</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Portrait Avatar (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group">
              
              {/* Subtle back ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-2xl scale-105 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Clean Framed Avatar */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-200/80 dark:ring-slate-700/80 bg-slate-100 dark:bg-slate-800">
                <img 
                  src={hero.avatar || "/profile.png"} 
                  alt={hero.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-md px-3 py-1.5 rounded-full flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI ARCHITECT</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
