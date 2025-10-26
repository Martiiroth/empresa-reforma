"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const [offset, setOffset] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Reforma Chalet Moderna",
      category: "Chalet",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
      description: "Reforma integral de chalet con ampliación de superficie y diseño contemporáneo",
      year: "2024",
      location: "Getafe",
    },
    {
      id: 2,
      title: "Reforma Piso Centro",
      category: "Piso",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de piso en el centro urbano con optimización de espacios",
      year: "2024",
      location: "Getafe",
    },
    {
      id: 3,
      title: "Reforma Adosado Familiar",
      category: "Adosado",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=85",
      description: "Reforma completa de adosado con nueva distribución y acabados premium",
      year: "2023",
      location: "Getafe",
    },
    {
      id: 4,
      title: "Reforma Chalet con Piscina",
      category: "Chalet",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de chalet con construcción de piscina y zona exterior",
      year: "2023",
      location: "Getafe",
    },
    {
      id: 5,
      title: "Reforma Piso Moderno",
      category: "Piso",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&q=85",
      description: "Reforma de piso con distribución abierta y materiales de calidad",
      year: "2024",
      location: "Getafe",
    },
    {
      id: 6,
      title: "Reforma Adosado Luxe",
      category: "Adosado",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=1200&h=800&fit=crop",
      description: "Reforma de adosado con acabados de lujo y domótica integrada",
      year: "2023",
      location: "Getafe",
    },
  ]

  const categories = ["Todos", "Chalet", "Piso", "Adosado"]

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="relative py-16 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />
      
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 1400) * 0.15}px)`,
        }}
      />
      
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(offset - 1400) * 0.2}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Proyectos Destacados
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance mt-4">
            Portfolio de Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros proyectos más destacados en arquitectura residencial, comercial e industrial.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/proyectos/${project.id}`}
              className="group overflow-hidden rounded-xl border border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-black text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{project.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Old masonry code to remove */}
        {/* Removed - using uniform grid instead */}
      </div>
    </section>
  )
}
