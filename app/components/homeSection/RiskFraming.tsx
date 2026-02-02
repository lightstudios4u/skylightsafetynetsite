"use client";

import { useTypewriter } from "@/app/utils/typewriter";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaExclamationTriangle,
  FaFileAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const riskItems = [
  {
    icon: FaExclamationTriangle,
    text: "Catastrophic injury potential from fall-through incidents",
    highlight: "Catastrophic injury",
  },
  {
    icon: FaShieldAlt,
    text: "Compliance exposure (citations/fines) from inadequate protection",
    highlight: "Compliance exposure",
  },
  {
    icon: FaFileAlt,
    text: "Documentation gaps when inspectors arrive",
    highlight: "Documentation gaps",
  },
  {
    icon: FaClock,
    text: "Project delays when safety equipment isn't ready",
    highlight: "Project delays",
  },
];

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

  const typewriterText = useTypewriter(isVisible ? "The risk is real." : "", {
    speed: 150,
  });

  const isTypewriterComplete = typewriterText === "The risk is real.";

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <p
              className={`text-sm font-semibold tracking-wide text-black/80 animate-fade-down ${isVisible ? "visible" : ""}`}
            >
              Skylights are fall-through hazards
            </p>

            <h3 className="mt-3 text-3xl tracking-tight text-black sm:text-4xl">
              <span className="font-black">{typewriterText}</span>
              <span
                className={`font-black animate-fade-in ${isTypewriterComplete ? "visible" : ""}`}
              >
                <br />
                The fix shouldn&lsquo;t be complicated.
              </span>
            </h3>

            <div
              className={`animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              <p className="mt-4 text-sm leading-relaxed text-black/80 sm:text-base">
                Commercial skylights create dangerous openings on rooftops where
                crews do critical work. Unprotected glazing becomes a{" "}
                <span className="font-semibold text-black">
                  high-risk fall-through zone
                </span>
                —serious injury, liability exposure, citations, delays.
              </p>

              {/* Risk items with icons */}
              <ul className="mt-6 space-y-3">
                {riskItems.map((item, index) => (
                  <li
                    key={item.text}
                    className={`group flex items-center gap-3 animate-fade-up delay-${(index + 1) * 100} ${isVisible ? "visible" : ""}`}
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-700/80 text-white">
                      <item.icon className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-black">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Callout box */}
              <div className="mt-8 rounded-2xl bg-[#3D2C28] p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Every unprotected skylight is a liability waiting to
                      happen.
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Proper protection costs a fraction of what one incident
                      costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`animate-fade-up delay-200 ${isVisible ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-orange-600/30 shadow-lg">
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
      </div>
    </section>
  );
}
