import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { gsap } from 'gsap'

const NotFound = () => {
  useEffect(() => {
    gsap.from('.not-found-content > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
    })
  }, [])

  return (
    <div className="min-h-[80vh] bg-obsidian text-white flex items-center justify-center pt-20">
      <div className="text-center px-6 not-found-content">
        <h1 className="text-8xl md:text-9xl font-black text-electric tracking-tighter mb-4 animate-pulse">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-slate text-lg mb-10 max-w-md mx-auto">
          The node you are trying to access does not exist in the current architecture or has been archived.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-electric hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Return to Surface
        </Link>
      </div>
    </div>
  )
}

export default NotFound
