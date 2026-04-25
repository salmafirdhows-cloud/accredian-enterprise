'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Enterprises Served', sublabel: 'Across 20+ industries' },
  { value: 94, suffix: '%', label: 'Completion Rate', sublabel: 'Industry-leading retention' },
  { value: 60, suffix: '%', label: 'Avg Salary Hike', sublabel: 'Reported by alumni' },
  { value: 50000, suffix: '+', label: 'Learners Upskilled', sublabel: 'And counting' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count.toString()

  return (
    <span ref={ref}>
      {target >= 1000 ? formatted : count}
      {suffix}
    </span>
  )
}

export default function Stats() {
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-brand-900 via-brand-700 to-indigo-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal font-display text-4xl sm:text-5xl font-bold text-white">
            Impact that speaks for itself
          </h2>
          <p className="reveal text-indigo-200 text-lg mt-3" style={{ transitionDelay: '0.1s' }}>
            Numbers from real enterprise deployments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="font-display text-5xl sm:text-6xl font-bold text-white mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-lg">{stat.label}</div>
              <div className="text-indigo-300 text-sm mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
