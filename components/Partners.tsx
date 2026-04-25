'use client'

import { useEffect, useRef } from 'react'

const partners = [
  { name: 'IIT Guwahati', abbr: 'IIT-G', sub: 'Indian Institute of Technology', color: 'border-blue-200 bg-blue-50 text-blue-700' },
  { name: 'IIM Visakhapatnam', abbr: 'IIM-V', sub: 'Indian Institute of Management', color: 'border-red-200 bg-red-50 text-red-700' },
  { name: 'IIT Delhi', abbr: 'IIT-D', sub: 'Indian Institute of Technology', color: 'border-indigo-200 bg-indigo-50 text-indigo-700' },
  { name: 'SP Jain School', abbr: 'SPJAIN', sub: 'SP Jain School of Global Management', color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { name: 'XLRI Jamshedpur', abbr: 'XLRI', sub: 'Xavier Labour Relations Institute', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { name: 'BITS Pilani', abbr: 'BITS', sub: 'Birla Institute of Technology & Science', color: 'border-cyan-200 bg-cyan-50 text-cyan-700' },
  { name: 'IIT Bombay', abbr: 'IIT-B', sub: 'Indian Institute of Technology', color: 'border-violet-200 bg-violet-50 text-violet-700' },
  { name: 'ISB Hyderabad', abbr: 'ISB', sub: 'Indian School of Business', color: 'border-rose-200 bg-rose-50 text-rose-700' },
]

const certPartners = [
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Microsoft Azure', icon: '🔷' },
  { name: 'AWS', icon: '⚡' },
  { name: 'Databricks', icon: '🔶' },
  { name: 'Snowflake', icon: '❄️' },
  { name: 'Meta', icon: '🔵' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section id="partners" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag">Academic Partners</span>
          </div>
          <h2
            className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-2"
            style={{ transitionDelay: '0.1s' }}
          >
            Backed by{' '}
            <span className="gradient-text">India's finest</span>
          </h2>
          <p
            className="reveal text-gray-500 text-lg mt-4"
            style={{ transitionDelay: '0.2s' }}
          >
            Every program carries the credential of a top-tier institution. No fluff. No self-certification.
          </p>
        </div>

        {/* University partner grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {partners.map((p, i) => (
            <div
              key={p.abbr}
              className={`reveal card-hover flex items-center gap-4 p-5 rounded-2xl border-2 ${p.color}`}
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-display font-black text-sm border border-gray-100">
                {p.abbr}
              </div>
              <div>
                <div className="font-display font-bold text-gray-900 text-sm">{p.name}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal relative flex items-center my-12" style={{ transitionDelay: '0.3s' }}>
          <div className="flex-1 border-t border-gray-100" />
          <span className="mx-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Technology Certification Partners
          </span>
          <div className="flex-1 border-t border-gray-100" />
        </div>

        {/* Tech partners */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: '0.4s' }}>
          {certPartners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors"
            >
              <span className="text-xl">{p.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="reveal grid sm:grid-cols-3 gap-5 mt-16" style={{ transitionDelay: '0.5s' }}>
          {[
            {
              icon: '🏆',
              title: 'ISO 9001 Certified',
              desc: 'Quality management standards for all programs',
            },
            {
              icon: '🔒',
              title: 'SOC 2 Compliant',
              desc: 'Enterprise-grade data security and privacy',
            },
            {
              icon: '⭐',
              title: '4.8 / 5 Rating',
              desc: 'Average learner satisfaction across 50,000+ reviews',
            },
          ].map((badge) => (
            <div key={badge.title} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="text-3xl">{badge.icon}</span>
              <div>
                <div className="font-display font-bold text-gray-900">{badge.title}</div>
                <div className="text-sm text-gray-500 mt-0.5">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
