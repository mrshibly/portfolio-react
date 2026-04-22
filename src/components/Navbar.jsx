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
    const sectionIds = ['projects', 'experience', 'education', 'certifications', 'techstack', 'contact']
    
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
    { name: "Awards", path: "/#certifications", hash: "certifications" },
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
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-electric relative ${isActive(link) ? 'text-electric' : 'text-slate'}`}
            >
              {link.name}
              {isActive(link) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric rounded-full" />
              )}
            </Link>
          ))}
          <Link to="/admin" className="opacity-0 w-2 h-2 hover:opacity-100 transition-opacity bg-white/10 rounded-full" />
          <button 
            onClick={() => window.location.href = 'mailto:mrshibly.bd@gmail.com'}
            className="px-6 py-2.5 bg-white text-obsidian rounded-full hover:bg-electric hover:text-white transition-all duration-300 font-bold"
          >
            Initiate Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className={`text-3xl font-bold tracking-tighter transition-colors ${isActive(link) ? 'text-electric' : 'hover:text-electric'}`}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
