import React, { useState } from 'react'
import { ArrowUpRight, FolderGit2, Sparkles, ArrowRight, Star, Filter } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { portfolioData } from '../data/portfolioData'
import { Link } from 'react-router-dom'

const filterCategories = [
  'All',
  'Multi-Agent Systems',
  'AI Infrastructure',
  'NLP / RAG',
  'Workflow Automation'
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const allProjects = portfolioData.projects

  const displayedProjects = allProjects.filter((project) => {
    if (activeFilter === 'All') return project.featured
    if (activeFilter === 'NLP / RAG') {
      return project.category.includes('NLP') || project.category.includes('RAG') || project.category.includes('Fine-Tuning')
    }
    return project.category === activeFilter || project.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
  })

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/30 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <FolderGit2 size={12} />
              <span>Production AI & Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured <span className="text-orange-500">Engineering Work</span>
            </h2>
          </div>
          <Link 
            to="/archive"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors group"
          >
            <span>View All 14+ Repositories</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-semibold'
                  : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="card-obsidian rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-zinc-800/90"
            >
              {/* Media Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md text-slate-800 dark:text-zinc-200 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-200/50 dark:border-zinc-800/80 shadow-xs">
                    {project.category}
                  </span>
                  
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-mono font-bold shadow-xs">
                      <Star size={10} fill="white" />
                      <span>{project.stars}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-0.5 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700/50 rounded-md text-[10px] font-mono text-slate-600 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-mono font-medium transition-colors border border-transparent dark:border-zinc-800"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={13} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold transition-colors border border-emerald-500/25"
                        title="Launch Live Application"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-all shadow-md shadow-orange-500/20"
                  >
                    <span>Architecture</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalog CTA */}
        <div className="mt-10 text-center">
          <Link 
            to="/archive"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-orange-500/50 text-slate-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <Sparkles size={14} className="text-orange-500" />
            <span>Search & Filter Complete 14+ Project Archive</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects
