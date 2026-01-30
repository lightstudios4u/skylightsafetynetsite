"use client";

import { FaShieldAlt } from "react-icons/fa";
import { useTypewriter } from "@/app/utils/typewriter";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    console.log(isVisible);

    return () => observer.disconnect();
  }, [isVisible]);

  const typewriterText = useTypewriter(
    isVisible ? "The risk is real." : "",
    { speed: 200 }
  );

  const isTypewriterComplete = typewriterText === "The risk is real.";

  return (
    <section id="risk-framing" ref={sectionRef} style={{ backgroundColor: "#fc8337" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p
              className="text-sm font-semibold tracking-wide text-black transition-all duration-700 ease-out"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(-50px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Skylights are fall-through hazards
            </p>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-black sm:text-4xl">
              {typewriterText}
              <span
                className="transition-opacity duration-1500"
                style={{ opacity: isTypewriterComplete ? 1 : 0 }}
              >
                <br></br> The fix shouldn&lsquo;t be complicated.
              </span>
            </h3>
            <div
              className="transition-opacity duration-2000"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <p className="mt-4 text-sm leading-relaxed text-black/80">
                Commercial skylights create dangerous openings on rooftops where
                crews do critical work. Unprotected glazing becomes a high-risk
                fall-through zone—serious injury, liability exposure, citations,
                delays.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-black">
                {[
                  "Catastrophic injury potential from fall-through incidents",
                  "Compliance exposure (citations/fines) from inadequate protection",
                  "Documentation gaps when inspectors arrive",
                  "Project delays when safety equipment isn't ready",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-0.5 text-orange-600">●</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-orange-600/30 bg-[#3D2C28] p-5">
                <p className="text-sm font-semibold text-white">
                  Every unprotected skylight is a liability waiting to happen.
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Proper protection costs a fraction of what one incident costs.
                </p>
              </div>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-3xl border border-orange-600/30 shadow-sm transition-opacity duration-2000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            <img
              src="/brokenskylight.png"
              alt="Commercial roof work"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
