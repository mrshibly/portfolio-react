import React from 'react'
import { ArrowUp, FileText } from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-orange-500/25">
                MR
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Md. Mahmudur Rahman
              </span>
            </Link>
            <p className="text-slate-500 dark:text-zinc-400 text-xs max-w-md">
              Backend, AI & Automation Engineer specializing in high-concurrency Python microservices, autonomous multi-agent workflows, and enterprise automation.
            </p>
          </div>

          {/* Socials & Resume */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/mahmudur_rahman_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors border border-transparent dark:border-zinc-700/60"
            >
              <FileText size={13} className="text-orange-500" />
              <span>Resume PDF</span>
            </a>
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors border border-transparent dark:border-zinc-700/60"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors border border-transparent dark:border-zinc-700/60"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-zinc-500">
          <p>© {year} Md. Mahmudur Rahman. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/archive" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              Project Archive
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors text-[11px] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
