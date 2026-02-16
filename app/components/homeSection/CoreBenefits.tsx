"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaShieldAlt, FaBolt, FaQrcode } from "react-icons/fa";

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
      title: "Purpose-Built Sizing",
      desc: "Engineered for 4'\u00d78' commercial skylights. Eliminates expensive railings that impede workflow.",
      bullets: [
        "Precise fit for standard skylights",
        "High-visibility safety orange mesh",
        "UV-stabilized for extended outdoor use",
      ],
      img: "/net.png",
      icon: <FaShieldAlt size={18} className="text-orange-500" />,
    },
    {
      title: "Fast Strap-On Install",
      desc: "Secure the O.S.H.A. Safety Net in minutes using heavy-duty ratchet straps. No tools, no penetrations.",
      bullets: [
        "Two-person install in under 2 minutes",
        "Works with curb or self-flashing units",
        "Moves from site to site quickly",
      ],
      img: "/maninstall.png",
      icon: <FaBolt size={18} className="text-orange-500" />,
    },
    {
      title: "QR Inspection Logs",
      desc: "Every net includes a unique QR code label. One scan logs installs, inspections, and compliance.",
      bullets: [
        "Instant digital documentation",
        "Track by net, job site, and crew",
        "Real-time inventory tracking",
      ],
      img: "/qr.png",
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
        <p
          className={`text-center text-sm font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Built for speed, strength, and accountability
        </p>
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Three Pain Points. One Kit.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {features.map((f, index) => (
            <div
              key={f.title}
              className={`flex flex-col overflow-hidden rounded-3xl border border-orange-600/30 bg-[#3D2C28] shadow-sm animate-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-500/20">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
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
                <div className="overflow-hidden rounded-2xl bg-black">
                  <img
                    src={f.img}
                    alt=""
                    className="h-52 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 flex justify-center animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <Link
            href="/products-and-services"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/80"
          >
            Specs + QR Details <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
