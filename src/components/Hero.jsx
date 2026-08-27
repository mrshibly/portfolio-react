import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, ArrowDown, Mail, MapPin, 
  Award, Download, Sparkles, Terminal,
  ExternalLink
} from 'lucide-react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero, contact } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      
      {/* 1. Precision Linear Grid Canvas */}
      <div className="absolute inset-0 bg-linear-grid opacity-50 pointer-events-none" />

      {/* 2. Floating Vector Crosshairs (Swiss / Linear Telemetry) */}
      <div className="absolute top-12 left-8 text-slate-300 dark:text-slate-700 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + 23.8103° N
      </div>
      <div className="absolute top-12 right-8 text-slate-300 dark:text-slate-700 font-mono text-xs select-none pointer-events-none hidden sm:block">
        90.4125° E +
      </div>
      <div className="absolute bottom-6 left-8 text-slate-300 dark:text-slate-700 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + SYS_READY
      </div>
      <div className="absolute bottom-6 right-8 text-slate-300 dark:text-slate-700 font-mono text-xs select-none pointer-events-none hidden sm:block">
        LANGGRAPH +
      </div>

      {/* 3. Subtle Ambient Light Radial Mesh */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.75, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-500/[0.07] dark:bg-blue-600/[0.09] blur-3xl pointer-events-none rounded-full" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center"
      >
        
        {/* 1. Centered Portrait & Availability Pill */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-6 sm:mb-8">
          
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group mb-3.5"
          >
            {/* Ambient Avatar Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-600/25 blur-xl scale-110 group-hover:scale-130 transition-transform duration-500" />
            
            {/* Avatar Frame with interactive hover */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900 cursor-pointer"
            >
              <img 
                src={hero.avatar || "/profile.png"} 
                alt="Md. Mahmudur Rahman" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Status Pill */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Roles</span>
          </motion.div>
        </motion.div>

        {/* 2. Prominent Name & AI Architect Headline */}
        <motion.div variants={itemVariants} className="space-y-2.5 mb-6 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Md. Mahmudur Rahman
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 tracking-tight">
            AI Systems Architect & Backend Engineer
          </p>

          <div className="inline-flex items-center justify-center gap-1.5 pt-1 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
            <Award size={14} className="animate-bounce-short" />
            <span>NASA Space Apps Winner & Global Nominee · 2x Google Champion</span>
          </div>
        </motion.div>

        {/* 3. Refined 2-Line Bio */}
        <motion.p 
          variants={itemVariants} 
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
        >
          Architecting autonomous multi-agent reasoning swarms, production RAG pipelines, and high-concurrency FastAPI microservices. Previously built agentic workflows at <strong className="text-slate-900 dark:text-white font-semibold">Studio Butterfly</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Softvence</strong>.
        </motion.p>

        {/* 4. Sleek Centered Action Buttons with Micro-interactions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          
          <motion.a
            href="/mahmudur_rahman_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-colors group"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume (PDF)</span>
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm shadow-2xs transition-colors group"
          >
            <span>Explore Systems</span>
            <ArrowDown size={15} className="text-slate-400 dark:text-slate-500 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

        </motion.div>

        {/* 5. Minimal Social & Location Strip */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto"
        >
          
          <span className="inline-flex items-center gap-1 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            <MapPin size={12} />
            <span>Dhaka, Bangladesh</span>
          </span>

          <span>·</span>

          <motion.a 
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
          </motion.a>

          <span>·</span>

          <motion.a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={13} />
            <span>LinkedIn</span>
          </motion.a>

          <span>·</span>

          <motion.a 
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.08, y: -1 }}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <Mail size={13} />
            <span>Email</span>
          </motion.a>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
