import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioData } from '../hooks/usePortfolioData'

gsap.registerPlugin(ScrollTrigger)

const categoryColors = {
  'AI / ML': '#3B82F6',
  'Backend': '#8B5CF6',
  'Frontend': '#10B981',
  'DevOps': '#F59E0B',
  'Database': '#06B6D4',
  'Tools': '#EF4444',
}

const TechStack = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const stack = data.techStack || []

  // Group by category
  const grouped = stack.reduce((acc, tech) => {
    const cat = tech.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(tech)
    return acc
  }, {})

  useEffect(() => {
    if (stack.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from('.tech-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out'
      })
      gsap.from('.tech-category', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [stack])

  if (stack.length === 0) return null

  return (
    <section id="techstack" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-electric font-mono text-xs uppercase tracking-widest mb-4">Technical Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Tech <span className="text-drama italic">Stack</span>
          </h2>
        </div>

        <div className="space-y-12">
          {Object.entries(grouped).map(([category, techs]) => (
            <div key={category} className="tech-category">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: categoryColors[category] || '#8E8E93' }}
                />
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate">
                  {category}
                </h3>
                <div className="flex-grow h-[1px] bg-white/5" />
              </div>
              
              <div className="flex flex-wrap gap-4">
                {techs.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="tech-item group flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {tech.icon ? (
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    ) : (
                      <div 
                        className="w-6 h-6 rounded-md"
                        style={{ backgroundColor: categoryColors[category] || '#8E8E93', opacity: 0.3 }} 
                      />
                    )}
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric/3 blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}

export default TechStack
