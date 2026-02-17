"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaPlay,
  FaBolt,
  FaBan,
  FaQrcode,
  FaSignInAlt,
} from "react-icons/fa";
import { TrustItem } from "../Shared";
import { useState, useEffect } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-black pointer-events-none" />
        <div className="absolute inset-0 opacity-40 pointer-events-none [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 lg:py-16">
        {/* Row 1: Logo centered on its own */}
        <div
          className={`mb-10 flex justify-center animate-fade-down ${isLoaded ? "visible" : ""}`}
        >
          <img src="/logo.webp" alt="Logo" className="w-64 sm:w-80" />
        </div>

        {/* Row 2: Copy + Image side by side */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <div
              className={`animate-fade-in delay-200 ${isLoaded ? "visible" : ""}`}
              style={{ opacity: isLoaded ? 1 : 0 }}
            >
              <p className="text-base font-bold tracking-widest text-orange-400 italic">
                O.S.H.A. Safety Net System*
              </p>

              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                Skylight Safety
                <br />
                Fall-Through Protection
              </h1>
            </div>

            <div
              className={`mt-8 flex flex-wrap gap-3 animate-fade-up delay-300 ${isLoaded ? "visible" : ""}`}
            >
              <Link
                href="/products-and-services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-2.5 text-sm font-bold text-white/90 transition-colors duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Get a Quote
              </Link>

              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-2.5 text-sm font-bold text-white/90 transition-colors duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Installation Video
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-2.5 text-sm font-bold text-white/90 transition-colors duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Customer Login
              </a>
            </div>

            <p
              className={`mt-6 text-xs text-orange-400/70 italic animate-fade-in delay-400 ${isLoaded ? "visible" : ""}`}
            >
              *Over Skylight Human Arrest Safety Net System
            </p>
          </div>

          {/* Right: Product Image */}
          <div
            className={`animate-fade-up delay-300 ${isLoaded ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              <Image
                src="/wideshot.webp"
                alt="O.S.H.A. Safety Net installed on commercial skylight"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 max-w-6xl">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: <FaBolt className="text-amber-400" size={20} />,
                title: "Fast Install",
                desc: "Minutes, not hours.",
              },
              {
                icon: <FaBan className="text-sky-400" size={20} />,
                title: "Non-Invasive",
                desc: "No drilling. No damage.",
              },
              {
                icon: <FaQrcode className="text-emerald-400" size={20} />,
                title: "QR Compliance",
                desc: "Log installs + inspections.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`animate-fade-up ${isLoaded ? "visible" : ""}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <TrustItem
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  animationDelay={`${1000 + index * 175}ms`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
