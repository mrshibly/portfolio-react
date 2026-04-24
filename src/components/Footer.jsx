import { Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">SHIBLY<span className="text-electric">.AI</span></h3>
            <p className="text-slate text-sm leading-relaxed">
              Design and engineering at the intersection of neural networks and architectural stability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6 font-mono">Navigation</p>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-electric transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-electric transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-electric transition-colors">Experience</a></li>
                <li><a href="#leadership" className="hover:text-electric transition-colors">Leadership</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6 font-mono">Social</p>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="https://linkedin.com/in/mrshibly" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
                <li><a href="https://github.com/mrshibly" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors flex items-center gap-2"><Github size={16}/> GitHub</a></li>
                <li><a href="https://twitter.com/mr_shibly" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors flex items-center gap-2"><Twitter size={16}/> Twitter</a></li>
                <li><a href="https://medium.com/@mrshibly" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors flex items-center gap-2"><ExternalLink size={16}/> Medium</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6 font-mono">Legal</p>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-electric transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-slate text-xs font-mono tracking-widest">
            © {year} MD. MAHMUDUR RAHMAN. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-slate">SYSTEM STATUS: OPTIMAL</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-slate">
              BUILT WITH VITE + REACT + GSAP
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
