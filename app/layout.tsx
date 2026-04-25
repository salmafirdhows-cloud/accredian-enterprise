import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce at Scale',
  description: 'Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics.',
  keywords: 'enterprise learning, corporate training, upskilling, IIT, IIM, data science, product management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
