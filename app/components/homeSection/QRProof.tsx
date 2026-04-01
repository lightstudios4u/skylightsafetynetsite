import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaQrcode,
  FaClipboardCheck,
  FaFileAlt,
  FaFingerprint,
  FaBroadcastTower,
  FaExclamationTriangle,
  FaProjectDiagram,
  FaHandPointer,
} from "react-icons/fa";

const fieldFeatures = [
  {
    icon: <FaQrcode className="text-orange-500" size={22} />,
    title: "Scan & Go",
    desc: "Every net has a QR code providing a unique identifier and allows workers to easily access instructions for proper net use.",
  },
  {
    icon: <FaClipboardCheck className="text-orange-500" size={22} />,
    title: "Rapid Inspections",
    desc: "Complete digital checklists for OSHA required in-place weekly net inspections.",
  },
  {
    icon: <FaFileAlt className="text-orange-500" size={22} />,
    title: "Instant Reporting",
    desc: "Log installations, damage, or fall arrest events with a single tap.",
  },
  {
    icon: <FaFingerprint className="text-orange-500" size={22} />,
    title: "Digital Audit Trail",
    desc: "Every scan is timestamped and signed, creating a permanent record.",
  },
];

const officeFeatures = [
  {
    icon: <FaBroadcastTower className="text-orange-500" size={22} />,
    title: "Live Inventory",
    desc: 'Track total nets, active projects, and gear "Out of Service" at a glance.',
  },
  {
    icon: <FaExclamationTriangle className="text-orange-500" size={22} />,
    title: "Compliance Alerts",
    desc: "Automated warnings for overdue inspections and expiring equipment.",
  },
  {
    icon: <FaProjectDiagram className="text-orange-500" size={22} />,
    title: "Project Tracking",
    desc: "View specific site data — know exactly what is installed and where.",
  },
  {
    icon: <FaHandPointer className="text-orange-500" size={22} />,
    title: "Audit-Ready Reports",
    desc: "One-click CSV exports to prove compliance during safety inspections.",
  },
];

export function QRProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Hero area */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
          <div
            className={`animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">SMART COMPLIANCE.</span>
              <span className="block text-orange-500">ZERO PAPERWORK.</span>
            </h2>
            <p className="mx-auto mt-4 text-2xl font-bold uppercase tracking-[0.2em] text-orange-500/80">
              The SkylightSafety.net Management Platform
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              OSHA regulations require regular safety net inspections, we make
              this record keeping effortless. Our integrated QR-code system
              bridges the gap between your field crew and the front office,
              ensuring your site stays compliant and your team stays safe.
            </p>
          </div>

          {/* Devices image */}
          <div
            className={`mx-auto mt-10 max-w-2xl animate-fade-up delay-300 ${isVisible ? "visible" : ""}`}
          >
            <Image
              src="/devices.png"
              alt="SkylightSafety.net platform shown on phone and desktop"
              width={800}
              height={467}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Two-column feature grid */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div
          className={`grid gap-8 lg:grid-cols-2 animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
        >
          {/* In the Field */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/20 overflow-hidden flex flex-col">
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                In the Field:
              </h3>
              <p className="text-xl font-black tracking-tight text-orange-500 sm:text-2xl">
                Mobile Efficiency
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/60">
                Empower your crew to document safety in seconds using our
                intuitive mobile app.
              </p>
            </div>
            <div className="relative h-56 sm:h-72 w-full mt-6">
              <Image
                src="/manscan.webp"
                alt="Worker scanning QR code in the field"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
            <div className="px-8 pt-8 pb-8">
              <div className="space-y-6">
                {fieldFeatures.map((f, i) => (
                  <div
                    key={f.title}
                    className={`flex items-start gap-4 animate-fade-up ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${500 + i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/15">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold uppercase tracking-wide text-orange-500">
                        {f.title}
                      </h4>
                      <p className="mt-1 text-base leading-relaxed text-white/65">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* In the Office */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/20 overflow-hidden flex flex-col">
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                In the Office:
              </h3>
              <p className="text-xl font-black tracking-tight text-orange-500 sm:text-2xl">
                Total Oversight
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/60">
                Manage your inventory and liability from a single, real-time
                desktop dashboard.
              </p>
            </div>
            <div className="relative h-56 sm:h-72 w-full mt-6">
              <Image
                src="/installQR.webp"
                alt="Installation QR tracking on desktop"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-8 pt-8 pb-8">
              <div className="space-y-6">
                {officeFeatures.map((f, i) => (
                  <div
                    key={f.title}
                    className={`flex items-start gap-4 animate-fade-up ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${500 + i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/15">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold uppercase tracking-wide text-orange-500">
                        {f.title}
                      </h4>
                      <p className="mt-1 text-base leading-relaxed text-white/65">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          className={`pb-10 border-b border-white/10 pt-10 text-center animate-fade-in delay-600 ${isVisible ? "visible" : ""}`}
        >
          <p className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
            Protect Your Crew.{" "}
            <span className="text-orange-500">Prove Your Compliance.</span>
          </p>
          <p className="mt-1 text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
            Manage Your Investment.
          </p>
        </div>
      </div>
    </section>
  );
}
