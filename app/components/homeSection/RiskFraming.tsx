"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";

export function RiskFraming() {
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

  return (
    <section
      id="risk-framing"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#fc8337" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Section intro */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <h3
              className={`text-3xl font-black tracking-tight text-black sm:text-4xl animate-fade-in ${isVisible ? "visible" : ""}`}
            >
              Skylights Are Fall-Through Hazards
            </h3>

            <div
              className={`animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              <p className="mt-4 text-sm leading-relaxed text-black/80 sm:text-base">
                Under OSHA regulations, a skylight is legally defined as a{" "}
                <span className="font-semibold text-black">
                  hole in a walking-working surface
                </span>
                . Falls through skylights are one of the leading causes of fatal
                and disabling injuries on commercial roofs. Federal injury data
                shows that{" "}
                <span className="font-semibold text-black">
                  25% of all falls through surfaces are caused by skylights
                </span>{" "}
                and these incidents are often fatal.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-black/80 sm:text-base">
                Plastic, polycarbonate, and fiberglass domes degrade under UV
                exposure and become brittle. Stepping, tripping, or backing into
                a skylight can result in a sudden fall of{" "}
                <span className="font-semibold text-black">
                  20, 30, or even 40+ feet to a concrete surface below
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`animate-fade-up delay-200 ${isVisible ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-orange-600/30 shadow-lg">
              <Image
                src="/brokenskylight.png"
                alt="Damaged skylight showing fall-through risk"
                width={800}
                height={360}
                className="h-[360px] w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Danger badge on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-red-600/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm shadow-lg">
                <FaExclamationTriangle className="h-4 w-4" />
                Unprotected hazard
              </div>
            </div>
          </div>
        </div>

        {/* The Real Risks */}
        <div
          className={`mt-12 mx-auto max-w-4xl animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                style={{ animationDelay: "700ms" }}
              >
                <FaExclamationTriangle className="text-red-400" size={20} />
              </div>
              <h4 className="text-xl font-extrabold text-white">
                The Real Risks
              </h4>
            </div>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="mt-0.5 text-red-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Catastrophic injury potential:
                  </span>{" "}
                  Falls through skylights result in severe injuries or
                  fatalities when workers step on or near unprotected glazing
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Compliance violations:
                  </span>{" "}
                  OSHA citations and fines for inadequate fall protection at
                  skylight openings during commercial roofing and construction
                  work
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Documentation gaps:
                  </span>{" "}
                  Unable to prove protective measures were in place when
                  inspectors arrive or incidents occur
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Project delays:
                  </span>{" "}
                  Work stoppages when safety equipment isn&apos;t readily
                  available or properly installed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-10 mx-auto max-w-4xl animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-lg bg-[#3D2C28] p-6 shadow-lg">
            <div className="flex items-start gap-3">
              <FaExclamationTriangle className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
              <p className="text-sm font-semibold text-white">
                Every unprotected skylight is a liability waiting to happen. The
                cost of proper protection is minimal compared to the
                consequences of a fall-through incident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
