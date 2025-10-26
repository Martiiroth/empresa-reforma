"use client"

import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-7d0LmuZ2CZT8p7K0wJCBL8nc0gxPaY.jpeg')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Animated particles/shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
            Transformación Arquitectónica
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 text-balance leading-tight">
          Transformamos Ideas en <span className="text-primary">Espacios Extraordinarios</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-8 text-balance font-light max-w-3xl mx-auto leading-relaxed">
          Arquitectura innovadora y sostenible para proyectos residenciales, comerciales e industriales. Diseñamos espacios que inspiran, funcionan y perduran.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            Comenzar Proyecto
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("portfolio")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-all"
          >
            Ver Proyectos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  )
}
