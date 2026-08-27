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
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <Briefcase size={12} />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional <span className="text-blue-600 dark:text-blue-500">Experience</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            7+ years of engineering leadership, international coordination, and production AI model deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-6 sm:space-y-8 pb-2">
          {experience.map((exp, index) => {
            const Icon = iconMap[exp.icon] || Briefcase
            return (
              <div key={index} className="relative pl-6 sm:pl-8">
                
                {/* Node on Line */}
                <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />

                {/* Card Container */}
                <div className="card-clean p-5 sm:p-6 rounded-xl group">
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <Calendar size={12} className="text-blue-600 dark:text-blue-400" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <MapPin size={12} className="text-slate-500 dark:text-slate-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {exp.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
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
