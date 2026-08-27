import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, Send, FileText, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { portfolioData } from '../data/portfolioData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "Competencies", path: "/#competencies" },
    { name: "Experience", path: "/#experience" },
    { name: "Awards", path: "/#certifications" },
    { name: "Archive", path: "/archive" },
    { name: "Contact", path: "/#contact" }
  ]

  const handleNavClick = (e, link) => {
    if (link.path.startsWith('/#')) {
      const id = link.path.replace('/#', '')
      if (location.pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(id)
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center max-w-6xl">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold font-mono text-xs shadow-xs group-hover:bg-blue-700 transition-colors">
            MR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Mahmudur Rahman
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              AI Systems Architect
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isArchive = link.path === '/archive' && location.pathname === '/archive'
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isArchive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <a
            href="/mahmudur_rahman_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <FileText size={13} className="text-blue-600 dark:text-blue-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-colors"
          >
            <Send size={12} />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="lg:hidden flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-1.5 shadow-lg animate-in slide-in-from-top-1 duration-150 max-h-[calc(100vh-60px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
            <a
              href="/mahmudur_rahman_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-semibold"
            >
              <FileText size={14} className="text-blue-600 dark:text-blue-400" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-xs"
            >
              <Send size={13} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
