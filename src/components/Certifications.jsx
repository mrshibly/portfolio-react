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
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/30 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Award size={12} />
              <span>Honors & Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Awards & <span className="text-orange-500">Certifications</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Recognized by NASA, Google, and Cisco for aerospace data intelligence, offensive cybersecurity, and enterprise AI engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Trophy
            return (
              <div 
                key={index} 
                className="card-obsidian p-6 rounded-2xl flex flex-col justify-between group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold bg-slate-100 dark:bg-zinc-800/90 text-slate-600 dark:text-zinc-300 border border-slate-200/50 dark:border-zinc-700/50">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-orange-600 dark:text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
                  <span>{cert.date}</span>
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold hover:underline"
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
