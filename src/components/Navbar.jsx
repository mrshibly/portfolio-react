import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy — detect which section is currently in view
  useEffect(() => {
    if (location.pathname !== '/') return
    const sectionIds = ['projects', 'experience', 'education', 'certifications', 'leadership', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    // Observe after a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 500)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])

  const navLinks = [
    { name: "Home", path: "/", hash: null },
    { name: "Projects", path: "/#projects", hash: "projects" },
    { name: "Experience", path: "/#experience", hash: "experience" },
    { name: "Leadership", path: "/#leadership", hash: "leadership" },
    { name: "Awards", path: "/#certifications", hash: "certifications" },
    { name: "Archive", path: "/archive", hash: null },
    { name: "Contact", path: "/#contact", hash: "contact" }
  ]

  const handleNavClick = (e, link) => {
    if (link.hash) {
      if (location.pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(link.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        window.history.pushState(null, '', link.path)
      }
    } else if (link.path === '/' && location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const isActive = useCallback((link) => {
    if (location.pathname !== '/') return location.pathname === link.path
    if (link.hash) return activeSection === link.hash
    return !activeSection && link.path === '/'
  }, [location.pathname, activeSection])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-obsidian/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-electric flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <Terminal className="text-black" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Shibly<span className="text-electric">.</span>AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-electric relative ${isActive(link) ? 'text-electric' : 'text-slate/60'}`}
            >
              {link.name}
              {isActive(link) && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-electric rounded-full" />
              )}
            </Link>
          ))}
          <Link to="/admin" className="opacity-0 w-2 h-2 hover:opacity-100 transition-opacity bg-white/10 rounded-full" />
          <button 
            onClick={() => window.location.href = 'mailto:mrshibly.bd@gmail.com'}
            className="px-6 py-3 bg-white text-obsidian rounded-full hover:bg-electric hover:text-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px]"
          >
            Initiate Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white relative z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-obsidian/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-700 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {navLinks.map((link, idx) => (
          <Link 
            key={link.name} 
            to={link.path}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isActive(link) ? 'text-electric' : 'text-white/40 hover:text-white'}`}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.name}{isActive(link) && <span className="text-electric ml-2">.</span>}
          </Link>
        ))}
        
        <div className={`mt-10 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => window.location.href = 'mailto:mrshibly.bd@gmail.com'}
            className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
