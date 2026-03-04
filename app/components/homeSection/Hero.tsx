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
import { useTypewriter } from "../../utils/typewriter";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const line1 = useTypewriter("Over Skylight Human Arrest", {
    speed: 200,
    delay: 800,
  });
  const line2 = useTypewriter("Skylight Safety Net System", {
    speed: 200,
    delay: 2000,
  });

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
        {/* <div
          className={`mb-10 flex justify-center animate-fade-down ${isLoaded ? "visible" : ""}`}
        >
          <img src="/logo.webp" alt="Logo" className="w-64 sm:w-80" />
        </div> */}

        {/* Dramatic animated heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-tight">
            <span className="block">
              {line1
                ? line1.split(" ").map((word, i) => (
                    <span key={i}>
                      {i > 0 && " "}
                      <span className="underline decoration-2 underline-offset-4">
                        {word[0]}
                      </span>
                      {word.slice(1)}
                    </span>
                  ))
                : "\u00A0"}
            </span>
            <span className="block">{line2 || "\u00A0"}</span>
          </h2>
        </div>

        {/* Hero image with overlaid text */}
        <div className="w-full flex justify-center">
          <div
            className={`relative overflow-hidden border border-white/10 shadow-2xl h-[250px] sm:h-[300px] lg:h-[320px] w-full max-w-[900px] animate-fade-up delay-200 ${isLoaded ? "visible" : ""}`}
          >
            {/* Large product image */}
            <Image
              src="/heroproduct2.webp"
              alt="O.S.H.A. Safety Net installed on commercial skylight"
              fill
              className="object-cover scale-120 translate-x-21 -translate-y-8"
              priority
            />

            {/* Gradient overlay — narrow left strip only */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 via-30% to-transparent to-50%" />

            {/* Text content overlaid on left edge */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-12 max-w-md lg:max-w-lg">
              <div
                className={`animate-fade-in delay-300 ${isLoaded ? "visible" : ""}`}
                style={{ opacity: isLoaded ? 1 : 0 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] drop-shadow-lg">
                  Skylight Fall Protection
                  <br />
                  <span className="text-orange-400">Made Simple</span>
                </h1>
              </div>

              <div
                className={`mt-5 flex flex-wrap gap-2 animate-fade-up delay-400 ${isLoaded ? "visible" : ""}`}
              >
                <Link
                  href="/products-and-services"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/30 transition-colors duration-200 hover:bg-orange-600"
                >
                  Get a Quote
                </Link>

                <a
                  href="#video"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold text-white transition-colors duration-200 hover:bg-white/20 hover:border-white/60"
                >
                  Installation Video
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold text-white transition-colors duration-200 hover:bg-white/20 hover:border-white/60"
                >
                  Customer Login
                </a>
              </div>
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
