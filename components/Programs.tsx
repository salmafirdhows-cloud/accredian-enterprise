'use client'

import { useEffect, useRef, useState } from 'react'

const categories = ['All', 'Data & AI', 'Product', 'Leadership', 'Engineering']

const programs = [
  {
    title: 'Executive Program in Data Science & AI',
    institution: 'IIT Guwahati',
    duration: '11 months',
    category: 'Data & AI',
    level: 'Advanced',
    badge: 'Most Popular',
    topics: ['Machine Learning', 'Deep Learning', 'MLOps', 'GenAI'],
    badgeColor: 'bg-brand-500',
  },
  {
    title: 'Professional Certificate in Product Management',
    institution: 'IIM Visakhapatnam',
    duration: '6 months',
    category: 'Product',
    level: 'Intermediate',
    badge: 'New',
    topics: ['Product Strategy', 'User Research', 'Roadmapping', 'Analytics'],
    badgeColor: 'bg-cyan-500',
  },
  {
    title: 'Leadership & Strategic Management',
    institution: 'XLRI Jamshedpur',
    duration: '8 months',
    category: 'Leadership',
    level: 'Senior',
    badge: null,
    topics: ['Strategic Thinking', 'Org Design', 'Change Management', 'OKRs'],
    badgeColor: '',
  },
  {
    title: 'ML Engineering & MLOps',
    institution: 'BITS Pilani',
    duration: '5 months',
    category: 'Engineering',
    level: 'Advanced',
    badge: 'High ROI',
    topics: ['Kubernetes', 'Docker', 'CI/CD', 'Model Serving'],
    badgeColor: 'bg-amber-500',
  },
  {
    title: 'Business Analytics & Intelligence',
    institution: 'SP Jain School',
    duration: '4 months',
    category: 'Data & AI',
    level: 'Beginner',
    badge: null,
    topics: ['SQL', 'Tableau', 'Python', 'Statistics'],
    badgeColor: '',
  },
  {
    title: 'Digital Product Design',
    institution: 'IIT Delhi',
    duration: '6 months',
    category: 'Product',
    level: 'Intermediate',
    badge: 'Trending',
    topics: ['UX Research', 'Figma', 'Design Systems', 'Prototyping'],
    badgeColor: 'bg-violet-500',
  },
]

const levelColors: Record<string, string> = {
  Beginner: 'bg-emerald-50 text-emerald-600',
  Intermediate: 'bg-amber-50 text-amber-600',
  Advanced: 'bg-rose-50 text-rose-600',
  Senior: 'bg-violet-50 text-violet-600',
}

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="programs" ref={ref} className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal">
            <span className="section-tag">Program Library</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-2" style={{ transitionDelay: '0.1s' }}>
            World-class programs,{' '}
            <span className="gradient-text">for every team</span>
          </h2>
          <p className="reveal text-gray-500 text-lg mt-4" style={{ transitionDelay: '0.2s' }}>
            Curated in partnership with India's most prestigious academic institutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-10" style={{ transitionDelay: '0.3s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((program, i) => (
            <div
              key={program.title}
              className="reveal card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              {/* Card top accent */}
              <div className="h-1 bg-gradient-to-r from-brand-500 to-cyan-400" />
              
              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-brand-500 mb-1.5">{program.institution}</div>
                    <h3 className="font-display font-bold text-gray-900 text-base leading-snug">{program.title}</h3>
                  </div>
                  {program.badge && (
                    <span className={`shrink-0 text-white text-xs font-bold px-2.5 py-1 rounded-lg ${program.badgeColor}`}>
                      {program.badge}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {program.duration}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${levelColors[program.level]}`}>
                    {program.level}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {program.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-gray-50 text-gray-600 border border-gray-200 px-2.5 py-1 rounded-lg">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-brand-600 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    Request Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal" style={{ transitionDelay: '0.4s' }}>
          <a href="#contact" className="btn-outline text-sm">
            View All 50+ Programs
          </a>
        </div>
      </div>
    </section>
  )
}
