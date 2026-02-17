"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaExclamationTriangle,
  FaFileAlt,
  FaDollarSign,
  FaGavel,
  FaShieldAlt,
} from "react-icons/fa";

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
              Skylights are &lsquo;open hole&rsquo; fall-through hazards
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

        {/* Risk Categories Grid */}
        <div
          className={`mt-12 grid gap-6 lg:grid-cols-3 animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
        >
          {/* The Human Risk */}
          <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                style={{ animationDelay: "700ms" }}
              >
                <FaExclamationTriangle className="text-red-400" size={20} />
              </div>
              <h4 className="text-lg font-extrabold text-white">
                The Human Risk
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="mt-0.5 text-red-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Catastrophic injury potential:
                  </span>{" "}
                  Falls through skylights result in severe injuries or
                  fatalities when workers step on or fall into unprotected
                  rooftop skylight glazing
                </span>
              </li>
            </ul>
          </div>

          {/* The Financial Risk */}
          <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                style={{ animationDelay: "900ms" }}
              >
                <FaDollarSign className="text-orange-400" size={20} />
              </div>
              <h4 className="text-lg font-extrabold text-white">
                The Financial Risk
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Compliance violations:
                  </span>{" "}
                  OSHA citations and fines for inadequate fall protection at
                  skylight openings
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Significant fines:
                  </span>{" "}
                  OSHA does not issue one fine per skylight. It issues fines{" "}
                  <span className="text-white font-semibold">
                    per employee exposed
                  </span>{" "}
                  to the hazard. A $20,000 fine for one employee becomes
                  $100,000 for a crew of five.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-400">●</span>
                <span>
                  <span className="font-semibold text-white">
                    Documentation gaps:
                  </span>{" "}
                  During an OSHA inspection, contractors must prove not only
                  that the skylight was protected, but that the protection
                  itself was inspected and maintained.
                </span>
              </li>
            </ul>
          </div>

          {/* Criminal Liability */}
          <div className="rounded-xl border border-red-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                style={{ animationDelay: "1100ms" }}
              >
                <FaGavel className="text-red-400" size={20} />
              </div>
              <h4 className="text-lg font-extrabold text-white">
                Criminal Liability
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              When a skylight fall results in serious injury or death, the
              consequences can escalate beyond fines.
            </p>
            <ul className="mt-3 space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="mt-0.5 text-red-400">●</span>
                <span>
                  Company owners and supervisors have been{" "}
                  <span className="font-semibold text-white">
                    criminally charged and sentenced to jail
                  </span>{" "}
                  for failing to provide required fall protection around
                  skylights.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-red-400">●</span>
                <span>
                  Courts have ruled that repeated or willful failure to protect
                  workers can rise to{" "}
                  <span className="font-semibold text-white">
                    criminal negligence or involuntary manslaughter
                  </span>
                  .
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-red-400">●</span>
                <span>
                  The &ldquo;corporate veil&rdquo; does not protect owners when
                  prosecutors determine that basic, well-known safety
                  requirements were ignored.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-10 mx-auto max-w-3xl animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-lg bg-[#3D2C28] p-6 shadow-lg">
            <div className="flex items-start gap-3">
              <FaExclamationTriangle className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Saving a few minutes or a few dollars on skylight protection
                  has cost contractors their businesses, their livelihoods, and
                  in some cases, their freedom.
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Every unprotected skylight is a liability waiting to happen.
                  Proper protection costs a fraction of what one incident costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
