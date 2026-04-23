import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { Award, Shield, Users, Rocket, Globe, Heart, Briefcase, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  "Cyber Security Club": Shield,
  "BASIS Student Forum": Users,
  "Team Apex": Rocket,
  "Creative IT Institute": Briefcase,
  "Daffodil University": Globe,
  "Red Crescent": Heart,
  "GM Organization": Zap,
  "SETU Founder": Award
}

const Leadership = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const leadership = data.leadership || []

  useEffect(() => {
    if (leadership.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from('.leadership-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [leadership])

  if (leadership.length === 0) return null

  return (
    <section id="leadership" ref={sectionRef} className="py-24 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-electric font-mono text-xs uppercase tracking-widest mb-4">Professional Influence</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Leadership <span className="text-drama italic">Experience</span>
            </h2>
          </div>
          <p className="text-slate/60 text-sm font-mono max-w-xs text-right hidden md:block">
            Collaborating with leading organizations to drive innovation and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.org] || Award
            
            return (
              <div 
                key={index} 
                className="leadership-item group bg-white/5 border border-white/5 p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-500 rounded-2xl relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-electric/10 transition-all duration-500 border border-white/5 group-hover:border-electric/30 shrink-0">
                      {item.logo ? (
                        <img src={item.logo} alt={item.org} className="w-6 h-6 object-contain" />
                      ) : (
                        <Icon className="text-slate group-hover:text-electric transition-colors" size={24} />
                      )}
                    </div>
                    {item.duration && (
                      <span className="text-slate/60 font-mono text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full bg-obsidian">
                        {item.duration}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate/80 font-mono text-xs uppercase tracking-widest mb-4">
                    {item.org}
                  </p>
                  
                  {item.desc && (
                    <p className="text-slate text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}
                </div>
                
                {/* Decoration */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-white/10 group-hover:bg-drama transition-colors shadow-[0_0_10px_rgba(255,46,99,0)] group-hover:shadow-[0_0_10px_rgba(255,46,99,0.8)]" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-drama/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  )
}

export default Leadership
