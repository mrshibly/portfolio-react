import React, { useState, useEffect } from 'react'
import { ArrowLeft, Search, FolderGit2, ArrowUpRight, Star, X } from 'lucide-react'
import { GithubIcon } from '../components/icons/GithubIcon'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'

const Archive = () => {
  const projects = portfolioData.projects
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Systems Architecture & Project Archive | Md. Mahmudur Rahman'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore all 13+ production AI systems, bioacoustic transformers, RAG microservices, and automation pipelines engineered by Md. Mahmudur Rahman.')
    }
  }, [])

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory

    return matchesSearch && matchesCat
  })

  // Count helper
  const getCategoryCount = (cat) => {
    if (cat === 'All') return projects.length
    return projects.filter(p => p.category === cat).length
  }

  return (
    <section className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 relative bg-slate-50 dark:bg-[#09090b] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 sm:mb-8 group font-medium text-xs uppercase tracking-wider"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-orange-500" />
          <span>Back to Overview</span>
        </Link>

        {/* Page Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
            <FolderGit2 size={12} />
            <span>Master Engineering Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
            Project <span className="text-orange-500">Archive</span>
          </h1>
          <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl font-normal">
            A comprehensive index of 14+ autonomous multi-agent swarms, production RAG pipelines, reverse-engineered API bridges, and enterprise microservices.
          </p>
        </div>

        {/* Redesigned Search & Category Filter Controls */}
        <div className="mb-8 p-5 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xs space-y-4">
          
          {/* Top Row: Full Search Bar with Live Result Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by system title, tech stack (e.g. FastAPI, LangGraph, PyTorch), or keyword..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 shrink-0 px-1">
              Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProjects.length}</span> of {projects.length} systems
            </div>
          </div>

          {/* Bottom Row: Flex-Wrapping Category Filter Pills */}
          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat)
              const isSelected = selectedCategory === cat

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-semibold'
                      : 'bg-slate-50 dark:bg-zinc-800/70 border border-slate-200/80 dark:border-zinc-700 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                    isSelected 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-slate-200/80 dark:bg-zinc-700 text-slate-600 dark:text-zinc-300'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>

        {/* Catalog List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-obsidian p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 w-full md:w-auto">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 text-[10px] font-mono font-semibold uppercase">
                      {project.category}
                    </span>
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold">
                        <Star size={9} fill="currentColor" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed mb-3 line-clamp-2 font-normal">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/50 dark:border-zinc-700/50 text-[10px] font-mono text-slate-600 dark:text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0 pt-2.5 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-zinc-800">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold transition-colors border border-emerald-500/25"
                    title="Launch Live Application"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live</span>
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
                
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-all shadow-md shadow-orange-500/20"
                >
                  <span>Architecture</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center text-slate-500 font-mono text-xs">
              No matching systems found for "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Archive
