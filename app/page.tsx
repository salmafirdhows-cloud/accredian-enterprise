import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Platform from '@/components/Platform'
import Programs from '@/components/Programs'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platform />
        <HowItWorks />
        <Stats />
        <Programs />
        <Partners />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
