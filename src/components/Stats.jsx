import React from 'react'
import { Cpu, Workflow, GraduationCap, Trophy, Code2, GitPullRequest, Terminal, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useGithubStats } from '../hooks/useGithubStats'

const platformCards = [
  {
    platform: "GitHub Ecosystem",
    metric: "14+ Repositories",
    subtext: "Open Source AI & Microservices",
    icon: GitPullRequest,
    tag: "VERIFIED DEV",
    link: "https://github.com/mrshibly"
  },
  {
    platform: "AI Architecture",
    metric: "150+ Agent Swarms",
    subtext: "n8n & LangGraph Automations",
    icon: Workflow,
    tag: "PRODUCTION",
    link: "#projects"
  },
  {
    platform: "Global Competitions",
    metric: "NASA Space Apps Winner",
    subtext: "2x Google Hacking Champion",
    icon: Award,
    tag: "GLOBAL AWARDS",
    link: "#certifications"
  }
]

const Stats = () => {
  return (
    <section className="py-12 relative bg-slate-50/20 dark:bg-[#09090b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platformCards.map((card, i) => {
            const Icon = card.icon
            return (
              <a 
                key={i} 
                href={card.link}
                className="card-obsidian p-5 rounded-2xl relative group border border-slate-200 dark:border-zinc-800/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between block"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-orange-500 dark:text-orange-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                      {card.tag}
                    </span>
                  </div>

                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">{card.platform}</h4>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {card.metric}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-zinc-400 text-xs mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80 font-normal">
                  {card.subtext}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
