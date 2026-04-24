import React, { useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Calendar, Tag, Layers } from 'lucide-react'
import { GithubIcon } from '../components/icons/GithubIcon'
import { gsap } from 'gsap'
import { usePortfolioData } from '../hooks/usePortfolioData'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const { data } = usePortfolioData()
  const project = data.projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) {
      navigate('/archive')
      return
    }

    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      })
      
      gsap.from('.image-reveal', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [project, navigate])

  if (!project) return null

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-drama/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <Link to="/archive" className="reveal inline-flex items-center gap-3 text-slate/60 hover:text-electric transition-all mb-16 group font-mono text-xs uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Esc::Back_to_Archive
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6 reveal">
              <span className="w-10 h-[1px] bg-electric/50" />
              <p className="text-electric font-mono text-xs uppercase tracking-[0.4em]">{project.category}</p>
            </div>
            
            <h1 className="reveal text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9]">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-drama italic' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <div className="reveal space-y-10 mb-16">
              <p className="text-xl md:text-2xl text-slate/80 leading-relaxed max-w-2xl font-light">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-5">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-electric hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
                  >
                    <GithubIcon size={20} /> Deploy_Source
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-500 hover:border-white/20"
                  >
                    <ExternalLink size={20} /> Access_Live_System
                  </a>
                )}
              </div>
            </div>

            {/* Technical Metadata Widgets */}
            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-4xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em] flex items-center gap-2">
                  <Calendar size={12} className="text-electric" /> ID_TIMELINE
                </p>
                <p className="text-lg font-bold tracking-tight">2024 — STABLE</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em] flex items-center gap-2">
                  <Layers size={12} className="text-electric" /> SYS_ARCHITECTURE
                </p>
                <p className="text-lg font-bold tracking-tight">MODULAR_AI</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-mono text-slate/40 tracking-[0.3em] flex items-center gap-2">
                  <Tag size={12} className="text-electric" /> TECH_PROXIMITY
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-electric/80">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Media & Meta-Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="image-reveal relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-obsidian group">
              <div className="absolute inset-0 bg-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              
              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-electric/40 rounded-tl-xl" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-electric/40 rounded-br-xl" />
            </div>
            
            <div className="reveal p-10 rounded-4xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric/30" />
              <h4 className="font-bold mb-6 flex items-center gap-3 text-white text-xl">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                Technical_Overview
              </h4>
              <p className="text-slate/70 leading-relaxed font-mono text-xs uppercase tracking-wider">
                System optimized for high-throughput reasoning and autonomous data processing. 
                Architecture enables multi-provider LLM orchestration with sub-100ms latency overhead. 
                Deployed across distributed infrastructure for maximum availability.
              </p>
              
              {/* Matrix-like decorative text */}
              <div className="absolute bottom-4 right-6 opacity-[0.05] font-mono text-[8px] leading-tight select-none pointer-events-none">
                0x404_PAGE_STATE: STABLE<br/>
                KERNEL_ALLOC: SUCCESS<br/>
                BUFFER_OVERFLOW: PREVENTED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
