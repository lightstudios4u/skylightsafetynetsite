"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaHardHat,
  FaSolarPanel,
  FaWind,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

type Trade = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
};

type Application = {
  title: string;
  items: string[];
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
      img: "/Roofing_s.webp",
    },
    {
      title: "Solar Installers",
      desc: "Secure skylight openings during system installation and maintenance.",
      icon: <FaSolarPanel size={20} className="text-amber-400" />,
      img: "/solar_s.webp",
    },
    {
      title: "HVAC Contractors",
      desc: "Deploy rapid protection during rooftop service calls and equipment installations without lengthy setup time.",
      icon: <FaWind size={20} className="text-amber-400" />,
      img: "/HVAC2_s.webp",
    },
    {
      title: "Safety Companies",
      desc: "Equip your fleet with documented, reusable protection that supports compliance and simplifies audit trails.",
      icon: <FaHardHat size={20} className="text-amber-400" />,
      img: "/Safety_s.webp",
    },
  ];
  const applications: Application[] = [
    {
      title: "New Construction / Renovation",
      items: [
        "Protect rooftop skylight openings during construction",
        "Maintain fall-through protection during multi-phase builds",
      ],
    },
    {
      title: "Reroof and Replacement",
      items: [
        "Secure skylights during tearoff and installation phases",
        "Protect openings when replacing damaged or aged skylights",
      ],
    },
    {
      title: "Maintenance and Service",
      items: [
        "Deploy protection during rooftop equipment service calls",
        "Secure skylights for inspection and repair work",
      ],
    },
    {
      title: "Multi-Trade Projects",
      items: [
        "Coordinate fall protection when multiple contractors are working on access roofs",
        "Document which trade installed and removed protection",
      ],
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
          className={`text-center text-base font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
        </p> */}
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Designed for the trades that work above
        </h2>
        <p
          className={`mx-auto mt-4 max-w-5xl text-center text-base leading-relaxed text-black/90 animate-fade-in delay-300 px-0 sm:px-4 ${isVisible ? "visible" : ""}`}
        >
          Trusted by commercial roofing contractors, solar installation crews,
          HVAC technicians, general contractors, and safety companies across the
          country. Our{" "}
          <strong>
            Over-Skylight Human Arrest (O.S.H.A.) Skylight Safety Net System
          </strong>{" "}
          is a skylight fall-through protection system engineered specifically
          for crews facing elevated fall-through work hazards every single day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trades.map((t, index) => (
            <div
              key={t.title}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg shadow-black/20 animate-fade-up ${isVisible ? "visible" : ""}`}
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
                  <h3 className="card-title-pop text-base font-bold text-white">
                    {t.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className={`mt-10 overflow-hidden rounded-2xl border border-orange-600/30 bg-black shadow-sm animate-fade-up delay-500 ${isVisible ? "visible" : ""}`}
        >
          <div className="border-b border-orange-600/20 px-6 py-6 sm:px-8">
            <p className="text-lg font-semibold tracking-wide text-orange-400">
              Common Applications
            </p>
          </div>

          <div className="grid gap-px bg-orange-600/20 md:grid-cols-2">
            {applications.map((application) => (
              <div
                key={application.title}
                className="bg-black px-6 py-6 sm:px-8"
              >
                <h3 className="card-title-pop text-base font-bold text-white">
                  {application.title}
                </h3>
                <ul className="mt-4 space-y-3 text-base text-white/80">
                  {application.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FaCheckCircle
                        className="mt-0.5 shrink-0 text-orange-400"
                        size={14}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
