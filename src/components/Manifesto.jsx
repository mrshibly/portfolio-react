import React from 'react'
import { Sparkles } from 'lucide-react'

const Manifesto = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-5">
          <Sparkles size={12} />
          <span>Engineering Philosophy</span>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-5">
          "The true value of AI isn't just in model parameters—it's in <span className="text-blue-600 dark:text-blue-500">deterministic system design</span> and <span className="text-blue-600 dark:text-blue-500">reliable execution</span>."
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          I build autonomous systems where agents don't just generate text, but reliably orchestrate multi-step business logic, verify citations, and integrate directly with mission-critical software workflows.
        </p>

      </div>
    </section>
  )
}

export default Manifesto
