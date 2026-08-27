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
    <section id="competencies" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Sparkles size={12} />
              <span>Core Specializations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Architectural <span className="text-blue-600 dark:text-blue-500">Competencies</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Specialized engineering capabilities across autonomous agent swarms, deterministic RAG pipelines, and high-concurrency microservices.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {competencies.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Zap
            
            return (
              <div 
                key={i} 
                className="card-clean rounded-xl p-5 sm:p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    
                    {skill.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-wide uppercase font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {skill.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
