import React from 'react'
import { Cpu, Workflow, Clock, Trophy } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const icons = [Cpu, Workflow, Clock, Trophy]

const Stats = () => {
  const stats = portfolioData.stats

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div 
                key={i} 
                className="card-clean p-4 sm:p-5 rounded-xl relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Icon size={16} />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                    0{i+1} // METRIC
                  </span>
                </div>

                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-0.5 font-mono tracking-tight">
                  {stat.value}
                </p>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{stat.label}</h4>
                {stat.desc && <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-mono mt-0.5">{stat.desc}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
