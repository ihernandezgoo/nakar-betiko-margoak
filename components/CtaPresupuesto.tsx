export default function CtaPresupuesto() {
  return (
    <section className="bg-[#ffd700] py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">¿Necesitas un presupuesto?</h2>
      <p className="text-lg text-gray-800 mb-8">Contacta con nosotros y obtén una consulta gratuita</p>
      <a href="/solicitar-presupuesto" className="inline-block bg-[#0f1f35] text-white font-bold px-10 py-4 text-lg">
        Solicitar presupuesto
      </a>
    </section>
  );
}
