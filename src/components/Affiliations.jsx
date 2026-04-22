import React from 'react'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { Award, Shield, Users, Rocket, Globe, Heart, Briefcase, Zap } from 'lucide-react'

const iconMap = {
  "Cyber Security Club": Shield,
  "BASIS Student Forum": Users,
  "Team Apex": Rocket,
  "Creative IT Institute": Briefcase,
  "Daffodil University": Globe,
  "Red Crescent": Heart,
  "GM Organization": Zap,
  "SETU Founder": Award
}

const Affiliations = () => {
  const { data } = usePortfolioData()
  const affiliations = data.affiliations || []

  return (
    <section id="affiliations" className="py-24 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-electric font-mono text-xs uppercase tracking-widest mb-4">Leadership & Network</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Professional <span className="text-drama italic">Affiliations</span>
            </h2>
          </div>
          <p className="text-slate/60 text-sm font-mono max-w-xs text-right hidden md:block">
            Collaborating with leading organizations to drive innovation and community impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {affiliations.map((org, index) => {
            if (!org) return null;
            const isString = typeof org === 'string'
            const name = isString ? org : org.name || 'Unnamed'
            const logo = isString ? null : org.logo
            
            const Icon = iconMap[name] || Award
            return (
              <div 
                key={index} 
                className="group bg-obsidian p-10 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-all duration-500 relative"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-electric/10 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-electric/30">
                  {logo ? (
                    <img src={logo} alt={name} className="w-8 h-8 object-contain" />
                  ) : (
                    <Icon className="text-slate group-hover:text-electric transition-colors" size={32} />
                  )}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate group-hover:text-white transition-colors">
                  {name}
                </h3>
                
                {/* Decoration */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-white/10 group-hover:bg-electric transition-colors" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-drama/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  )
}

export default Affiliations
