'use client'

import { useEffect, useRef, useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const teamSizes = ['1–50', '51–200', '201–500', '500–1000', '1000+']
const interests = [
  'Data Science & AI',
  'Product Management',
  'Leadership & Strategy',
  'ML Engineering',
  'Business Analytics',
  'Custom Program',
]

export default function LeadForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    interest: '',
    message: '',
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.company) return

    setFormState('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error('Failed')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all'

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <div className="reveal">
              <span className="section-tag">Get Started</span>
            </div>
            <h2
              className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-3 leading-[1.1]"
              style={{ transitionDelay: '0.1s' }}
            >
              Ready to transform{' '}
              <span className="gradient-text">your workforce?</span>
            </h2>
            <p
              className="reveal text-gray-500 text-lg mt-5 leading-relaxed"
              style={{ transitionDelay: '0.2s' }}
            >
              Schedule a free consultation with our enterprise learning consultants. We'll map your skill gaps, recommend the right programs, and design a custom deployment plan.
            </p>

            {/* What you get */}
            <div className="reveal mt-10 space-y-4" style={{ transitionDelay: '0.3s' }}>
              {[
                { icon: '🎯', text: 'Free 45-min skill gap assessment' },
                { icon: '📋', text: 'Custom program recommendation' },
                { icon: '📊', text: 'ROI projection for your team size' },
                { icon: '🤝', text: 'Dedicated enterprise account manager' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100 text-lg">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="reveal mt-10 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {['PS', 'RM', 'AD', 'VN'].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Join 500+ enterprises</div>
                  <div className="text-xs text-gray-400">already upskilling with Accredian</div>
                </div>
              </div>
              <div className="flex text-amber-400 text-sm gap-0.5">
                {'★★★★★'} <span className="text-gray-600 ml-1 font-semibold">4.8/5</span>
                <span className="text-gray-400 text-xs ml-1 mt-0.5">from 50,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            {formState === 'success' ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">You're all set!</h3>
                <p className="text-gray-500 mb-6">
                  Our enterprise team will reach out within <strong>24 hours</strong> to schedule your consultation.
                </p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', email: '', company: '', teamSize: '', interest: '', message: '' }) }}
                  className="text-sm text-brand-600 font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Schedule a Free Demo</h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="priya@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Name *</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Team Size</label>
                      <select name="teamSize" value={form.teamSize} onChange={handleChange} className={inputClass}>
                        <option value="">Select size</option>
                        {teamSizes.map((s) => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Area of Interest</label>
                      <select name="interest" value={form.interest} onChange={handleChange} className={inputClass}>
                        <option value="">Select program</option>
                        {interests.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tell us about your goals</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What skill gaps are you trying to close? What outcomes matter most?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={formState === 'loading' || !form.name || !form.email || !form.company}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {formState === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No spam. No commitment. We respond within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
