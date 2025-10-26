"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [offset, setOffset] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Carlos García López",
      role: "CEO, Constructora García",
      content: "Trabajar con Ofara Arquitectura fue transformador. Su enfoque innovador y atención al detalle resultó en un proyecto que superó todas nuestras expectativas.",
      image: "/avatar-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "María Rodríguez Pérez",
      role: "Directora General, Inmobiliaria España",
      content: "El equipo de Ofara no solo diseña espacios, crea experiencias. Su compromiso con la sostenibilidad es ejemplar y visible en cada proyecto.",
      image: "/avatar-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Juan Martínez Silva",
      role: "Propietario, Centro Comercial La Plaza",
      content: "Desde la consulta inicial hasta la entrega final, el equipo fue profesional, transparente y siempre disponible. Totalmente recomendados.",
      image: "/avatar-3.jpg",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />

      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 3200) * 0.15}px)`,
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 3200) * 0.2}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            ⭐ Lo que Dicen Nuestros Clientes
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance mt-4">
            Testimonios de Clientes Satisfechos
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-8 bg-card rounded-xl border transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Proyectos Completados' },
              { number: '200+', label: 'Clientes Felices' },
              { number: '15+', label: 'Años de Experiencia' },
              { number: '99%', label: 'Tasa de Satisfacción' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para transformar tu proyecto?
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50">
            Empezar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}