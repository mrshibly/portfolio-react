import React from 'react'
import { GraduationCap, BookOpen, School, Calendar } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  GraduationCap,
  BookOpen,
  School
}

const Education = () => {
  const education = portfolioData.education || []

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-zinc-800/80 relative bg-slate-50/20 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <GraduationCap size={12} />
              <span>Academic Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Education & <span className="text-orange-500">Degrees</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-xs sm:text-sm md:text-base font-normal">
            B.Sc. in Computer Science & Engineering with distinction (CGPA 3.64/4.00) and consistent GPA 5.00/5.00 academic records.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap
            return (
              <div 
                key={index} 
                className="card-obsidian p-6 rounded-2xl flex flex-col justify-between group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {edu.logo ? (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
                        <img 
                          src={edu.logo} 
                          alt={edu.institution} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                    )}
                    
                    {edu.result && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 font-bold">
                        {edu.result}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {edu.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-500">
                  <Calendar size={13} className="text-orange-500" />
                  <span>{edu.duration}</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Education
