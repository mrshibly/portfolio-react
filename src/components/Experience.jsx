import React from 'react'
import { Briefcase, Brain, Globe, Rocket, CheckCircle2, Calendar, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Brain,
  Globe,
  Rocket,
  Briefcase
}

const Experience = () => {
  const experience = portfolioData.experience || []

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/20 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Briefcase size={12} />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional <span className="text-orange-500">Experience</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            Proven track record in autonomous multi-agent systems, high-concurrency Python backends, and production AI deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 dark:border-zinc-800 ml-3 sm:ml-4 space-y-6 sm:space-y-8 pb-2">
          {experience.map((exp, index) => {
            const Icon = iconMap[exp.icon] || Briefcase
            return (
              <div key={index} className="relative pl-6 sm:pl-8">
                
                {/* Node on Line */}
                <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50" />

                {/* Card Container */}
                <div className="card-obsidian p-6 sm:p-7 rounded-2xl group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5">
                      {exp.logo ? (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon size={24} />
                        </div>
                      )}

                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-orange-600 dark:text-orange-400 font-mono text-xs font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60">
                        <Calendar size={12} className="text-orange-500" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60">
                          <MapPin size={12} className="text-slate-400 dark:text-zinc-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {exp.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 mb-3.5">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                          <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills Badges */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-[10px] font-mono font-medium text-slate-600 dark:text-zinc-300 border border-slate-200/50 dark:border-zinc-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience
