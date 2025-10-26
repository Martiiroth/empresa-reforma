"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const projects = [
    {
      id: 1,
      title: "Reforma Chalet Moderna",
      category: "Chalet",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
      description: "Reforma integral de chalet con ampliación de superficie y diseño contemporáneo",
      year: "2024",
      location: "Getafe",
      details: "Reforma completa de un chalet de 180m² con ampliación de 40m² en la zona de salón. Se realizó una redistribución total de espacios para crear un ambiente más moderno y funcional.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra"],
      materials: "Materiales de primera calidad: suelos de porcelánico, pintura ecológica, carpintería de madera maciza",
      duration: "4 meses",
      team: "Equipo de 6 profesionales especializados",
      highlights: [
        "Ampliación de 40m² bien aprovechados",
        "Nuevo sistema de climatización eficiente",
        "Acabados premium en todas las zonas",
        "Certificación energética mejorada"
      ],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=85",
      ]
    },
    {
      id: 2,
      title: "Reforma Piso Centro",
      category: "Piso",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de piso en el centro urbano con optimización de espacios",
      year: "2024",
      location: "Getafe",
      details: "Reforma moderna de un piso de 95m² en pleno centro. Se optimizaron los espacios para crear una vivienda abierta, luminosa y funcional.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra"],
      materials: "Suelos de porcelánico rectificado, cocina integrada, baños con acabados de lujo",
      duration: "2.5 meses",
      team: "Equipo de 4 profesionales",
      highlights: [
        "Plano abierto moderno",
        "Iluminación natural maximizada",
        "Cocina de diseño integrada",
        "Acabados minimalistas y elegantes"
      ],
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=85",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&q=85",
      ]
    },
    {
      id: 3,
      title: "Reforma Adosado Familiar",
      category: "Adosado",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
      description: "Reforma completa de adosado con nueva distribución y acabados premium",
      year: "2023",
      location: "Getafe",
      details: "Reforma integral de adosado en zona residencial. Se replanteó completamente la distribución interior para crear espacios más funcionales y modernos.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra", "Licencias y legalización"],
      materials: "Acabados de alta calidad, sistemas domotizados, iluminación LED personalizada",
      duration: "3 meses",
      team: "Equipo de 5 profesionales",
      highlights: [
        "Nueva distribución optimizada",
        "Sistema domotizado completo",
        "Zona exterior reformada",
        "Certificación de obra nueva"
      ],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
        "https://images.unsplash.com/photo-1600566753086-00541ca9bc23?w=1200&h=800&fit=crop&q=85",
      ]
    },
    {
      id: 4,
      title: "Reforma Chalet con Piscina",
      category: "Chalet",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de chalet con construcción de piscina y zona exterior",
      year: "2023",
      location: "Getafe",
      details: "Reforma extensiva de chalet con ampliación de 60m² y construcción de piscina con zona de relax. Proyecto integral que incluye paisajismo profesional.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra"],
      materials: "Piscina de hormigón revestida, solería exterior antideslizante, pergola bioclimática",
      duration: "5 meses",
      team: "Equipo de 8 profesionales + especialistas",
      highlights: [
        "Piscina de 30m² con sistema de climatización",
        "Ampliación de 60m² con terraza",
        "Paisajismo profesional",
        "Zona de estar exterior completa"
      ],
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=85",
      ]
    },
    {
      id: 5,
      title: "Reforma Piso Moderno",
      category: "Piso",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de piso con distribución abierta y materiales de calidad",
      year: "2024",
      location: "Getafe",
      details: "Reforma moderna de piso de 120m² con distribución abierta. Diseño contemporáneo con acabados de lujo en todas las áreas.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra"],
      materials: "Suelos de mármol, cocina con electrodomésticos premium, baños con diseño italiano",
      duration: "3 meses",
      team: "Equipo de 5 profesionales",
      highlights: [
        "Distribución abierta y luminosa",
        "Cocina premium integrada",
        "Baños de diseño italiano",
        "Acabados contemporáneos"
      ],
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&q=85",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=85",
      ]
    },
    {
      id: 6,
      title: "Reforma Adosado Luxe",
      category: "Adosado",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=1200&h=800&fit=crop",
      description: "Reforma de adosado con acabados de lujo y domótica integrada",
      year: "2023",
      location: "Getafe",
      details: "Reforma de lujo de adosado con sistemas domotizados de última generación. Proyecto premium con acabados de alta gama en todas las áreas.",
      services: ["Diseño y planificación", "Reformas y rehabilitación", "Dirección de obra", "Licencias y legalización"],
      materials: "Acabados de lujo, domótica Philips Hue, ascensor interior, suelos de mármol Carrara",
      duration: "4 meses",
      team: "Equipo de 7 profesionales especialistas",
      highlights: [
        "Sistema domotizado completo Philips Hue",
        "Ascensor interior panorámico",
        "Suelos de mármol Carrara pulido",
        "Acabados de lujo en todas las zonas",
        "Certificación de edificio de lujo"
      ],
      images: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00541ca9bc23?w=1200&h=800&fit=crop&q=85",
      ]
    },
  ]

  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all"
          >
            Volver
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h1 className="text-2xl font-bold text-foreground">{project.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {project.images.map((image, idx) => (
            <div key={idx} className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={`${project.title} - Imagen ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-foreground mb-6">{project.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {project.details}
            </p>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Servicios incluidos</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-foreground/5 rounded-lg border border-foreground/10"
                  >
                    <div className="w-2 h-2 bg-foreground rounded-full" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Aspectos destacados</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 h-fit">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-200 text-black text-sm font-semibold rounded-full">
                {project.category}
              </span>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Ubicación</p>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin size={18} />
                  <span>{project.location}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Año de finalización</p>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar size={18} />
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="border-t border-foreground/10 pt-6">
                <p className="text-sm text-muted-foreground mb-2">Duración del proyecto</p>
                <p className="text-foreground font-semibold">{project.duration}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Equipo</p>
                <p className="text-foreground">{project.team}</p>
              </div>

              <div className="border-t border-foreground/10 pt-6">
                <p className="text-sm text-muted-foreground mb-2">Materiales</p>
                <p className="text-foreground text-sm leading-relaxed">{project.materials}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative py-16 px-4 -mx-4 bg-foreground/5 border-y border-foreground/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ponte en Contacto</h2>
            </div>

            <div className="max-w-2xl">
              <ContactForm projectTitle={project.title} showProjectInfo={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
