import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaClipboardList, FaFileExport } from "react-icons/fa";

type QRWay = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export function QRProof({ qrWays }: { qrWays: QRWay[] }) {
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
      style={{ backgroundColor: "#fc8337" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero area with image */}
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
              Proof Beats Promises
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Documentation You Can Defend
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/80 sm:text-base">
              When an OSHA or insurance inspector arrives on site or an incident
              occurs, the O.S.H.A. Skylight Safety Net System provides
              verifiable records that prove what was in place, when it was
              installed, who checked it, and what condition it was in.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/80 sm:text-base">
              Our QR tracking system creates that documented proof
              automatically. QR scans generate timestamped, location-tagged
              records that stand up to scrutiny.
            </p>
          </div>

          <div
            className={`animate-fade-up delay-300 ${isVisible ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-orange-600/30 shadow-lg">
              <Image
                src="/QRlady_s.webp"
                alt="Worker scanning QR code for safety documentation"
                width={800}
                height={500}
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <h3
          className={`mt-12 text-center text-2xl font-extrabold tracking-tight text-black animate-fade-in delay-400 ${isVisible ? "visible" : ""}`}
        >
          Four Ways QR Tracking Protects Your Business
        </h3>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qrWays.map((x, index) => (
            <div
              key={x.title}
              className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
                {x.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {x.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-white">
              Sample inspection log
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Your records should look clean, organized, and exportable when
              project owners, auditors, or insurance carriers ask.
            </p>

            <div className="mt-5 overflow-hidden rounded-lg border border-orange-600/30">
              <div className="grid grid-cols-5 bg-black/40 px-4 py-3 text-xs font-semibold text-gray-200">
                <div>Date</div>
                <div>Site</div>
                <div>Inspector</div>
                <div>Condition</div>
                <div>Notes</div>
              </div>
              {[
                {
                  d: "11/14/2024",
                  s: "Warehouse Dist. A",
                  i: "J. Martinez",
                  c: "Good",
                  n: "Pre-use check, straps secure",
                },
                {
                  d: "11/07/2024",
                  s: "Warehouse Dist. A",
                  i: "J. Martinez",
                  c: "Good",
                  n: "Weekly inspection, no damage",
                },
                {
                  d: "10/31/2024",
                  s: "Warehouse Dist. A",
                  i: "M. Thompson",
                  c: "Good",
                  n: "Initial installation, skylight 4",
                },
                {
                  d: "10/23/2024",
                  s: "Commerce Center",
                  i: "R. Chen",
                  c: "Good",
                  n: "Removal after reroof completion",
                },
                {
                  d: "10/16/2024",
                  s: "Commerce Center",
                  i: "R. Chen",
                  c: "Good",
                  n: "Mid-project inspection",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 px-4 py-3 text-xs text-white/80"
                >
                  <div>{r.d}</div>
                  <div>{r.s}</div>
                  <div>{r.i}</div>
                  <div>{r.c}</div>
                  <div>{r.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
