import React, { useState } from 'react'
import { Send, Mail, Copy, Check, MapPin, Phone, ArrowUpRight, Sparkles, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const { contact } = portfolioData
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback: trigger mailto if backend endpoint is unavailable
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inbound')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
        setSubmitStatus('success')
      }
    } catch (err) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inbound')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
      setSubmitStatus('success')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 6000)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-200/80 dark:border-zinc-800/80 relative overflow-hidden bg-slate-50/40 dark:bg-[#09090b]">
      
      {/* Warm Ambient Glow for Contact Area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Glowing Framed Container */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info & Channels (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono mb-3.5">
                  <Sparkles size={12} />
                  <span>Direct Communication</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
                  Let's Build <span className="text-orange-500">Together</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {contact.subtext || "I'm currently open to architectural consultations, specialized AI engineering roles, and high-impact technical partnerships."}
                </p>
              </div>

              {/* Quick Action Chips */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 text-xs font-mono transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-orange-500" />
                      <span>{contact.email}</span>
                    </>
                  )}
                </button>

                <a
                  href="/mahmudur_rahman_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 text-xs font-semibold transition-all shadow-xs"
                >
                  <FileText size={14} className="text-orange-500" />
                  <span>Resume (PDF)</span>
                </a>
              </div>

              {/* Metadata Contact Pills */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-mono text-slate-600 dark:text-zinc-400">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800">
                  <MapPin size={16} className="text-orange-500 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500">Location Base</p>
                    <p className="text-slate-900 dark:text-zinc-200 font-medium font-sans text-xs">{contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800">
                  <Phone size={16} className="text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500">Direct WhatsApp / Call</p>
                    <p className="text-slate-900 dark:text-zinc-200 font-medium font-mono text-xs">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800">
                  <Mail size={16} className="text-amber-500 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500">Academic Verification</p>
                    <p className="text-slate-900 dark:text-zinc-200 font-medium font-mono text-xs">{contact.academicEmail}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Transmission Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800/80">
                
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-zinc-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Send size={15} className="text-orange-500" />
                    <span>Send Direct Message</span>
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    INSTANT INBOX
                  </span>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-200 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Thank you! Your message has been dispatched. Mahmudur will respond within 24 hours.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-zinc-300 font-medium mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-zinc-300 font-medium mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-zinc-300 font-medium mb-1.5">Inquiry Purpose / Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Engineering Role / Agentic Architecture Consultation"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-zinc-300 font-medium mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, engineering scope, or role specifications..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/25 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                        <ArrowUpRight size={14} />
                      </>
                    )}
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
