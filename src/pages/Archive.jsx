import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { GithubIcon } from '../components/icons/GithubIcon'
import { Link } from 'react-router-dom'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Archive = () => {
  const containerRef = useRef(null)
  const { data } = usePortfolioData()
  const projects = data.projects

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const ctx = gsap.context(() => {
      gsap.from('.archive-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-20 bg-obsidian">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate hover:text-electric transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Project <span className="text-drama italic">Archive</span>
          </h1>
          <p className="text-slate text-xl max-w-2xl leading-relaxed">
            A comprehensive index of my technical explorations, system architectures, and autonomous agent experiments.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-1 gap-0">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-white/10 text-slate/80 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/[0.02]">
              <div className="col-span-1">Year</div>
              <div className="col-span-4">Project Entity</div>
              <div className="col-span-3">Technical Stack</div>
              <div className="col-span-2">System Status</div>
              <div className="col-span-2 text-right">Navigation</div>
            </div>

            {/* Project Items */}
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="archive-item grid grid-cols-12 items-center gap-4 px-8 py-10 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 group"
              >
                <div className="col-span-1 text-slate/80 font-mono text-sm group-hover:text-electric transition-colors">
                  {project.year || '2024'}
                </div>
                
                <div className="col-span-4">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate/70 mt-1 uppercase tracking-widest">{project.category}</p>
                </div>

                <div className="col-span-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 border border-white/20 rounded-sm text-slate/80 font-mono">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] text-slate/60 font-mono">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-slate/80 font-mono">Operational</span>
                  </div>
                </div>

                <div className="col-span-2 flex justify-end gap-5">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      title="Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  <Link 
                    to={`/project/${project.id}`}
                    className="p-2 text-slate/70 hover:text-electric hover:bg-electric/10 rounded-lg transition-all"
                    title="View Details"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Archive
