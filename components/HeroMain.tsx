export default function HeroMain() {
  return (
    <section className="relative flex items-center min-h-85 py-4 ml-80 mr-80">
      {/* Panel amarillo a la derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-[62%] bg-[#ffd700]" />

      {/* Contenedor flex */}
      <div className="relative z-10 w-full px-3 md:px-6 flex items-center gap-2">
        {/* Imagen izquierda - superpuesta */}
        <div className="relative w-[50%] h-[50%]">
          <img
            src="/Pinturas/botes.webp"
            alt="Pintor trabajando"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto derecha encima del panel amarillo */}
        <div className="relative w-[60%] flex flex-col justify-center px-4 md:px-8 overflow-hidden">
          {/* SVG decorativo fondo */}
          <svg
            className="absolute bottom-4 right-6 opacity-25 w-32 md:w-40"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="10,60 60,10 110,60" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="60" width="80" height="50" stroke="currentColor" strokeWidth="2" />
            <rect x="44" y="75" width="22" height="35" stroke="currentColor" strokeWidth="1.5" />
            <rect x="50" y="68" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-3 pr-8">
            En Nakar betiko margoak
          </h2>
          <p className="text-base md:text-lg text-gray-900 mb-6">
            Pinturas, lacado de puertas, papeles de todo tipo y mucho más.
          </p>
          <a href="/servicios" className="inline-block bg-[#0f1f35] text-white font-bold px-7 py-3 text-base w-fit">
            Ver todos
          </a>
        </div>
      </div>
    </section>
  );
}
