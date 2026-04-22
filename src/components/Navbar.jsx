import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Archive", path: "/archive" },
    { name: "Network", path: "/#affiliations" },
    { name: "Labs", path: "/#projects" },
    { name: "Contact", path: "/#contact" }
  ]

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      const hash = path.substring(1) // gets '#affiliations'
      if (location.pathname === '/') {
        e.preventDefault()
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        window.history.pushState(null, '', path)
      }
    } else if (path === '/' && location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

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
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-electric ${(location.pathname === link.path || (location.pathname === '/' && location.hash === link.path.substring(1))) ? 'text-electric' : 'text-slate'}`}
            >
              {link.name}
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
            className="text-3xl font-bold tracking-tighter hover:text-electric transition-colors"
            onClick={(e) => handleNavClick(e, link.path)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
