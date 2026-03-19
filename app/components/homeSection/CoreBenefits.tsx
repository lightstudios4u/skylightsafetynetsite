"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaQrcode,
  FaRulerCombined,
} from "react-icons/fa";

type Feature = {
  title: string;
  desc: string;
  bullets?: string[];
  img: string;
  icon?: React.ReactNode;
};

export function CoreBenefits() {
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
  const features: Feature[] = [
    {
      title: "Purpose-Built - Lightweight",
      desc: "O.S.H.A. Safety Nets are engineered for the most common 4'x8' commercial skylights. Eliminate heavy workflow impeding railings that are cumbersome to move and work around.",
      bullets: [
        "Precise fit for standard skylights",
        "Installs above the roof on skylight curb",
        "UV-stabilized for extended outdoor use",
      ],
      img: "/product/lightweight.webp",
      icon: <FaRulerCombined size={18} className="text-orange-500" />,
    },
    {
      title: "Fast Install",
      desc: "Secure the O.S.H.A. Safety Net in minutes using heavy-duty ratchet straps. No tools, no penetrations, no complicated assembly required.",
      bullets: [
        "Two person crew installation in under 2 minutes",
        "Works with standard skylight counterflashing on curb mounted or self-flashing skylight units",
        "Moves from site to site quickly",
      ],
      img: "/product/install.webp",
      icon: <FaBolt size={18} className="text-orange-500" />,
    },
    {
      title: "QR Inspection Logs",
      desc: "Every O.S.H.A. Safety Net includes a unique QR code label. One scan registers installation, logs inspections, and creates an auditable record that proves contractor is in compliance.",
      bullets: [
        "Instant digital documentation",
        "Track by net and job site",
        "Exportable inspection history",
        "Track inventory in real time",
      ],
      img: "/product/qrscan.webp",
      icon: <FaQrcode size={18} className="text-orange-500" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#c0652c" }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Built for Speed, Strength, and Accountability
        </h2>
        <br />
        <p
          className={`text-center text-lg tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Our
          <span className="font-bold">
            {" "}
            Over-Skylight Human Arrest (O.S.H.A.) Safety Net System{" "}
          </span>{" "}
          is designed to fit 4&apos; x 8&apos; commercial rooftop skylights and
          eliminates the three biggest pain points contractors face: bulky or
          heavy safety systems, time-consuming installation, and missing safety
          documentationwhen you need it most.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {features.map((f, index) => (
            <div
              key={f.title}
              className={`flex flex-col overflow-hidden rounded-xl border border-orange-600/30 bg-[#3D2C28] shadow-sm animate-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                    style={{ animationDelay: `${500 + index * 150}ms` }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="card-title-pop text-lg font-bold text-white">
                    {f.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {f.desc}
                </p>

                {f.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <FaCheckCircle
                          className="mt-0.5 shrink-0 text-orange-400"
                          size={14}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="px-6 pb-6">
                <div className="relative h-52 w-full overflow-hidden rounded-lg bg-black">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`object-cover ${f.img === "/product/lightweight.webp" ? "object-[50%_35%]" : ""}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Protect Crews CTA Banner */}
        <div
          className={`mt-10 mx-auto max-w-5xl rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 text-center shadow-lg animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <h3 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-white sm:text-3xl">
            <FaShieldAlt className="shrink-0 text-orange-400" size={28} />
            Protect Crews and Prove It to OSHA With One Scan
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-white/80">
            Purpose-built sizing. Rapid installation. Documented compliance. The
            O.S.H.A. Safety Net System gives commercial contractors everything
            they need to secure skylight openings for worker fall protection and
            create easily accessable and auditable safety records. One quick
            scan at installation, and removal. Record weely inspection with one
            click.
          </p>
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-orange-600"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
