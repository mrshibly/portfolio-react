import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Trophy, Cpu, Send, FileText, CheckCircle2, Shield, MapPin, Sparkles } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact, stats } = portfolioData

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-medium font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span>NASA Space Apps Winner & Global Nominee</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Architecting <span className="text-blue-600 dark:text-blue-500">Autonomous Multi-Agent</span> AI & Backend Systems
            </h1>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {hero.bio}
            </p>

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
                <span>View Systems</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <Send size={13} />
                <span>Contact Email</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
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

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="card-clean rounded-2xl p-6 sm:p-7 space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold font-mono text-base">
                    MR
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                      Md. Mahmudur Rahman
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-mono font-medium">
                      AI & Backend Architect
                    </p>
                  </div>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  ACTIVE
                </span>
              </div>

              {/* Verified Accreditations */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <Trophy size={15} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>NASA Space Apps Regional Winner & Global Nominee (2024)</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <Shield size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Google Hacking Contest 2x Consecutive Champion</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>B.Sc. in CSE Distinction — CGPA 3.63 / 4.00</span>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-bold mb-2.5">
                  Core Runtime Stacks
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">Python / FastAPI</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">LangGraph / CrewAI</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">Hybrid RAG / FAISS</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">n8n Automation (150+)</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">Docker / Linux</span>
                </div>
              </div>

              {/* Location & Catalog Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <Link to="/archive" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-0.5">
                  <span>Catalog (14+)</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
