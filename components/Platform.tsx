'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'University-Backed Curriculum',
    description: 'Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Live Analytics Dashboard',
    description: 'Real-time tracking of completion rates, engagement scores, and ROI reporting — all in one powerful command center.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Expert Mentorship',
    description: '1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Cohort-Based Learning',
    description: 'Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Custom Curriculum',
    description: 'Tailor programs to your organization\'s skill gaps, industry context, and strategic goals. Fully bespoke content.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Recognized Certifications',
    description: 'Earn verifiable credentials from top-tier institutions. Certificates that boost employee retention and career growth.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'AI-Adaptive Paths',
    description: 'Intelligent learning journeys that adjust to each learner\'s pace, baseline, and goals using AI-driven recommendations.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Accessibility',
    description: 'Seamlessly upskill distributed teams across different timezones. No barriers to quality enterprise education.',
    color: 'bg-teal-50 text-teal-600',
  },
]

export default function Platform() {
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
    <section id="platform" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag">The Platform</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-2" style={{ transitionDelay: '0.1s' }}>
            Everything L&D teams need,{' '}
            <span className="gradient-text">in one place</span>
          </h2>
          <p className="reveal text-gray-500 text-lg mt-4 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
            From curriculum design to real-time analytics — Accredian Enterprise is the complete operating system for ambitious learning organizations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
