import React from 'react'
import { Trophy, Medal, ShieldCheck, Lock, Sparkles, ExternalLink, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Trophy,
  Medal,
  ShieldCheck,
  Lock,
  Sparkles,
  Award
}

const Certifications = () => {
  const certs = portfolioData.certifications || []

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Award size={12} />
              <span>Honors & Accreditations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Awards & <span className="text-blue-600 dark:text-blue-500">Certifications</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Recognized by NASA, Google, and Cisco for aerospace data intelligence, offensive cybersecurity, and enterprise AI engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Trophy
            return (
              <div 
                key={index} 
                className="card-clean p-5 sm:p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2.5">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{cert.date}</span>
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Certifications
