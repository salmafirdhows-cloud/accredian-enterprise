# Accredian Enterprise — Partial Clone

A pixel-faithful partial clone of [enterprise.accredian.com](https://enterprise.accredian.com), built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

**Live Demo:** _[Deploy to Vercel and update this link]_  
**Repository:** _[Add your GitHub URL here]_

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments.

---

## 🏗️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── globals.css          # Global styles, Tailwind, CSS variables
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Homepage (assembles all sections)
│   └── api/
│       └── leads/
│           └── route.ts     # POST /api/leads — lead capture endpoint
│
├── components/
│   ├── Navbar.tsx           # Sticky nav, scroll effect, mobile menu
│   ├── Hero.tsx             # Hero with live dashboard card
│   ├── Platform.tsx         # 8-feature OS grid
│   ├── HowItWorks.tsx       # 4-step process section
│   ├── Stats.tsx            # Animated count-up impact numbers
│   ├── Programs.tsx         # Filterable program card grid
│   ├── Partners.tsx         # University + tech partner logos
│   ├── Testimonials.tsx     # Auto-rotating testimonial carousel
│   ├── LeadForm.tsx         # Lead capture form with API call
│   └── Footer.tsx           # Multi-column footer
│
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🎯 Approach Taken

### 1. Reference Analysis
I couldn't directly scrape the live site, so I gathered reference content from Google search snippets, cached versions, and related Vercel deployments to understand the site's:
- Key value propositions (university partnerships, analytics, mentorship)
- Section structure (Hero → Platform → Programs → Partners → Testimonials → Contact)
- Brand voice and copy patterns

### 2. Component Architecture
- **Server Components** by default (layout, page)
- **Client Components** (`'use client'`) only where hooks or browser APIs are needed
- Every section is a self-contained component — easy to reorder, replace, or extend
- Shared utility classes defined in `globals.css` (`btn-primary`, `section-tag`, `card-hover`, `reveal`)

### 3. Scroll Animations
Custom `IntersectionObserver` in each section triggers a `.reveal → .visible` CSS transition — no animation library needed, keeping the bundle lean.

### 4. Responsive Design
- Mobile-first Tailwind classes throughout
- Navbar collapses to hamburger menu on mobile
- Grid layouts shift from 4-col → 2-col → 1-col responsively
- Dashboard card hidden on mobile (visible lg+)

### 5. Lead Capture (Bonus)
- `LeadForm.tsx` POSTs to `/api/leads` (Next.js Route Handler)
- API validates required fields + email format
- Stores in memory + optionally persists to `/tmp/leads.json`
- Swap the storage layer with Prisma/MongoDB/Supabase for production

---

## 🤖 AI Usage Explanation

AI (Claude) was used in the following ways:

| Area | What AI Did | What I Reviewed/Modified |
|------|------------|--------------------------|
| **Component scaffolding** | Generated initial structure for all 9 components | Reviewed prop types, adjusted layout logic |
| **Copy & content** | Suggested headings, descriptions, CTA text | Aligned with actual Accredian brand voice from search results |
| **Tailwind classes** | Suggested utility combinations for cards, badges | Tweaked spacing, colors, hover states for visual polish |
| **API route** | Generated the Route Handler boilerplate | Added proper error handling, email validation, logging |
| **Scroll animations** | Suggested IntersectionObserver pattern | Extracted to reusable `.reveal` CSS class pattern |
| **CountUp component** | Initial animation logic | Fixed edge cases for large numbers (50K+ formatting) |

**What was built/improved manually:**
- Visual hierarchy decisions (which sections come first, sizing ratios)
- Color palette refinement (brand indigo + cyan accent)
- The animated dashboard card in the Hero section
- Category filter logic in Programs
- Auto-rotating testimonial carousel with dot navigation
- Mobile menu open/close state management
- Form validation UX (disabled state, loading spinner, success screen)

---

## ⚡ Improvements With More Time

### Technical
- [ ] **Database integration** — Connect lead form to PostgreSQL via Prisma or Supabase
- [ ] **Auth-protected lead dashboard** — `/admin` route to view all submissions
- [ ] **Email notifications** — Send confirmation to user + notification to sales via Resend/SendGrid
- [ ] **CMS integration** — Pull programs/testimonials from Contentful or Sanity
- [ ] **Testing** — Jest + React Testing Library for component tests; Playwright for E2E
- [ ] **Analytics** — Integrate Posthog or Mixpanel to track CTA clicks and form conversion

### UI/UX
- [ ] **Pixel-perfect fidelity** — Direct access to the live site for exact font sizes, spacing, images
- [ ] **Real university logos** — Replace text abbreviations with actual SVG/PNG logos
- [ ] **Video section** — Embed a product demo or testimonial video
- [ ] **Pricing page** — Dedicated enterprise pricing page with tier comparison table
- [ ] **Blog/Resources** — SEO-optimized content section
- [ ] **Chat widget** — Intercom or Crisp for live enterprise inquiries

### Performance
- [ ] **Image optimization** — Replace emoji/text logos with next/image optimized assets
- [ ] **Font subsetting** — Only load used character ranges for Sora + DM Sans
- [ ] **Edge caching** — Add `Cache-Control` headers on the leads API

---

## 📦 Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 (App Router) | SSR, file-based routing, API routes in one repo |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Rapid utility-first styling, easy responsive design |
| Fonts | Sora + DM Sans (Google Fonts) | Distinctive display font + clean body font |
| Deployment | Vercel | Zero-config Next.js hosting |
| API | Next.js Route Handlers | Built-in, no separate Express server needed |

---

## 📬 Submission

- **Live Link:** _https://your-deployment.vercel.app_
- **GitHub:** _https://github.com/your-username/accredian-enterprise_
- **Submission Form:** [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeC-GbWRJNCY5ja3nFV8a2G4ChP4Ar_7lMZSbLAtcKRP0oJ2Q/viewform)
