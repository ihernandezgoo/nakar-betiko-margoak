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
    <section className="pt-16 pb-6 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center w-full">Nuestros Servicios</h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {servicios.map((servicio) => (
            <div key={servicio.titulo} className="bg-gray-50 p-8 rounded-lg flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ffd700] rounded-lg mb-4 flex items-center justify-center text-2xl">{servicio.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{servicio.titulo}</h3>
              <p className="text-gray-600 text-center">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}