/* eslint-disable @next/next/no-img-element */
"use client";

import Nav from "@/components/CardNav";
import { FaPaintBrush, FaPalette, FaHome } from "react-icons/fa";
import ServiciosSection from "@/components/ServiciosSection";
import HeroMain from "@/components/HeroMain";
import Footer from "@/components/Footer";
import GaleriaTrabajos from "@/components/GaleriaTrabajos";
import CtaPresupuesto from "@/components/CtaPresupuesto";

export default function Home() {
  const items = [
    {
      label: "Empresa",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Nuestra historia", ariaLabel: "Nuestra historia", href: "/nuestra-historia" },
        { label: "Equipo", ariaLabel: "Nuestro equipo", href: "/equipo" },
      ]
    },
    {
      label: "Proyectos",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Portafolio", ariaLabel: "Portafolio de proyectos", href: "/portafolio" },
        { label: "Casos de Estudio", ariaLabel: "Casos de estudio", href: "/casos-de-estudio" }
      ]
    },
    {
      label: "Contacto",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Solicitar presupuesto", ariaLabel: "Solicitar presupuesto", href: "/solicitar-presupuesto" },
        { label: "Teléfono", ariaLabel: "Llámanos", href: "tel:+34123456789" },
        { label: "Correo", ariaLabel: "Envíanos un correo", href: "mailto:info@empresa-pinturas.com" }
      ]
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Nav
          text="NAKAR Margoak"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>

      <main className="bg-white pt-24 md:pt-32">
        <HeroMain />

        <ServiciosSection />

        <GaleriaTrabajos />

        <CtaPresupuesto />

        <Footer />
      </main>
    </>
  );
}