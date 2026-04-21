interface Proyecto {
  img: string;
  alt: string;
  titulo: string;
}

const proyectos: Proyecto[] = [
  {
    img: "/Proyectos/Gallery-1.jpeg",
    alt: "Proyecto 1",
    titulo: "Proyecto Interior - Sala"
  },
  {
    img: "/Proyectos/Gallery-2.jpeg",
    alt: "Proyecto 2",
    titulo: "Proyecto Interior - Dormitorio"
  },
  {
    img: "/Proyectos/Gallery-3.jpeg",
    alt: "Proyecto 3",
    titulo: "Acabados Especiales - Bares"
  },
  {
    img: "/Proyectos/Gallery-4.jpeg",
    alt: "Proyecto 4",
    titulo: "Reforma Completa"
  },
  {
    img: "/Proyectos/Gallery-5.jpeg",
    alt: "Proyecto 5",
    titulo: "Proyecto Interior - Dormitorio"
  },
  {
    img: "/Proyectos/Gallery-6.jpeg",
    alt: "Proyecto 6",
    titulo: "Proyecto Interior - Cocina"
  }
];

export default function GaleriaTrabajos() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Proyectos Recientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {proyectos.map((proyecto, idx) => (
          <div key={proyecto.titulo + idx} className="relative group overflow-hidden rounded-lg h-56 sm:h-60 md:h-64 bg-gray-300">
            <img src={proyecto.img} alt={proyecto.alt} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-bold">{proyecto.titulo}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <a href="/proyectos" className="inline-block bg-[#0f1f35] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
          Ver todos los proyectos
        </a>
      </div>
    </section>
  );
}
