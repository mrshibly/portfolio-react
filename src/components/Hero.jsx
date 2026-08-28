import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, ArrowDown, Mail, MapPin, 
  Award, Download, Sparkles, Terminal,
  ExternalLink, ChevronRight, CheckCircle2
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact, stats } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-zinc-800/80 overflow-hidden bg-slate-50/50 dark:bg-[#09090b]">
      
      {/* 1. Ambient Background Grids & Atmospheric Warm Glow */}
      <div className="absolute inset-0 bg-linear-grid opacity-40 pointer-events-none" />
      
      {/* Warm Ambient Glow behind Hero */}
      <div className="absolute top-1/3 right-10 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-orange-600/[0.05] dark:bg-orange-500/[0.06] blur-3xl pointer-events-none rounded-full" />



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Achievement Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-2xs font-mono text-xs font-semibold text-slate-800 dark:text-zinc-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{hero.status || "Available for High-Impact AI Roles"}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 font-mono text-xs font-semibold text-orange-600 dark:text-orange-400">
                <Award size={13} className="text-orange-500" />
                <span>NASA Space Apps Winner</span>
              </div>
            </motion.div>

            {/* Headline Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Md. Mahmudur{' '}
                <span className="text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400">
                  Rahman
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-zinc-300 tracking-tight">
                {hero.title || "Backend, AI & Automation Engineer"}
              </p>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p 
              variants={itemVariants} 
              className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {hero.bio || "AI Engineer specializing in autonomous multi-agent workflows, production-ready RAG pipelines, and highly-scalable FastAPI backend services. Bridging research algorithms into robust production systems."}
            </motion.p>

            {/* Social & Contact Strip */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all shadow-2xs"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all shadow-2xs"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all shadow-2xs"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>

              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-zinc-500 pl-2">
                <MapPin size={13} />
                <span>Dhaka, Bangladesh</span>
              </span>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.a
                href={hero.cvLink || "/mahmudur_rahman_cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all group cursor-pointer"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700/80 font-semibold text-sm shadow-2xs transition-all group"
              >
                <span>Explore Systems</span>
                <ArrowDown size={15} className="text-slate-400 dark:text-zinc-500 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Integrated Live Stats Counter Strip */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-slate-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {(stats || []).map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1">
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-500 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: FRAMED PORTRAIT CARD ================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              variants={itemVariants}
              className="relative w-full max-w-md"
            >
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-amber-500/20 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Framed Card Container */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden group"
              >
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-orange-500/60 rounded-tl pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-orange-500/60 rounded-tr pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-orange-500/60 rounded-bl pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-orange-500/60 rounded-br pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-zinc-950">
                  <img 
                    src={hero.avatar || "/profile.png"} 
                    alt={hero.name || "Md. Mahmudur Rahman"}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />



                </div>

              </motion.div>

            </motion.div>
          </div>

        </motion.div>
      </div>

    </section>
  )
}

export default Hero
