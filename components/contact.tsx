"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "info@ofaraarquitectura.es", link: "mailto:info@ofaraarquitectura.es" },
    { icon: Phone, title: "Teléfono", value: "+34 91 XXX XXXX", link: "tel:+34911234567" },
    { icon: MapPin, title: "Ubicación", value: "Getafe, Madrid", link: "#" },
  ]

  return (
    <section id="contact" className="relative py-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 4400) * 0.15}px)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 4400) * 0.2}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Ponte en Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance mt-4">
            Comencemos tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.link}
                className="group flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.value}</p>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity mt-4 text-primary" />
              </a>
            )
          })}
        </div>

        {/* Main Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+34 91 XXX XXXX"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                  Cuéntanos sobre tu Proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe tu proyecto, presupuesto, timeline, etc..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
              >
                Enviar Solicitud
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-700">
                  <CheckCircle size={20} />
                  <span>¡Gracias! Tu mensaje ha sido enviado correctamente.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Por Qué Contactarnos?</h3>
              <ul className="space-y-4">
                {[
                  "Consulta gratuita y sin compromiso",
                  "Respuesta rápida en 24 horas",
                  "Equipo profesional y experiencia",
                  "Proyectos personalizados",
                  "Disponibilidad flexible",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "24h", label: "Respuesta" },
                { number: "100%", label: "Satisfacción" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
