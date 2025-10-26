"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
