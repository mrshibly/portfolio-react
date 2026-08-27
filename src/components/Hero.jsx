import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Trophy, Cpu, Send, FileText, CheckCircle2, 
  Shield, Sparkles, ArrowRight
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 overflow-hidden">
      
      {/* Delicate background ambient glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/[0.03] dark:bg-blue-600/[0.06] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/[0.02] dark:bg-cyan-500/[0.04] blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Status Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
                <Trophy size={13} className="text-blue-600 dark:text-blue-400" />
                <span>NASA Space Apps Winner & Global Nominee</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Engineering Roles</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-base sm:text-lg font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-tight mb-2">
                Md. Mahmudur Rahman
              </h2>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Architecting <span className="text-blue-600 dark:text-blue-500">Autonomous AI</span> & High-Throughput Backends
              </h1>
            </div>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl lg:mx-0 mx-auto">
              {hero.bio}
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left max-w-xl lg:mx-0 mx-auto">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 text-xs font-mono text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span>25+ Production AI & API Deployments</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 text-xs font-mono text-slate-700 dark:text-slate-300">
                <Shield size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>2x Google Hacking Champion</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href="/mahmudur_rahman_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <FileText size={15} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <Cpu size={15} className="text-blue-600 dark:text-blue-400" />
                <span>Explore Systems</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <Send size={13} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Verified Profiles */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-colors shadow-2xs"
              >
                <GithubIcon size={14} />
                <span>GitHub (@mrshibly)</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-colors shadow-2xs"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={contact.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors shadow-2xs"
              >
                <span className="font-bold text-amber-500">HF</span>
                <span>Hugging Face</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Round Frame Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group">
              
              {/* Subtle background decorative aura */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Round Photo Frame */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-200/80 dark:ring-slate-700/80 bg-slate-100 dark:bg-slate-800">
                <img 
                  src={hero.avatar || "/profile.png"} 
                  alt={hero.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Online Status Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md px-3 py-1.5 rounded-full flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE ARCHITECT</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
