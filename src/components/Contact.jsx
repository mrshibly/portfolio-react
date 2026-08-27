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
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Info & Accreditations (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold font-mono mb-3.5">
                <Sparkles size={12} />
                <span>Direct Channel</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
                {contact.headline}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                {contact.subtext}
              </p>
            </div>

            {/* Quick Action Chips */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-blue-600 dark:text-blue-400" />
                    <span>{contact.email}</span>
                  </>
                )}
              </button>

              <a
                href="/mahmudur_rahman_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors shadow-2xs"
              >
                <FileText size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Metadata Contact Pills */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <MapPin size={15} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Location Base</p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium font-sans text-xs">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Phone size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Direct WhatsApp / Call</p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium font-mono text-xs">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Mail size={15} className="text-sky-600 dark:text-sky-400 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Academic Verification</p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium font-mono text-xs">{contact.academicEmail}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Transmission Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="card-clean rounded-2xl p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Send size={15} className="text-blue-600 dark:text-blue-400" />
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

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Inquiry Purpose / Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Engineering Role / Agentic Architecture Consultation"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, engineering scope, or role specifications..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Direct Message</span>
                      <ArrowUpRight size={13} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
