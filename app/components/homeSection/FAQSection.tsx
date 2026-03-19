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
      { threshold: 0.15, rootMargin: "50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#c0652c" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p
          className={`text-center text-base font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Common installation questions
        </p>
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Questions, Answered
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className={`rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm animate-fade-up delay-300 ${isVisible ? "visible" : ""}`}
          >
            <Accordion items={faqs} />
          </div>

          <div
            className={`rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-extrabold text-white">
              Need deeper details?
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              The detailed page includes what&#39;s included, QR logging
              workflows, and a simple comparison for safety managers and audits.
            </p>
            <Link
              href="/products-and-services"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-black/80"
            >
              View Details <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
