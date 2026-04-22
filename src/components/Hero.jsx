import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { Link } from 'react-router-dom'

const Hero = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const { data } = usePortfolioData()
  const { name, title, bio, image } = data.hero

  useEffect(() => {
    // Three.js Setup (keeping the existing 3D background but moving it slightly)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const geometry = new THREE.IcosahedronGeometry(2, 0)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x3B82F6,
      wireframe: true,
      transparent: true,
      opacity: 0.3, // Lower opacity to not distract from the profile
      emissive: 0x3B82F6,
      emissiveIntensity: 0.5,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const light = new THREE.PointLight(0xFFFFFF, 1)
    light.position.set(10, 10, 10)
    scene.add(light)
    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)
      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.001
      
      gsap.to(mesh.rotation, {
        x: mesh.rotation.x + mouseY * 0.2,
        y: mesh.rotation.y + mouseX * 0.2,
        duration: 2,
        ease: 'power2.out'
      })

      renderer.render(scene, camera)
    }
    animate()

    const ctx = gsap.context(() => {
      gsap.from('.hero-stagger', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.5
      })
      
      gsap.from('.profile-frame', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.8
      })
    }, containerRef)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Profile Image Frame */}
          <div className="relative group shrink-0">
            {/* Ambient Glow */}
            <div className="absolute -inset-10 bg-electric/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full border border-white/10 p-4 md:p-8 backdrop-blur-sm bg-white/[0.02] hover:bg-white/5 transition-colors duration-700">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-electric/30 relative">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              {/* Orbital Rings - Enhanced */}
              <div className="absolute inset-[-10px] md:inset-[-20px] border border-electric/20 rounded-full animate-spin-slow opacity-40 pointer-events-none" />
              <div className="absolute inset-[-30px] md:inset-[-40px] border border-drama/10 rounded-full animate-reverse-spin opacity-20 pointer-events-none" />
              
              {/* Floating Status Nodes */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-electric rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)] animate-pulse" />
              <div className="absolute bottom-20 -left-4 w-3 h-3 bg-drama rounded-full shadow-[0_0_15px_rgba(255,46,99,0.8)] animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="overflow-hidden mb-4">
              <p className="hero-stagger text-electric font-mono text-sm tracking-[0.3em] uppercase">
                {title}
              </p>
            </div>
            
            <h1 className="hero-stagger text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-tight">
              {name.split(' ').map((word, i) => (
                <span key={i} className={i === name.split(' ').length - 1 ? 'text-drama italic pr-4' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className="overflow-hidden max-w-2xl lg:mx-0 mx-auto mb-10">
              <p className="hero-stagger text-slate text-lg md:text-xl leading-relaxed">
                {bio}
              </p>
            </div>

            <div className="hero-stagger flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <Link to="/archive" className="btn-primary flex items-center gap-2">
                View Archive
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate/50">
        <span className="text-[10px] uppercase tracking-widest">System Operational</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent" />
      </div>
    </section>
  )
}

export default Hero
