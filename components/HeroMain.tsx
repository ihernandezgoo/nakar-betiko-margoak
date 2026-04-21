export default function HeroMain() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-[56%] bg-[#ffd700]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-lg md:aspect-5/4">
          <img
            src="/Pinturas/botes.webp"
            alt="Pintor trabajando"
            className="w-full h-full object-cover"
          />
        </div>

          <div className="relative flex flex-col justify-center rounded-lg bg-[#ffd700]/95 p-5 sm:p-7 md:bg-transparent md:p-2 lg:p-4">
          <svg
            className="pointer-events-none absolute -bottom-2 right-0 opacity-20 w-28 sm:w-32 md:w-36 lg:w-44"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="10,60 60,10 110,60" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="60" width="80" height="50" stroke="currentColor" strokeWidth="2" />
            <rect x="44" y="75" width="22" height="35" stroke="currentColor" strokeWidth="1.5" />
            <rect x="50" y="68" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
          </svg>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-3 sm:mb-4 max-w-[22ch]">
              En Nakar betiko margoak
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-6 max-w-[48ch]">
              Pinturas, lacado de puertas, papeles de todo tipo y mucho mas.
            </p>
            <a
              href="/servicios"
              className="inline-block w-fit bg-[#0f1f35] text-white font-bold px-6 sm:px-7 py-3 text-sm sm:text-base"
            >
              Ver todos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
