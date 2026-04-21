export default function CtaPresupuesto() {
  return (
    <section className="bg-[#ffd700] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">¿Necesitas un presupuesto?</h2>
      <p className="text-base sm:text-lg text-gray-800 mb-7 sm:mb-8">Contacta con nosotros y obten una consulta gratuita</p>
      <a href="/solicitar-presupuesto" className="inline-block bg-[#0f1f35] text-white font-bold px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm sm:text-base md:text-lg">
        Solicitar presupuesto
      </a>
    </section>
  );
}
