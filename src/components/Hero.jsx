import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Trophy, Cpu, FileText, ArrowRight, 
  Send
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 overflow-hidden">
      
      {/* 60% Canvas: Subtle ambient light mesh */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-blue-500/[0.04] dark:bg-blue-600/[0.05] blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* 10% Accent: Minimal Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <Trophy size={13} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                NASA Space Apps Winner & Global Nominee
              </span>
            </div>

            {/* 30% Structural: Name & Headline */}
            <div className="space-y-1.5">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                MD. MAHMUDUR RAHMAN — AI SYSTEMS ARCHITECT
              </p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Architecting <span className="text-blue-600 dark:text-blue-500">Autonomous AI</span> & High-Throughput Backends
              </h1>
            </div>

            {/* Bio Narrative */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl lg:mx-0 mx-auto">
              {hero.bio}
            </p>

            {/* Action Bar & Social Links */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              
              {/* 10% Accent: Primary Button */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-colors group"
              >
                <Cpu size={15} />
                <span>Explore Systems</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* 30% Secondary: Resume Button */}
              <a
                href="/mahmudur_rahman_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
              >
                <FileText size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>

              {/* Minimal Social Dock */}
              <div className="flex items-center gap-1.5 pt-1 sm:pt-0">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                </a>
                <a
                  href={contact.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors font-mono font-bold text-xs shadow-2xs"
                  title="Hugging Face Hub"
                  aria-label="Hugging Face Hub"
                >
                  HF
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Framed Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group">
              
              {/* Subtle back ambient glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Clean Framed Avatar */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-200/90 dark:ring-slate-700/80 bg-slate-100 dark:bg-slate-800">
                <img 
                  src={hero.avatar || "/profile.png"} 
                  alt={hero.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Status Pill */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-2 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Roles</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
