import React from 'react'
import { 
  FileText, ArrowDown, Mail, MapPin, 
  Award, Sparkles, Terminal, Download,
  ArrowRight
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      
      {/* Precision Ambient Grid & Light Aura */}
      <div className="absolute inset-0 bg-linear-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/[0.06] dark:bg-blue-600/[0.08] blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
        
        {/* 1. Centered Portrait & Availability Pill */}
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
          <div className="relative group mb-3.5">
            {/* Subtle glow aura */}
            <div className="absolute inset-0 rounded-full bg-blue-500/15 dark:bg-blue-600/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
            
            {/* Profile Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900">
              <img 
                src={hero.avatar || "/profile.png"} 
                alt="Md. Mahmudur Rahman" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Roles</span>
          </div>
        </div>

        {/* 2. Prominent Name & AI Architect Headline */}
        <div className="space-y-2.5 mb-6 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Md. Mahmudur Rahman
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 tracking-tight">
            AI Systems Architect & Backend Engineer
          </p>

          <div className="inline-flex items-center justify-center gap-1.5 pt-1 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
            <Award size={14} />
            <span>NASA Space Apps Winner & Global Nominee · 2x Google Champion</span>
          </div>
        </div>

        {/* 3. Refined 2-Line Bio */}
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Architecting autonomous multi-agent reasoning swarms, production RAG pipelines, and high-concurrency FastAPI microservices. Previously built agentic workflows at <strong>Studio Butterfly</strong> and <strong>Softvence</strong>.
        </p>

        {/* 4. Sleek Centered Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          
          <a
            href="/mahmudur_rahman_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-colors group"
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm shadow-2xs transition-colors"
          >
            <span>Explore Systems</span>
            <ArrowDown size={15} className="text-slate-400 dark:text-slate-500" />
          </a>

        </div>

        {/* 5. Minimal Social & Location Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto">
          
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} />
            <span>Dhaka, Bangladesh</span>
          </span>

          <span>·</span>

          <a 
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
          </a>

          <span>·</span>

          <a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={13} />
            <span>LinkedIn</span>
          </a>

          <span>·</span>

          <a 
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero
