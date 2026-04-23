import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Manifesto = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const { data } = usePortfolioData()
  const lines = data.manifesto?.lines || []

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: 1,
        },
        opacity: 0.1,
        y: 40,
        stagger: 0.2,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="manifesto" ref={sectionRef} className="py-60 bg-obsidian text-white relative z-20 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <p className="font-mono text-xs tracking-[0.8em] uppercase mb-16 text-center text-electric">
          The AI Manifesto v1.0
        </p>
        
        <div ref={textRef} className="max-w-5xl mx-auto space-y-12">
          {lines.map((line, index) => (
            <h2 
              key={index} 
              className="manifesto-line text-5xl md:text-8xl font-black tracking-[-0.04em] text-center leading-[0.95] uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Manifesto
