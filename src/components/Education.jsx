import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const education = data.education || []

  if (education.length === 0) return null

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [education])

  return (
    <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-electric font-mono text-xs uppercase tracking-widest mb-4">Academic Background</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-drama italic">Education</span> & Degrees
            </h2>
          </div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {education.map((edu, index) => (
            <div key={index} className="edu-item relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-drama shadow-[0_0_10px_rgba(255,46,99,0.8)]" />
              
              <div className="bg-white/5 border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-obsidian border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                      ) : (
                        <GraduationCap className="text-drama" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">{edu.degree}</h3>
                      <p className="text-drama font-mono text-sm uppercase tracking-widest">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-slate/60 font-mono text-xs border border-white/10 px-3 py-1 rounded-full bg-obsidian/50 whitespace-nowrap">
                    {edu.duration}
                  </div>
                </div>
                {edu.desc && (
                  <p className="text-slate leading-relaxed text-sm md:text-base max-w-3xl">
                    {edu.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-drama/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}

export default Education
