import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Terminal } from 'lucide-react'

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    let completed = false
    const safeComplete = () => {
      if (!completed) {
        completed = true
        onComplete?.()
      }
    }

    // Safety fallback timer so screen NEVER stays black under any circumstances
    const fallbackTimer = setTimeout(safeComplete, 900)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: safeComplete
      })

      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: '100%',
          duration: 0.5,
          ease: 'power3.inOut'
        })
      }

      if (textRef.current) {
        tl.to(textRef.current, {
          y: -15,
          opacity: 0,
          duration: 0.25
        })
      }

      if (loaderRef.current) {
        tl.to(loaderRef.current, {
          opacity: 0,
          y: '-100%',
          duration: 0.35,
          ease: 'expo.inOut'
        })
      }
    })

    return () => {
      clearTimeout(fallbackTimer)
      ctx.revert()
    }
  }, [onComplete])

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[1000] bg-obsidian flex flex-col items-center justify-center p-6 transition-opacity">
      <div className="max-w-sm w-full">
        <div ref={textRef} className="flex justify-between items-end mb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider font-semibold">
            <Terminal size={14} />
            <span>INITIALIZING KERNEL</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-white">Mahmudur<span className="text-blue-500">.ai</span></span>
        </div>
        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
          <div ref={progressRef} className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Loader

