"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  projectTitle?: string
  showProjectInfo?: boolean
}

export default function ContactForm({ projectTitle, showProjectInfo = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, project: projectTitle })
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="w-full">
      {showProjectInfo && projectTitle && (
        <div className="mb-6 p-4 bg-foreground/5 border border-foreground/10 rounded-lg">
          <p className="text-sm text-muted-foreground">Consultando sobre:</p>
          <p className="text-lg font-semibold text-foreground">{projectTitle}</p>
        </div>
      )}

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900">¡Mensaje enviado!</p>
            <p className="text-sm text-green-800">Nos pondremos en contacto pronto.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  )
}
