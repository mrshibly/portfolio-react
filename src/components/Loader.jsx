import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    })

    tl.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power4.inOut'
    })
    .to(textRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5
    })
    .to(loaderRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'expo.inOut'
    })
  }, [onComplete])

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[1000] bg-obsidian flex flex-col items-center justify-center p-6">
      <div className="max-w-xs w-full">
        <div ref={textRef} className="flex justify-between items-end mb-4">
          <span className="text-xs font-mono tracking-widest text-electric">INITIALIZING SYSTEM</span>
          <span className="text-4xl font-bold tracking-tighter">SHIBLY<span className="text-electric">.AI</span></span>
        </div>
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
          <div ref={progressRef} className="absolute top-0 left-0 h-full w-0 bg-electric" />
        </div>
      </div>
    </div>
  )
}

export default Loader
