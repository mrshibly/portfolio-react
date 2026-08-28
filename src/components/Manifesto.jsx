import React from 'react'
import { Sparkles } from 'lucide-react'

const Manifesto = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-zinc-800/80 transition-colors bg-slate-50/10 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-6">
          <Sparkles size={12} />
          <span>Engineering Philosophy</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
          "The true value of AI isn't just in model parameters—it's in <span className="text-orange-500">deterministic system design</span> and <span className="text-orange-500">reliable execution</span>."
        </h2>

        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          I build autonomous systems where agents don't just generate text, but reliably orchestrate multi-step business logic, verify citations, and integrate directly with mission-critical software workflows.
        </p>

      </div>
    </section>
  )
}

export default Manifesto
