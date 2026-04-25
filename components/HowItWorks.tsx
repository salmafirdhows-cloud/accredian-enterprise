'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Skill Gap Analysis',
    description:
      'Our consultants meet with your L&D and HR teams to map current skill baselines, business goals, and team structures. We identify the exact gaps holding your organization back.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
    textColor: 'text-brand-600',
  },
  {
    number: '02',
    title: 'Custom Program Design',
    description:
      'We co-create a tailored learning path with your chosen university partner — aligning curriculum to your tech stack, industry context, and strategic priorities.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    number: '03',
    title: 'Launch & Live Mentorship',
    description:
      'Cohorts begin with structured live sessions, peer collaboration, and 1:1 mentorship from industry experts. AI-adaptive paths keep every learner engaged.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    number: '04',
    title: 'Track ROI & Certify',
    description:
      'Monitor real-time progress on the enterprise dashboard. Learners earn recognized certifications from IITs/IIMs. We deliver a full ROI report at program completion.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="reveal">
            <span className="section-tag">The Process</span>
          </div>
          <h2
            className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-2"
            style={{ transitionDelay: '0.1s' }}
          >
            From kickoff to{' '}
            <span className="gradient-text">measurable impact</span>
          </h2>
          <p
            className="reveal text-gray-500 text-lg mt-4 leading-relaxed"
            style={{ transitionDelay: '0.2s' }}
          >
            A proven four-step framework that gets your teams upskilled — fast, without disrupting day-to-day operations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-cyan-200 to-emerald-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                {/* Icon circle */}
                <div
                  className={`relative w-28 h-28 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl mb-6 text-white`}
                >
                  {step.icon}
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-lg ${step.bg} ${step.textColor} flex items-center justify-center text-xs font-bold font-display border-2 border-white shadow`}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16" style={{ transitionDelay: '0.5s' }}>
          <a href="#contact" className="btn-primary text-base py-3.5 px-10">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
