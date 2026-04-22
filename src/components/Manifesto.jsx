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
    <section id="manifesto" ref={sectionRef} className="py-60 bg-white text-obsidian rounded-[3rem] md:rounded-[6rem] relative z-20">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase mb-12 text-center text-slate">
          The AI Manifesto v1.0
        </p>
        
        <div ref={textRef} className="max-w-5xl mx-auto space-y-8">
          {lines.map((line, index) => (
            <h2 
              key={index} 
              className="manifesto-line text-4xl md:text-7xl font-bold tracking-tighter text-center leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-20 h-20 rounded-full border border-obsidian/10 flex items-center justify-center animate-pulse-slow">
            <div className="w-2 h-2 rounded-full bg-electric" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
