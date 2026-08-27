import React, { useState } from 'react'
import { Send, Mail, Copy, Check, MapPin, Phone, ArrowUpRight, Sparkles, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const { contact } = portfolioData
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="card-clean rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-5">
              <Sparkles size={12} />
              <span>Direct Communication Channel</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3.5">
              {contact.headline}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-7 font-normal">
              {contact.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full">
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Send size={14} />
                <span>Send Email Directly</span>
                <ArrowUpRight size={13} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-blue-600 dark:text-blue-400" />
                    <span>{contact.email}</span>
                  </>
                )}
              </button>

              <a
                href="/mahmudur_rahman_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                <FileText size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Metadata Grid */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Location Base</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium font-sans">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Direct Contact</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Academic Channel</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium truncate">{contact.academicEmail}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
