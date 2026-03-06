"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaHardHat, FaSolarPanel, FaWind, FaBuilding } from "react-icons/fa";

type Trade = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
};

export function WhoItsFor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);
  const trades: Trade[] = [
    {
      title: "Roofers",
      desc: "Protect crews during tearoff, installation, and maintenance on roofs with standard polycarbonate skylights.",
      icon: <FaBuilding size={20} className="text-amber-400" />,
      img: "/Roofing.webp",
    },
    {
      title: "Solar Installers",
      desc: "Secure skylight openings during system installation and maintenance.",
      icon: <FaSolarPanel size={20} className="text-amber-400" />,
      img: "/solar2.webp",
    },
    {
      title: "HVAC Contractors",
      desc: "Deploy rapid protection during rooftop service calls and equipment installations without lengthy setup time.",
      icon: <FaWind size={20} className="text-amber-400" />,
      img: "/HVAC2.webp",
    },
    {
      title: "Safety Companies",
      desc: "Equip your fleet with documented, reusable protection that supports compliance and simplifies audit trails.",
      icon: <FaHardHat size={20} className="text-amber-400" />,
      img: "/Safety.webp",
    },
  ];

  return (
    <section
      id="who-its-for"
      ref={sectionRef}
      style={{ backgroundColor: "#c0652c" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* <p
          className={`text-center text-sm font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
        </p> */}
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Designed for the trades that work above
        </h2>
        <p
          className={`mx-auto mt-4 max-w-4xl text-center text-base leading-relaxed text-black/90 animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
        >
          Trusted by commercial roofing contractors, solar installation crews,
          HVAC technicians, general contractors, and safety companies across the
          country. Our Over-Skylight Human Arrest (O.S.H.A.) Safety Net System
          is a fall-through protection system engineered specifically for crews
          facing elevated fall-through work hazards every single day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trades.map((t, index) => (
            <div
              key={t.title}
              className={`overflow-hidden rounded-xl bg-[#3D2C28] shadow-sm animate-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${400 + index * 75}ms` }}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gray-500/10 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                    style={{ animationDelay: `${500 + index * 150}ms` }}
                  >
                    {t.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{t.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
