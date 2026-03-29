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
        <h3
          className={`mb-4 text-3xl font-black tracking-tight text-black sm:text-4xl lg:whitespace-nowrap lg:text-[2.2rem] animate-fade-in ${isVisible ? "visible" : ""}`}
        >
          Skylights Are &apos;Open Hole&apos; Fall-Through Hazards
        </h3>

        {/* Section intro */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            <div
              className={`mt-4 animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              <div className="rounded-lg bg-black p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="h-5 w-5 shrink-0 text-orange-400 mt-0.5" />
                  <p className="text-base font-semibold text-white">
                    Skimping on skylight safety fall protection for rooftop
                    workers has cost contractors their businesses, their
                    livelihoods, and in some cases their freedom.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              <p className="mt-4 text-base leading-relaxed text-black/80 sm:text-base">
                Under OSHA regulations, a skylight is defined as a{" "}
                <span className="font-semibold text-black">
                  hole in a walking-working surface
                </span>
                . Falls through skylights are one of the leading causes of fatal
                and disabling injuries on commercial roofs.
              </p>

              <p className="mt-3 text-base leading-relaxed text-black/80 sm:text-base">
                Federal injury data shows that{" "}
                <span className="font-semibold text-black">
                  32% of all commercial job-site roof top falls are attributed
                  to unprotected skylights
                </span>{" "}
                &mdash; &ldquo;open hole&rdquo; conditions.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`animate-fade-up delay-200 ${isVisible ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-orange-600/30 shadow-lg">
              <Image
                src="/brokenskylight.webp"
                alt="Damaged skylight showing fall-through risk"
                width={800}
                height={360}
                className="h-[360px] w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Danger badge on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-red-600/90 px-4 py-2 text-base font-bold text-white backdrop-blur-sm shadow-lg">
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
          <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                style={{ animationDelay: "700ms" }}
              >
                <FaExclamationTriangle className="text-red-400" size={20} />
              </div>
              <h4 className="card-title-pop text-xl font-extrabold text-white">
                The Real Risks
              </h4>
            </div>

            {/* The Human Risk */}
            <div className="mb-6">
              <h5 className="card-title-pop font-bold text-white mb-3 border-l-2 border-red-400 pl-3">
                The Human Risk
              </h5>
              <ul className="space-y-3 text-base text-white/80">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-red-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      Catastrophic injury potential:
                    </span>{" "}
                    Falling through unprotected skylights causes severe employee
                    injury or death.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-red-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      Sun-damaged skylights
                    </span>{" "}
                    look solid but easily shatter under a worker&apos;s weight,
                    turning a minor misstep into a catastrophic 40-foot drop
                    onto concrete.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Financial Risk */}
            <div className="mb-6 pt-6 border-t border-white/10">
              <h5 className="card-title-pop font-bold text-white mb-3 border-l-2 border-orange-400 pl-3">
                The Financial Risk
              </h5>
              <ul className="space-y-3 text-base text-white/80">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-orange-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      OSHA Fines Multiply Quickly:
                    </span>{" "}
                    OSHA issues fines per exposed worker, not per skylight. A
                    $20,000 hazard easily becomes a $100,000 penalty for a
                    five-person crew.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-orange-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      The Burden of Proof:
                    </span>{" "}
                    Survive OSHA inspections by keeping strict logs for your
                    skylight protection. Just installing protection isn&apos;t
                    enough, you must prove that it is regularly inspected and
                    maintained.
                  </span>
                </li>
              </ul>
            </div>

            {/* Criminal Liability */}
            <div className="pt-6 border-t border-white/10">
              <h5 className="card-title-pop font-bold text-white mb-3 border-l-2 border-orange-400 pl-3">
                Criminal Liability
              </h5>
              <p className="text-base text-white/80 mb-3">
                When a skylight fall results in a fatality or severe injury, the
                consequences often escalate past OSHA citations.
              </p>
              <ul className="space-y-3 text-base text-white/80">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-orange-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      Jail Time for Leadership:
                    </span>{" "}
                    Managers and site supervisors can be sentenced to prison for
                    a willful failure to protect their workers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-orange-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      Severe Charges:
                    </span>{" "}
                    Repeatedly neglecting basic fall protection can lead to
                    charges of criminal negligence or involuntary manslaughter.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-orange-400">●</span>
                  <span>
                    <span className="font-semibold text-white">
                      No Corporate Shield:
                    </span>{" "}
                    The &quot;corporate veil&quot; does not protect owners from
                    personal liability when prosecutors prove basic,
                    common-sense safety protocols were ignored.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
