import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Features from '@/app/components/Features'
import InstantOutput from '@/app/components/InstantOutput'
import DiveIntoDetails from '@/app/components/DiveIntoDetails'
import EmpowerPeople from '@/app/components/EmpowerPeople'
import Testimonials from '@/app/components/Testimonials'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import CTA from '@/app/components/CTA'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* White bg */}
        <Hero />

        {/* Cream bg */}
        <Features />

        {/* Cream bg */}
        <InstantOutput />

        {/* White bg */}
        <DiveIntoDetails />

        {/* Cream bg */}
        <EmpowerPeople />

        {/* White bg */}
        <Testimonials />

        {/* White bg */}
        <Pricing />

        {/* White bg */}
        <FAQ />

        {/* White bg */}
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
