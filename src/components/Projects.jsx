import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const projects = data.projects.filter(p => p.featured)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Selected <span className="text-drama italic">Work</span>
          </h2>
          <div className="flex-grow h-[1px] bg-white/10" />
          <p className="text-slate font-mono text-xs uppercase tracking-widest hidden md:block">
            Project Archive v2
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={project.id} className={`project-card group relative ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-5xl aspect-[16/9] lg:aspect-[21/9] bg-white/5 border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <p className="text-electric font-mono text-[10px] md:text-xs tracking-widest uppercase mb-2">{project.category}</p>
                  <div className="flex items-end justify-between gap-8">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">{project.title}</h3>
                      <p className="text-slate max-w-lg mb-6 line-clamp-2 md:line-clamp-none text-sm md:text-base">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-slate/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs font-mono tracking-widest uppercase border border-electric/30 text-electric hover:bg-electric hover:text-white rounded-full transition-colors"
                        >
                          Live
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.id}`}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-obsidian flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-all duration-500"
                      >
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/archive"
            className="inline-block px-10 py-4 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium group"
          >
            View Project Archive <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
