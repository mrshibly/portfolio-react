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
    <section id="education" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-2 sm:mb-3">
              <GraduationCap size={12} />
              <span>Academic Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Education & <span className="text-blue-600 dark:text-blue-500">Degrees</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-md text-xs sm:text-sm md:text-base font-normal">
            B.Sc. in Computer Science & Engineering with distinction (CGPA 3.63/4.00) and consistent GPA 5.00/5.00 academic records.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap
            return (
              <div 
                key={index} 
                className="card-clean p-5 sm:p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {edu.logo ? (
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-2xs">
                        <img 
                          src={edu.logo} 
                          alt={edu.institution} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                    )}
                    
                    {edu.result && (
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 font-bold">
                        {edu.result}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-wider mb-3 font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {edu.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar size={12} className="text-blue-600 dark:text-blue-400" />
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
