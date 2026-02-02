import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
        <p
          className={`text-center text-sm font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Documentation you can defend
        </p>
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Four Ways QR Tracking Protects Your Business
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qrWays.map((x, index) => (
            <div
              key={x.title}
              className={`rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm card-hover cursor-pointer animate-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + index * 75}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/20">
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
          className={`mt-10 grid gap-6 lg:grid-cols-2 animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-white">
              Sample inspection log
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Your records should look clean, organized, and exportable when
              project owners, auditors, or insurance carriers ask.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-orange-600/30">
              <div className="grid grid-cols-3 bg-black/40 px-4 py-3 text-xs font-semibold text-gray-200">
                <div>Date</div>
                <div>Event</div>
                <div>By</div>
              </div>
              {[
                { d: "01/07", e: "Installed", b: "C. Rivera" },
                { d: "01/09", e: "Inspection", b: "C. Rivera" },
                { d: "01/12", e: "Inspection", b: "J. Kim" },
                { d: "01/14", e: "Removed", b: "J. Kim" },
              ].map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-4 py-3 text-xs text-white/80"
                >
                  <div>{r.d}</div>
                  <div>{r.e}</div>
                  <div>{r.b}</div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-white/60">
              Note: export/share formats (CSV/PDF) can be a phase 2 feature.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-white">
              From install to audit-ready
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              When an inspector arrives, &ldquo;we always use protection&rdquo;
              isn&apos;t a system. QR logs are.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-5">
                <div className="flex items-center gap-2">
                  <FaClipboardList className="text-orange-400" />
                  <p className="text-sm font-semibold text-white">
                    Timestamped records
                  </p>
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Every scan creates a time-stamped, structured record tied to
                  that net.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-600/30 bg-black/40 p-5">
                <div className="flex items-center gap-2">
                  <FaFileExport className="text-orange-500" />
                  <p className="text-sm font-semibold text-white">
                    Exportable history
                  </p>
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Give safety managers and clients the documentation they ask
                  for without scrambling.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/products-and-services/#qr"
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/80"
              >
                QR Workflow Details <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
