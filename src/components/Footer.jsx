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
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-1.5 group">
              <div className="w-7 h-7 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
                MR
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Md. Mahmudur Rahman
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md">
              AI Engineer & Systems Architect specializing in autonomous multi-agent swarms, production RAG pipelines, and high-concurrency backends.
            </p>
          </div>

          {/* Socials & Resume */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/mahmudur_rahman_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <FileText size={13} className="text-blue-600 dark:text-blue-400" />
              <span>Resume PDF</span>
            </a>
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {year} Md. Mahmudur Rahman. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/archive" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Project Archive
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors text-[11px]"
            >
              <span>Top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
