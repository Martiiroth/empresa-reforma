"use client"

import { useEffect, useState } from "react"

export default function Stats() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: '50+', label: 'Proyectos' },
    { number: '15+', label: 'Años de Exp.' },
    { number: '200+', label: 'Clientes' },
    { number: '100%', label: 'Satisfacción' },
  ]

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />
      
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 800) * 0.1}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
