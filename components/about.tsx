"use client"

import { useEffect, useState } from "react"
import { Lightbulb, Leaf, Users, Cog } from "lucide-react"

export default function About() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Lightbulb,
      title: "Diseño Personalizado",
      description: "Cada proyecto es único y adaptado a las necesidades específicas de nuestros clientes.",
    },
    {
      icon: Leaf,
      title: "Arquitectura Sostenible",
      description: "Integramos soluciones ecológicas para reducir el impacto ambiental.",
    },
    {
      icon: Users,
      title: "Equipo Multidisciplinario",
      description: "Contamos con arquitectos, diseñadores e ingenieros especializados.",
    },
    {
      icon: Cog,
      title: "Gestión Integral",
      description: "Nos encargamos de todas las fases del proyecto, desde el diseño hasta la ejecución.",
    },
  ]

  return (
    <section id="about" className="relative py-16 px-4 overflow-hidden">
      {/* Background parallax layers */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background"
        style={{
          transform: `translateY(${(offset - 600) * 0.15}px)`,
        }}
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 600) * 0.2}px) translateX(${Math.sin((offset - 600) * 0.01) * 40}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos un estudio de arquitectura en Getafe con años de experiencia diseñando proyectos innovadores y
            sostenibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
