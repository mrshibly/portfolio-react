import React from 'react'
import { Network, Database, Server, Cpu, Brain, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Network,
  Database,
  Server,
  Cpu,
  Brain,
  Shield,
  Zap
}

const Competencies = () => {
  const competencies = portfolioData.competencies || []

  return (
    <section id="competencies" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/20 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Sparkles size={12} />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Architectural <span className="text-orange-500">Competencies</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Specialized engineering capabilities across autonomous agent swarms, deterministic RAG pipelines, and high-concurrency microservices.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Zap
            
            return (
              <div 
                key={i} 
                className="card-obsidian rounded-2xl p-6 flex flex-col justify-between group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    
                    {skill.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wide uppercase font-semibold bg-slate-100 dark:bg-zinc-800/90 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
                        {skill.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  <span>PRODUCTION READY</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Competencies
