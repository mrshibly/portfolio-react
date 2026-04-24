import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { Trophy, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Certifications = () => {
  const sectionRef = useRef(null)
  const { data } = usePortfolioData()
  const certs = data.certifications || []

  useEffect(() => {
    if (certs.length === 0) return

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()
      
      gsap.from('.cert-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [certs])

  if (certs.length === 0) return null

  return (
    <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-electric font-mono text-xs uppercase tracking-widest mb-4">Recognition & Credentials</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Awards & <span className="text-drama italic">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card group relative">
              <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:border-electric/30 h-full flex flex-col">
                {/* Badge glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/10 transition-all" />
                
                <div className="flex items-start gap-4 mb-6 relative">
                  <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {cert.icon ? (
                      <img src={cert.icon} alt="" className="w-8 h-8 object-contain" />
                    ) : (
                      <Trophy className="text-electric" size={24} />
                    )}
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-0 right-0 p-2 text-slate/40 hover:text-electric transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 tracking-tight">{cert.title}</h3>
                <p className="text-electric/80 font-mono text-xs uppercase tracking-widest mb-3">{cert.issuer}</p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-slate/40 font-mono text-[10px] uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric/3 blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}

export default Certifications
