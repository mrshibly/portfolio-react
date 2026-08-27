import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, Trophy, Cpu, Send, FileText, CheckCircle2, 
  Shield, MapPin, Sparkles, Terminal, Activity, ArrowRight, Bot
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

          {/* Right Column: Interactive Profile & Architecture Card (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="card-clean rounded-2xl overflow-hidden shadow-xs border border-slate-200 dark:border-slate-800">
              
              {/* Profile Top Bar */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  
                  {/* Photo with live beacon */}
                  <div className="relative shrink-0">
                    <img 
                      src={hero.avatar || "/profile.png"} 
                      alt={hero.name} 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-center border-2 border-white dark:border-slate-800 shadow-md ring-1 ring-slate-200 dark:ring-slate-700"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                  </div>

                  {/* Profile Identification */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight truncate">
                        {hero.name}
                      </h3>
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-mono font-semibold">
                      AI Systems Architect
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      B.Sc. in CSE • CGPA 3.63 / 4.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Architecture Matrix */}
              <div className="p-5 sm:p-6 space-y-4 text-xs font-mono bg-white dark:bg-slate-900">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Agent Frameworks</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">LangGraph • CrewAI • AutoGen</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Microservices</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">FastAPI • Python • Docker</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Vector Engines</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Hybrid FAISS • ChromaDB</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Hardware Inference</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Groq LPU • vLLM • PyTorch</span>
                  </div>

                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Workflow Pipelines</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">n8n Enterprise (150+ Workflows)</span>
                  </div>
                </div>

                {/* Quick Metric Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">25+</p>
                    <p className="text-[9px] uppercase font-semibold text-slate-500 dark:text-slate-400">Systems</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">3.63</p>
                    <p className="text-[9px] uppercase font-semibold text-slate-500 dark:text-slate-400">CSE CGPA</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">NASA</p>
                    <p className="text-[9px] uppercase font-semibold text-slate-500 dark:text-slate-400">Winner</p>
                  </div>
                </div>

                {/* Footer Location & Catalog Link */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <Link to="/archive" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-0.5">
                    <span>14+ Repos</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
