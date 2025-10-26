"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Services() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "Diseño y planificación",
      description: "Creamos planos detallados para optimizar funcionalidad y estética.",
      image: "/service-diseno.jpg",
    },
    {
      title: "Reformas y rehabilitación",
      description: "Modernizamos espacios manteniendo su esencia y mejorando su eficiencia.",
      image: "/service-reformas.jpg",
    },
    {
      title: "Dirección de obra",
      description: "Supervisamos cada etapa de la construcción para garantizar calidad y cumplimiento de plazos.",
      image: "/service-direccion.jpg",
    },
    {
      title: "Licencias y legalización",
      description: "Gestionamos permisos y documentación técnica para agilizar proyectos.",
      image: "/service-licencias.jpg",
    },
  ]

  return (
    <section id="services" className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-foreground/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 2400) * 0.15}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance mt-4">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones arquitectónicas para todo tipo de proyectos en Getafe y alrededores.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8 bg-background">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}