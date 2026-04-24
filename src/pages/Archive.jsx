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
    <section ref={containerRef} className="min-h-screen pt-32 pb-20 bg-obsidian relative overflow-hidden">
      {/* High-tech Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative scanning line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric/20 to-transparent animate-scan pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate/60 hover:text-electric transition-all mb-12 group font-mono text-xs uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">0x00</span> Back to Terminal
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-electric/50" />
            <p className="text-electric font-mono text-xs uppercase tracking-[0.4em]">Index_System.v3</p>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Project <span className="text-drama italic">Archive</span>
          </h1>
          <p className="text-slate text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            A deep-level index of my technical explorations, autonomous agent experiments, and production-grade architectures.
          </p>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-8 py-5 border-y border-white/5 text-slate/40 text-[9px] uppercase tracking-[0.3em] font-mono bg-white/[0.01]">
              <div className="col-span-1">ID_YR</div>
              <div className="col-span-4">Entity_Name</div>
              <div className="col-span-3">Core_Stack</div>
              <div className="col-span-2">System_Status</div>
              <div className="col-span-2 text-right">Access_Port</div>
            </div>

            {/* Project Items */}
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="archive-item grid grid-cols-12 items-center gap-4 px-8 py-12 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-700 group relative overflow-hidden"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="col-span-1 text-slate/30 font-mono text-xs group-hover:text-electric/60 transition-colors">
                  #{project.year || '2024'}
                </div>
                
                <div className="col-span-4 relative">
                  <h3 className="text-2xl font-bold text-white/80 group-hover:text-white transition-all duration-500 tracking-tight flex items-center gap-3">
                    {project.title}
                    <div className="w-0 group-hover:w-8 h-[1px] bg-electric/50 transition-all duration-700" />
                  </h3>
                  <p className="text-[10px] text-slate/40 mt-2 uppercase tracking-[0.2em] font-mono group-hover:text-slate/60 transition-colors">
                    {project.category}
                  </p>
                </div>

                <div className="col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate/70 font-mono group-hover:border-electric/30 group-hover:text-slate/90 transition-all">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate/30 font-mono self-center">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute inset-0 animate-ping opacity-75" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-slate/50 font-mono group-hover:text-emerald-400 transition-colors">Deployed</span>
                  </div>
                </div>

                <div className="col-span-2 flex justify-end gap-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center text-slate/40 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 rounded-xl transition-all duration-300"
                      title="Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  <Link 
                    to={`/project/${project.id}`}
                    className="w-10 h-10 flex items-center justify-center text-slate/40 hover:text-electric hover:bg-electric/10 border border-transparent hover:border-electric/20 rounded-xl transition-all duration-300"
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
