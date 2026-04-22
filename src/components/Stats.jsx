import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Stats = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const stats = data.stats

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-2 md:mb-4">
                {stat.value}
              </p>
              <div className="w-8 h-1 bg-electric mx-auto mb-4 md:mb-6" />
              <h4 className="text-base md:text-xl font-bold mb-1">{stat.label}</h4>
              {stat.sub && <p className="text-slate text-[10px] md:text-sm font-mono tracking-wide">{stat.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
