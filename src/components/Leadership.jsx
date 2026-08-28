import React from 'react'
import { Users, ShieldAlert, Megaphone, Award, HeartHandshake, Shield } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  ShieldAlert,
  Megaphone,
  Award,
  HeartHandshake,
  Shield,
  Users
}

const Leadership = () => {
  const leadership = portfolioData.leadership || []

  return (
    <section id="leadership" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/20 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Users size={12} />
              <span>Community & Mentorship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Leadership & <span className="text-orange-500">Initiatives</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Fostering engineering communities, developing CTF problem sets, and mentoring students in cybersecurity and modern AI stacks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.icon] || Users
            return (
              <div 
                key={index} 
                className="card-obsidian p-6 rounded-2xl flex flex-col justify-between group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {item.logo ? (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
                        <img 
                          src={item.logo} 
                          alt={item.org} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                    )}
                    
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-zinc-800/90 text-slate-600 dark:text-zinc-300 border border-slate-200/50 dark:border-zinc-700/50 font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
                    {item.org}
                  </p>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Leadership
