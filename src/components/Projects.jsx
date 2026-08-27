import React from 'react'
import { ArrowUpRight, FolderGit2, Sparkles, ArrowRight, Star } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { portfolioData } from '../data/portfolioData'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = portfolioData.projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <FolderGit2 size={12} />
              <span>Production AI & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured <span className="text-blue-600 dark:text-blue-500">Engineering Work</span>
            </h2>
          </div>
          <Link 
            to="/archive"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <span>View All 14+ Repositories</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card-clean rounded-xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Media Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                />
                
                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-slate-200 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                    {project.category}
                  </span>
                  
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500 text-white text-[10px] font-mono font-bold shadow-xs">
                      <Star size={10} fill="white" />
                      <span>{project.stars}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-mono text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-mono font-medium transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={13} />
                      <span>GitHub</span>
                    </a>
                  ) : <div />}

                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
                  >
                    <span>Details</span>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
            <span>Search & Filter Complete 14+ Project Archive</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects
