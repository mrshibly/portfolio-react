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
    <div ref={containerRef} className="min-h-screen bg-obsidian text-white pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/archive" className="reveal inline-flex items-center gap-2 text-slate hover:text-electric transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <p className="reveal text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">{project.category}</p>
            <h1 className="reveal text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-white/20 italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <div className="reveal space-y-8 mb-12">
              <p className="text-xl text-slate leading-relaxed max-w-2xl">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-electric hover:text-white transition-all duration-300"
                  >
                    <GithubIcon size={20} /> View Source
                  </a>
                )}
                {project.external && (
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
              <div>
                <p className="text-[10px] uppercase font-mono text-slate tracking-widest mb-3 flex items-center gap-2">
                  <Calendar size={12} /> Timeline
                </p>
                <p className="font-bold">2024 — Present</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono text-slate tracking-widest mb-3 flex items-center gap-2">
                  <Layers size={12} /> Role
                </p>
                <p className="font-bold">Lead Developer</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-[10px] uppercase font-mono text-slate tracking-widest mb-3 flex items-center gap-2">
                  <Tag size={12} /> Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Media / Visual */}
          <div className="lg:col-span-5 space-y-8">
            <div className="image-reveal relative aspect-[4/5] rounded-5xl overflow-hidden border border-white/10 bg-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
            
            <div className="reveal p-8 rounded-4xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-electric">
                <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
                Technical Overview
              </h4>
              <p className="text-sm text-slate leading-relaxed">
                This implementation focuses on high-concurrency processing and intelligent data orchestration. 
                Built with a modular architecture to allow for seamless integration of additional LLM providers and data sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
