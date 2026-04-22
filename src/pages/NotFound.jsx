import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Briefcase, Mail } from 'lucide-react'
import { gsap } from 'gsap'

const glitchMessages = [
  "SEGFAULT: Reality not found at 0x404",
  "ERROR: This page exists in a parallel universe",
  "NEURAL_NET: No trained weights for this path", 
  "QUANTUM_STATE: Page collapsed before observation",
  "GPT_HALLUCINATION: This route was imagined",
  "KERNEL_PANIC: Route table corrupted",
]

const NotFound = () => {
  const [glitchText, setGlitchText] = useState('')
  const errorMsg = useMemo(() => glitchMessages[Math.floor(Math.random() * glitchMessages.length)], [])

  useEffect(() => {
    gsap.from('.not-found-content > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
    })

    // Glitch text effect
    let i = 0
    const interval = setInterval(() => {
      if (i <= errorMsg.length) {
        setGlitchText(errorMsg.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [errorMsg])

  return (
    <div className="min-h-[80vh] bg-obsidian text-white flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-electric/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-drama/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="text-center px-6 not-found-content relative z-10 max-w-2xl mx-auto">
        {/* Glitch 404 */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none select-none" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            404
          </h1>
          <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none absolute inset-0 text-electric animate-pulse" style={{
            clipPath: 'inset(0 0 50% 0)',
            opacity: 0.8,
          }}>
            404
          </h1>
        </div>
        
        {/* Terminal-style error */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 mb-8 max-w-lg mx-auto text-left font-mono">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-drama" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <p className="text-electric text-xs">
            <span className="text-slate/40">$ </span>{glitchText}<span className="animate-pulse">_</span>
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Node Not Found</h2>
        <p className="text-slate text-lg mb-10 max-w-md mx-auto">
          This endpoint doesn't exist in the current architecture.
        </p>

        {/* Navigation suggestions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric text-black rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <Home size={18} /> Return Home
          </Link>
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
          >
            <Briefcase size={18} /> View Projects
          </Link>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={18} /> Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
