export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-xl mb-4">NAKAR</h3>
          <p className="text-gray-400">Especialistas en pintura y acabados de calidad.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Empresa</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/nuestra-historia" className="hover:text-white">Nuestra historia</a></li>
            <li><a href="/equipo" className="hover:text-white">Equipo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Proyectos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/portafolio" className="hover:text-white">Portafolio</a></li>
            <li><a href="/casos-de-estudio" className="hover:text-white">Casos de estudio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="tel:+34123456789" className="hover:text-white">TEL: +34 123 456 789</a></li>
            <li><a href="mailto:info@empresa-pinturas.com" className="hover:text-white">info@nakar.es</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} NAKAR Betiko Margoak. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
