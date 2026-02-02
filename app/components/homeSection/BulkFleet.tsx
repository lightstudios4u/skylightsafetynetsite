"use client";

import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { Stat } from "../Shared";
import { useEffect, useRef, useState } from "react";

export function BulkFleet() {
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
    <section id="bulk" ref={sectionRef} className="relative bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p
              className={`text-sm font-semibold tracking-wide text-orange-500 animate-fade-down ${isVisible ? "visible" : ""}`}
            >
              Outfitting your fleet?
            </p>
            <h2
              className={`mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
            >
              Standardize Protection Across Crews
            </h2>
            <p
              className={`mt-3 max-w-xl text-sm leading-relaxed text-gray-200 animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              We work with safety companies and large contractors to deploy
              standardized protection across multiple crews and projects. Get
              volume pricing and rollout support.
            </p>

            <div
              className={`mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-gray-700 bg-black/40 p-6 animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
            >
              <Stat label="Standard size" value="4' × 8'" />
              <Stat label="Typical install" value="< 5 min" />
              <Stat label="Roof penetration" value="None" />
              <Stat label="QR tracking" value="Included" />
            </div>
          </div>

          <div
            className={`rounded-3xl border border-gray-700 bg-black/40 p-6 shadow-xl animate-fade-up delay-500 ${isVisible ? "visible" : ""}`}
          >
            <h3 className="text-lg font-extrabold text-white">
              Talk to us about fleet rollouts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-200">
              Send crew count + typical job types and we&lsquo;ll respond with
              pricing, lead times, and documentation details.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
              >
                <FaEnvelope className="mr-2" size={16} />
                Request Bulk Pricing
              </a>

              <Link
                href="/products-and-specs.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-black/60 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/80"
              >
                View Spec Sheet <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
