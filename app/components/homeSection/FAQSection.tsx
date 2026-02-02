"use client";

import Link from "next/link";
import { Accordion, FAQ } from "../Shared";
import { useEffect, useRef, useState } from "react";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
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

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="faq" ref={sectionRef} className="relative" style={{ backgroundColor: "#c0652c" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p
          className="text-center text-sm font-semibold tracking-wide text-black transition-all duration-500 ease-out"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Common installation questions
        </p>
        <h2
          className="mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl transition-opacity duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "500ms",
          }}
        >
          Questions, Answered
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className={`rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm ${
              isVisible ? "translate-y-0" : "translate-y-[30px]"
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
              transitionDelay: "1400ms",
            }}
          >
            <Accordion items={faqs} />
          </div>

          <div
            className={`rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm ${
              isVisible ? "translate-y-0" : "translate-y-[30px]"
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
              transitionDelay: "1500ms",
            }}
          >
            <h3 className="text-lg font-extrabold text-white">
              Need deeper details?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              The detailed page includes what&#39;s included, QR logging
              workflows, and a simple comparison for safety managers and
              audits.
            </p>
            <Link
              href="/products-and-services"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/80"
            >
              View Details <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
