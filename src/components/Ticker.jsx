import React from 'react'

import { usePortfolioData } from '../hooks/usePortfolioData'

const categoryColors = {
  'AI / ML': '#3B82F6',
  'Backend': '#8B5CF6',
  'Frontend': '#10B981',
  'DevOps': '#F59E0B',
  'Database': '#06B6D4',
  'Automation': '#EF4444',
  'Tools': '#EF4444',
}

const Ticker = () => {
  const { data } = usePortfolioData()
  const stack = data.techStack || []

  if (stack.length === 0) return null

  return (
    <div className="py-16 border-y border-white/5 bg-obsidian/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate/60">
          Technical Arsenal
        </p>
      </div>
      
      <div className="relative flex mask-ticker">
        <div className="flex gap-14 animate-scroll whitespace-nowrap py-6">
          {[...stack, ...stack, ...stack].map((tech, i) => {
            const color = categoryColors[tech.category] || '#8E8E93'
            return (
              <div key={i} className="flex items-center gap-5 group">
                {tech.icon ? (
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                ) : (
                  <div 
                    className="w-3 h-3 rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"
                    style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}40` }}
                  />
                )}
                <span className="text-3xl md:text-5xl font-black text-white/10 group-hover:text-white transition-all duration-700 tracking-[-0.05em] uppercase">
                  {tech.name}
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
