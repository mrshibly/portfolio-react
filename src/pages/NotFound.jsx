import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Home, Briefcase, Mail } from 'lucide-react'

const glitchMessages = [
  "404: The requested path was not found in this architecture.",
  "Route collapsed: Destination node is unreachable.",
  "404: Endpoint does not exist."
]

const NotFound = () => {
  const errorMsg = useMemo(() => glitchMessages[Math.floor(Math.random() * glitchMessages.length)], [])

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-20 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="text-center px-6 max-w-xl mx-auto">
        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Endpoint Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
          {errorMsg}
        </p>

        {/* Navigation suggestions */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs transition-colors shadow-xs"
          >
            <Home size={15} /> <span>Return to Overview</span>
          </Link>
          <Link 
            to="/archive" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-semibold text-xs transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Briefcase size={15} /> <span>Browse Archive</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
