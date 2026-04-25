'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    title: 'Chief People Officer',
    company: 'FinTech Unicorn',
    initials: 'PS',
    color: 'from-brand-400 to-brand-600',
    metrics: { label: 'Team Velocity', value: '+40%' },
  },
  {
    quote:
      'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rahul Mehta',
    title: 'VP Engineering',
    company: 'Series-C SaaS',
    initials: 'RM',
    color: 'from-cyan-400 to-cyan-600',
    metrics: { label: 'ML Adoption', value: '3x' },
  },
  {
    quote:
      'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Anita Desai',
    title: 'Head of L&D',
    company: 'Global Conglomerate',
    initials: 'AD',
    color: 'from-violet-400 to-violet-600',
    metrics: { label: 'Completion Rate', value: '96%' },
  },
  {
    quote:
      'The skill gap analysis alone was worth the engagement. Accredian\'s consultants identified blind spots in our data team that we had completely missed. Exceptional partnership.',
    name: 'Vikram Nair',
    title: 'CHRO',
    company: 'Fortune 500 MNC',
    initials: 'VN',
    color: 'from-emerald-400 to-emerald-600',
    metrics: { label: 'Skill Gap Closed', value: '85%' },
  },
  {
    quote:
      'Our product managers now speak the language of data. The PM + Analytics program from Accredian and IIM-V was exactly what we needed to scale our product culture.',
    name: 'Sneha Kulkarni',
    title: 'Director of Product',
    company: 'D2C Brand',
    initials: 'SK',
    color: 'from-amber-400 to-amber-600',
    metrics: { label: 'PM Productivity', value: '+55%' },
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

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

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag">Testimonials</span>
          </div>
          <h2
            className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-2"
            style={{ transitionDelay: '0.1s' }}
          >
            Trusted by{' '}
            <span className="gradient-text">L&D leaders</span>
          </h2>
          <p
            className="reveal text-gray-500 text-lg mt-4"
            style={{ transitionDelay: '0.2s' }}
          >
            Hear from the CHROs and VP-Engs who transformed their organizations.
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="reveal max-w-4xl mx-auto" style={{ transitionDelay: '0.3s' }}>
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-display font-bold text-gray-100 leading-none select-none">
              "
            </div>

            <div className="relative">
              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-xl px-4 py-2 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${t.color}`} />
                <span className="text-xs font-semibold text-gray-600">{t.metrics.label}</span>
                <span className="font-display font-bold text-brand-600 text-sm">{t.metrics.value}</span>
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold font-display text-sm shadow-lg`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="reveal flex items-center justify-center gap-2 mt-8" style={{ transitionDelay: '0.4s' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-8 h-2.5 bg-brand-500' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mini cards row */}
        <div className="reveal grid sm:grid-cols-5 gap-3 mt-10" style={{ transitionDelay: '0.5s' }}>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                i === active
                  ? 'border-brand-300 bg-brand-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-6 h-6 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.initials}
                </div>
                <span className="text-xs font-semibold text-gray-700 truncate">{t.name}</span>
              </div>
              <div className="text-xs text-gray-400 truncate">{t.company}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
