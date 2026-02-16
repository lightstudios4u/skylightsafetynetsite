"use client";

import { useEffect, useRef, useState } from "react";

export function Comparison() {
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

  type CompareCol = { title: string; items: string[]; highlight?: boolean };

  const comparison: CompareCol[] = [
    {
      title: "Typical Skylight Nets",
      items: [
        "Generic sizing requires field modifications",
        "No documentation or tracking capability",
        "Unknown UV resistance and service life",
        "No support for fleet management",
      ],
    },
    {
      title: "O.S.H.A. Safety Net System",
      highlight: true,
      items: [
        "Purpose-built for common 4'×8' commercial skylights",
        "QR code system for instant documentation",
        "UV-stabilized materials rated for rooftop exposure",
        "Portable, reusable across multiple jobs",
        "Fleet tracking support for rollouts",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p
          className={`text-center text-sm font-semibold tracking-wide text-orange-500 animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Stop improvising. Start protecting.
        </p>
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Proof Beats Promises
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {comparison.map((col, index) => (
            <div
              key={col.title}
              className={[
                "rounded-3xl border p-6 shadow-sm animate-fade-up",
                col.highlight
                  ? "border-orange-600/30 bg-[#3D2C28]"
                  : "border-gray-700 bg-black/40",
                isVisible ? "visible" : "",
              ].join(" ")}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h3 className="text-lg font-extrabold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-200">
                {col.items.map((item) => (
                  <li key={item} className="flex items-end gap-2">
                    <span
                      className={
                        col.highlight
                          ? "mt-0.5 text-orange-500"
                          : "mt-0.5 text-gray-400"
                      }
                    >
                      ●
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {col.highlight ? (
                <div className="mt-6 rounded-2xl border border-orange-600/30 bg-orange-500/20 p-4">
                  <p className="text-sm font-semibold text-white">
                    Purpose-built sizing. Rapid install. Documented compliance.
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    The system is designed to be obvious on the roof and
                    defendable in an audit.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-gray-700 bg-black/60 p-4">
                  <p className="text-sm font-semibold text-gray-200">
                    Generic solutions leave gaps in protection and
                    documentation.
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Without standardized sizing and tracking, compliance becomes
                    guesswork.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
