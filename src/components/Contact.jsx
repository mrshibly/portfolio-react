import React from 'react'
import { ArrowRight } from 'lucide-react'
import { usePortfolioData } from '../hooks/usePortfolioData'

const Contact = () => {
  const { data } = usePortfolioData()
  
  if (!data?.contact) return null

  // Helper to split headline based on 'the' or similar breaking points for styling
  // We'll keep it simple: first line normal, second line with drama text
  // Since the original was: "Ready to automate <br /> the <span className="text-drama">Unimaginable?</span>"
  // Let's just use the headline directly, or split it if we want.
  // Actually, we can use dangerouslySetInnerHTML if we want, or just a simpler approach.
  // We'll just render it as text, maybe the last word as text-drama.
  
  const headlineWords = data.contact.headline.split(' ')
  const lastWord = headlineWords.pop()
  const restOfHeadline = headlineWords.join(' ')

  return (
    <section id="contact" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card bg-electric/5 border-electric/20 p-12 md:p-24 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/20 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-none">
              {restOfHeadline} <br />
              <span className="text-drama">{lastWord}</span>
            </h2>
            
            <p className="text-slate text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl">
              {data.contact.subtext}
            </p>

            <div className="flex flex-wrap gap-8">
              <a 
                href={`mailto:${data.contact.email}`}
                className="px-12 py-5 bg-white text-obsidian rounded-full text-xl font-bold hover:bg-electric hover:text-white transition-all duration-500 flex items-center gap-4 group"
              >
                Initiate Project
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </a>
              
              <div className="flex items-center gap-6">
                {data.contact.linkedin && (
                  <>
                    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-white transition-colors">LinkedIn</a>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </>
                )}
                {data.contact.github && (
                  <>
                    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-white transition-colors">GitHub</a>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </>
                )}
                {data.contact.twitter && (
                  <a href={data.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-white transition-colors">X / Twitter</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
