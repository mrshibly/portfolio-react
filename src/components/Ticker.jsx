import React from 'react'

import { usePortfolioData } from '../hooks/usePortfolioData'

const Ticker = () => {
  const { data } = usePortfolioData()
  const orgs = data.affiliations || []

  return (
    <div className="py-20 border-y border-white/5 bg-obsidian/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate/60 mb-8">
          Trusted Leadership & Affiliations
        </p>
      </div>
      
      <div className="relative flex mask-ticker">
        <div className="flex gap-20 animate-scroll whitespace-nowrap py-4">
          {[...orgs, ...orgs].map((org, i) => {
            if (!org) return null;
            const name = typeof org === 'string' ? org : org.name
            return (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-electric/40 group-hover:bg-electric transition-colors" />
                <span className="text-2xl md:text-4xl font-bold text-white/20 group-hover:text-white transition-all duration-500 tracking-tighter">
                  {name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Ticker
