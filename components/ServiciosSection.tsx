import { JSX } from "react";
import { FaPaintBrush, FaPalette, FaHome } from "react-icons/fa";

interface Servicio {
  icon: JSX.Element;
  titulo: string;
  descripcion: string;
}

const servicios: Servicio[] = [
  {
    icon: <FaPaintBrush className="text-gray-800" />,
    titulo: "Pintura Interior",
    descripcion: "Acabados de calidad para interiores residenciales y comerciales con atención al detalle."
  },
  {
    icon: <FaHome className="text-gray-800" />,
    titulo: "Pintura Exterior",
    descripcion: "Protección duradera y acabados resistentes para fachadas y estructuras exteriores."
  },
  {
    icon: <FaPalette className="text-gray-800" />,
    titulo: "Acabados Especiales",
    descripcion: "Lacados, papeles pintados y tratamientos decorativos personalizados."
  }
];

export default function ServiciosSection() {
  return (
    <section className="pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center w-full">Nuestros Servicios</h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl">
          {servicios.map((servicio) => (
            <div key={servicio.titulo} className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-lg flex flex-col items-center h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ffd700] rounded-lg mb-4 flex items-center justify-center text-xl sm:text-2xl">{servicio.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-center">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}