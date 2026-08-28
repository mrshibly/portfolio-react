import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Cpu, Sparkles, ArrowUpRight, Star, Workflow, Network, Layers } from 'lucide-react'
import { GithubIcon } from '../components/icons/GithubIcon'
import { portfolioData } from '../data/portfolioData'
import MermaidViewer from '../components/MermaidViewer'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = portfolioData.projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) {
      navigate('/archive')
    }
  }, [project, navigate])

  if (!project) return null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 pt-24 sm:pt-32 pb-20 sm:pb-24 relative transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/archive" 
          className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 sm:mb-8 group font-medium text-xs uppercase tracking-wider"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-orange-500" />
          <span>Back to Projects Archive</span>
        </Link>

        {/* Top Header Grid */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start mb-10 sm:mb-12">
          
          {/* Left Column: Details & Highlights (7 Cols) */}
          <div className="lg:col-span-7">
            
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                {project.category}
              </span>
              {project.stars !== undefined && project.stars > 0 && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
                  <Star size={11} fill="currentColor" />
                  <span>{project.stars} GitHub Stars</span>
                </span>
              )}
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-mono">
                  {project.metrics}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 sm:mb-3 text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            {project.tagline && (
              <p className="text-base sm:text-lg text-orange-600 dark:text-orange-400 font-medium mb-4 sm:mb-5">
                {project.tagline}
              </p>
            )}
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 sm:mb-7 font-normal">
              {project.desc}
            </p>

            {/* Highlights List */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6 sm:mb-7 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs space-y-2.5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-zinc-200 flex items-center gap-2 font-bold mb-2">
                  <Sparkles size={13} className="text-orange-500" />
                  <span>Architectural Highlights</span>
                </h3>
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6 w-full">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-semibold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all"
                >
                  <GithubIcon size={14} />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>

            {/* Tags Container */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-zinc-800">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/90 border border-slate-200/50 dark:border-zinc-700/50 text-[11px] font-mono text-slate-600 dark:text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Preview (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="card-obsidian rounded-2xl overflow-hidden p-2.5 border border-slate-200 dark:border-zinc-800">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
                  }}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-3 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-zinc-400 text-[10px] sm:text-xs">ENGINEERING STATUS</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1.5 text-[10px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  VERIFIED & ACTIVE
                </span>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="card-obsidian p-5 rounded-2xl space-y-1.5 border border-slate-200 dark:border-zinc-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 font-bold">
                <Cpu size={13} className="text-orange-500" />
                <span>Runtime Topology</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Asynchronous event loop, multi-worker process manager with sub-second retrieval caching and fault-tolerant retry protocols.
              </p>
            </div>

          </div>

        </div>

        {/* Dedicated System Architecture Section with Mermaid Flowchart */}
        {project.mermaid && (
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-zinc-800">
            <div className="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-500 font-semibold mb-1">
                  <Workflow size={13} />
                  <span>Interactive Architecture Flowchart</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  End-to-End System Pipeline
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-500">
                Mermaid.js SVG Rendering
              </span>
            </div>

            <MermaidViewer chart={project.mermaid} />
          </div>
        )}

        {/* Step-by-Step Pipeline Execution */}
        {project.architectureSteps && project.architectureSteps.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Network size={16} className="text-orange-500" />
              <span>Step-by-Step Dataflow Nodes</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {project.architectureSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="card-obsidian p-4 rounded-2xl flex items-start gap-3.5 text-xs border border-slate-200 dark:border-zinc-800"
                >
                  <span className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white font-mono text-xs">{step.node}</p>
                    <p className="text-slate-600 dark:text-zinc-400 text-xs leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProjectDetails
