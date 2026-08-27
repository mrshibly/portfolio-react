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
    <section id="leadership" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Users size={12} />
              <span>Community & Mentorship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Leadership & <span className="text-blue-600 dark:text-blue-500">Initiatives</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Fostering engineering communities, developing CTF problem sets, and mentoring students in cybersecurity and modern AI stacks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.icon] || Users
            return (
              <div 
                key={index} 
                className="card-clean p-5 sm:p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {item.logo ? (
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-2xs">
                        <img 
                          src={item.logo} 
                          alt={item.org} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                    )}
                    
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-wider mb-2.5 font-semibold">
                    {item.org}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
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
