import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import * as Icons from 'lucide-react'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Competencies = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.competency-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      })
    })
    return () => ctx.revert()
  }, [])

  const skills = data?.competencies || []

  return (
    <section id="competencies" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Core <span className="text-drama">Competencies</span>
            </h2>
            <p className="text-slate text-lg">
              Specialized infrastructure for the next generation of digital reasoning.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-1 bg-electric" />
            <div className="w-12 h-1 bg-white/10" />
            <div className="w-12 h-1 bg-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = Icons[skill.icon] || Icons.Zap
            
            return (
              <div key={i} className="competency-card glass-card group hover:border-electric/50 transition-colors">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${skill.accent}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: skill.accent }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-slate leading-relaxed">
                  {skill.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-mono tracking-widest text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>VIEW TECHNICAL SPEC</span>
                  <div className="w-8 h-[1px] bg-electric" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Competencies
