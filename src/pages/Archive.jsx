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
    <section className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 relative bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors mb-6 sm:mb-8 group font-medium text-xs uppercase tracking-wider"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-blue-600 dark:text-blue-400" />
          <span>Back to Overview</span>
        </Link>

        {/* Page Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
            <FolderGit2 size={12} />
            <span>Master Engineering Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
            Project <span className="text-blue-600 dark:text-blue-500">Archive</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl font-normal">
            A comprehensive index of 14+ autonomous multi-agent swarms, production RAG pipelines, reverse-engineered API bridges, and enterprise microservices.
          </p>
        </div>

        {/* Redesigned Search & Category Filter Controls */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          
          {/* Top Row: Full Search Bar with Live Result Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by system title, tech stack (e.g. FastAPI, LangGraph, PyTorch), or keyword..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
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

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0 px-1">
              Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProjects.length}</span> of {projects.length} systems
            </div>
          </div>

          {/* Bottom Row: Flex-Wrapping Category Filter Pills (No Scrollbar) */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat)
              const isSelected = selectedCategory === cat

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                      : 'bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold ${
                    isSelected 
                      ? 'bg-blue-700 text-white' 
                      : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>

        {/* Catalog List */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-clean p-4 sm:p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 w-full md:w-auto">
                {/* Thumbnail */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[9px] sm:text-[10px] font-mono font-semibold uppercase">
                      {project.category}
                    </span>
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[9px] sm:text-[10px] font-mono font-bold">
                        <Star size={9} fill="currentColor" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-2.5 line-clamp-2 font-normal">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] sm:text-[10px] font-mono text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0 pt-2.5 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
                
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
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
