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
        <div className="absolute inset-0 opacity-30 pointer-events-none [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(253,81,1,0.30),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-6 lg:py-10">
        {/* Row 1: Logo centered on its own */}
        {/* <div
          className={`mb-10 flex justify-center animate-fade-down ${isLoaded ? "visible" : ""}`}
        >
          <Image src="/logo.webp" alt="Logo" width={320} height={160} className="w-64 sm:w-80" />
        </div> */}

        {/* Dramatic animated heading */}
        <div className="mb-8 text-center">
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fd5101] leading-tight [-webkit-text-stroke:0.6px_rgba(255,255,255,0.45)]">
            {/* Invisible full text to reserve space and prevent layout shift */}
            <span className="block invisible" aria-hidden="true">
              Over Skylight Human Arrest
            </span>
            <span className="block invisible" aria-hidden="true">
              Skylight Safety Net System
            </span>
            {/* Visible typewriter text overlaid */}
            <span className="absolute inset-0 flex flex-col">
              <span className="block">{line1 || "\u00A0"}</span>
              <span className="block">{line2 || "\u00A0"}</span>
            </span>
          </h2>
        </div>

        {/* Hero image with overlaid text */}
        <div className="w-full flex justify-center">
          <div
            className={`animate-fade-up delay-200 ${isLoaded ? "visible" : ""}`}
          >
            {/* Large product image */}
            <Image
              src="/heroimagevignette.webp"
              alt="O.S.H.A. Safety Net installed on commercial skylight"
              width={1200}
              height={400}
              className="rounded-md shadow-2xl w-[92vw] sm:w-[75vw] lg:w-[50vw] max-w-[900px] h-auto"
              priority
            />
          </div>
        </div>

        <div
          className={`mt-6 animate-fade-in delay-300 ${isLoaded ? "visible" : ""}`}
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <div className="flex w-full flex-col items-center gap-4 text-center">
            <h1 className="hero-title-pop text-2xl w-full sm:text-4xl lg:text-[2.0rem] lg:whitespace-nowrap font-extrabold text-white leading-[1.15] drop-shadow-lg">
              Skylight Safety
              <br className="sm:hidden" /> Fall-Through Protection
            </h1>

            <Link
              href="#contact"
              className="inline-flex w-fit items-center justify-center rounded-md bg-[#fd5101] px-4 py-2 text-lg font-bold text-white shadow-2xl shadow-[#fd5101]/30 transition-colors duration-200 hover:bg-[#e44901]"
            >
              Get a Quote
            </Link>
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
