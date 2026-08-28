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
    <section id="techstack" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/30 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Cpu size={12} />
              <span>Engineering Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technologies & <span className="text-orange-500">Tooling</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Frontier AI agent frameworks, high-throughput Python backends, vector search engines, and enterprise automation infrastructure.
          </p>
        </div>

        {/* Category Tabs: Scrollable Pills */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                activeTab === idx
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Skills Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories[activeTab]?.skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code
            return (
              <div
                key={i}
                className="card-obsidian p-4 rounded-2xl flex items-center gap-3.5 group cursor-default border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform shrink-0">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-snug truncate group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase font-medium">
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
