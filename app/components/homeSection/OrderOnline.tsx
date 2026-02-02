"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaQrcode,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export function OrderOnline() {
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
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#c0652c" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="mx-auto max-w-3xl">
          {/* Attention badge */}
          <div
            className={`mb-4 flex justify-center animate-fade-down ${isVisible ? "visible" : ""}`}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full border-2 border-orange-600/40 bg-black/20 px-5 py-1.5 shadow-lg backdrop-blur-sm ${isVisible ? "animate-badge-wiggle" : ""}`}
            >
              <style jsx>{`
                @keyframes badge-wiggle {
                  0%,
                  100% {
                    transform: scale(1) rotate(0deg);
                  }
                  25% {
                    transform: scale(1.05) rotate(-1deg);
                  }
                  50% {
                    transform: scale(1.08) rotate(1deg);
                  }
                  75% {
                    transform: scale(1.05) rotate(-1deg);
                  }
                }
                .animate-badge-wiggle {
                  animation: badge-wiggle 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
                }
              `}</style>
              <div className="h-2 w-2 animate-pulse rounded-full bg-orange-600" />
              <span className="text-xs font-bold tracking-wide text-black">
                LIMITED TIME: FREE SHIPPING ON ORDERS 10+
              </span>
            </div>
          </div>

          <div
            className={`rounded-3xl border-2 border-orange-600/30 bg-[#3D2C28] p-8 shadow-2xl backdrop-blur-sm animate-fade-up delay-200 ${isVisible ? "visible" : ""}`}
          >
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <FaShieldAlt
                  className="text-orange-500 drop-shadow-lg"
                  size={40}
                />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Order Your Skylight Safety Kit
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
                Purpose-built for 4&lsquo; × 8&lsquo; commercial skylights.
                Ships ready to deploy with everything included.
              </p>

              {/* Price highlight */}
              <div className="mx-auto mt-6 inline-flex items-baseline gap-3 rounded-2xl border border-orange-600/50 bg-orange-500/20 px-6 py-3 shadow-lg">
                <span className="text-2xl font-extrabold text-white">$299</span>
                <span className="text-sm text-white/80">per kit</span>
                <span className="ml-2 rounded-full bg-orange-600/30 px-2.5 py-0.5 text-xs font-bold text-white">
                  Volume discounts
                </span>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/products-and-services"
                  className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-2xl shadow-black/50 transition-all duration-200 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400"
                >
                  <FaArrowRight
                    className="mr-2 transition-transform duration-200 group-hover:translate-x-1"
                    size={18}
                  />
                  Order Now
                </Link>

                <a
                  href="#bulk"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-orange-600/40 bg-black/20 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/30"
                >
                  View Bulk Pricing
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-orange-600/30 pt-6 sm:grid-cols-3">
                <div className="flex flex-col items-center gap-1.5">
                  <FaCheckCircle className="text-orange-500" size={20} />
                  <span className="text-xs font-semibold text-white">
                    Ships Within 48 Hours
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <FaQrcode className="text-orange-500" size={20} />
                  <span className="text-xs font-semibold text-white">
                    QR Tracking Included
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <FaBolt className="text-orange-500" size={20} />
                  <span className="text-xs font-semibold text-white">
                    Volume Discounts
                  </span>
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600/20 px-5 py-2 backdrop-blur-sm">
                <FaShieldAlt className="text-orange-500" size={16} />
                <span className="text-xs font-semibold text-white">
                  30-Day Satisfaction Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
