export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">OFARA</h3>
            <p className="text-sm opacity-75">Transformamos ideas en espacios funcionales y estéticos.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Diseño Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Proyectos Comerciales
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Soluciones Industriales
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Ofara Arquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
