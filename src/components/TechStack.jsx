import React, { useState } from 'react'
import { 
  Bot, Users, GitFork, Sparkles, Zap, Flame, Smile, 
  Code, Activity, Eye, Box, Terminal, Search, Database, 
  HardDrive, Layers, Camera, Workflow, Shuffle, Component, 
  Palette, GitBranch, Cpu, Wrench
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Bot, Users, GitFork, Sparkles, Zap, Flame, Smile,
  Code, Activity, Eye, Box, Terminal, Search, Database,
  HardDrive, Layers, Camera, Workflow, Shuffle, Component,
  Palette, GitBranch
}

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(0)
  const categories = portfolioData.techCategories || []

  return (
    <section id="techstack" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Cpu size={12} />
              <span>Engineering Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technologies & <span className="text-blue-600 dark:text-blue-500">Tooling</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Frontier AI agent frameworks, high-throughput Python backends, vector search engines, and enterprise automation infrastructure.
          </p>
        </div>

        {/* Category Tabs: Scrollable */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-colors shrink-0 ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Skills Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories[activeTab]?.skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code
            return (
              <div
                key={i}
                className="card-clean p-3.5 sm:p-4 rounded-xl flex items-center gap-3 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-snug truncate">
                    {skill.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default TechStack
