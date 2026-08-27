import React from 'react'
import { portfolioData } from '../data/portfolioData'
import { Sparkles } from 'lucide-react'

const Ticker = () => {
  const affiliations = portfolioData.affiliations || []
  const items = [...affiliations, ...affiliations, ...affiliations]

  return (
    <div className="py-7 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 mb-3 text-center max-w-6xl">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-mono font-semibold flex items-center justify-center gap-1.5">
          <Sparkles size={11} className="text-blue-600 dark:text-blue-400" />
          <span>Accreditations, Partners & Affiliations</span>
          <Sparkles size={11} className="text-blue-600 dark:text-blue-400" />
        </p>
      </div>
      
      <div className="relative flex mask-ticker overflow-hidden">
        <div className="flex gap-8 sm:gap-10 animate-scroll whitespace-nowrap py-1">
          {items.map((name, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-sm sm:text-base font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200 tracking-tight font-sans">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ticker
