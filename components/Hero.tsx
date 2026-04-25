'use client'

import { useEffect, useRef } from 'react'

const partnerLogos = [
  { name: 'IIT Guwahati', abbr: 'IIT-G' },
  { name: 'IIM Visakhapatnam', abbr: 'IIM-V' },
  { name: 'IIT Delhi', abbr: 'IIT-D' },
  { name: 'SP Jain', abbr: 'SPJAIN' },
  { name: 'XLRI', abbr: 'XLRI' },
  { name: 'BITS Pilani', abbr: 'BITS' },
]

export default function Hero() {
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
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0e7ff_0%,transparent_60%)]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-2xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff15_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff15_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Trusted by 500+ Enterprises
              </span>
            </div>

            <h1
              className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mt-4"
              style={{ transitionDelay: '0.2s' }}
            >
              Upskill Your{' '}
              <span className="gradient-text">Workforce</span>{' '}
              <br className="hidden sm:block" />
              at Scale
            </h1>

            <p
              className="reveal text-gray-500 text-lg sm:text-xl mt-6 leading-relaxed max-w-xl"
              style={{ transitionDelay: '0.3s' }}
            >
              Partner with IITs, IIMs, and global universities to deliver curated programs, live mentorship, and real-time analytics — with measurable ROI.
            </p>

            <div
              className="reveal flex flex-col sm:flex-row gap-4 mt-10"
              style={{ transitionDelay: '0.4s' }}
            >
              <a href="#contact" className="btn-primary text-base py-3.5 px-8">
                Schedule a Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#platform" className="btn-outline text-base py-3.5 px-8">
                Explore Platform
              </a>
            </div>

            {/* Stats */}
            <div
              className="reveal grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-gray-100"
              style={{ transitionDelay: '0.5s' }}
            >
              {[
                { value: '500+', label: 'Enterprises' },
                { value: '94%', label: 'Completion Rate' },
                { value: '60%', label: 'Avg Salary Hike' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Card */}
          <div className="reveal hidden lg:block" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-indigo-200/50 border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Enterprise Dashboard</div>
                    <div className="font-display font-bold text-gray-900 text-lg mt-0.5">Learning Analytics</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {[
                    { label: 'Data Science & AI', pct: 87, color: 'bg-brand-500' },
                    { label: 'Product Management', pct: 74, color: 'bg-cyan-500' },
                    { label: 'Leadership & Strategy', pct: 91, color: 'bg-violet-500' },
                    { label: 'ML Engineering', pct: 68, color: 'bg-amber-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-gray-100">
                  {[
                    { label: 'Learners', value: '1,284' },
                    { label: 'Courses', value: '47' },
                    { label: 'ROI', value: '3.8x' },
                  ].map((m) => (
                    <div key={m.label} className="text-center bg-gray-50 rounded-xl p-3">
                      <div className="font-display font-bold text-gray-900 text-lg">{m.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 p-3 flex items-center gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">96% Completion</div>
                  <div className="text-xs text-gray-400">Batch Q1 2025</div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 p-3 flex items-center gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">+40% Productivity</div>
                  <div className="text-xs text-gray-400">Team Velocity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 reveal" style={{ transitionDelay: '0.6s' }}>
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Co-created with India's Top Institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {partnerLogos.map((p) => (
              <div
                key={p.abbr}
                className="flex items-center justify-center px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors"
              >
                <span className="font-display font-bold text-sm text-gray-700">{p.abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
