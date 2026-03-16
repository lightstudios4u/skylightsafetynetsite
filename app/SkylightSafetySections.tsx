// SkylightSafetySections.tsx
// Drop into a Next.js/React project. Tailwind required.
"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

type Step = {
  num: string;
  title: string;
  desc: string;
  img: string;
};

type Feature = {
  title: string;
  desc: string;
  img: string;
};

type FAQ = {
  q: string;
  a: string;
};

export default function SkylightSafetySections() {
  const steps: Step[] = useMemo(
    () => [
      {
        num: "01",
        title: "Strap It On",
        desc: `Position the net over the skylight and secure using the included ratchet strap system.  No tools, no penetrations, no complex rigging.`,
        img: "https://images.unsplash.com/photo-1581579185169-7b2571b6f3b0?auto=format&fit=crop&w=800&q=80",
      },
      {
        num: "02",
        title: "Scan the QR Code",
        desc: "Use any smartphone to scan the unique QR label on your net. Register the installation location, date, and responsible crew member in seconds.",
        img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=80",
      },
      {
        num: "03",
        title: "Log and Redeploy",
        desc: "Track inspections throughout the job. When the project is complete, remove the net, scan to log removal, return to inventory and redeploy it at your next site.",
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
      },
    ],
    [],
  );

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Purpose-Built Sizing",
        desc: "Engineered for common 4' × 8' commercial skylights for a precise, visible safety fit.",
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Fast Strap-On Install",
        desc: "Installs in minutes using heavy-duty ratchet straps. No tools, no roof penetration.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "QR Inspection Logs",
        desc: "Each net includes a unique QR code for registration, inspection tracking, and auditable compliance records.",
        img: "https://images.unsplash.com/photo-1581579185169-7b2571b6f3b0?auto=format&fit=crop&w=800&q=80",
      },
    ],
    [],
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How long does installation take?",
        a: "A two-person crew can install a net in under 5 minutes. Removal is equally fast, making it practical for short-duration work or jobs where skylights need protection during specific phases.",
      },
      {
        q: "Do I need special tools?",
        a: "No. Installation uses a ratchet strap system designed for rapid strap-on setup without drills, fasteners, or roof penetrations.",
      },
      {
        q: "Can I move it from job to job?",
        a: "Yes. The system is designed to be removed, logged, and redeployed across sites, with QR-based records to keep compliance documentation clean and consistent.",
      },
    ],
    [],
  );

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-slate-950" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-400">
                Safety at any height
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Skylight Safety Net System
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
                A purpose-built 4&apos; × 8&apos; skylight safety net designed
                for fast installation and documented compliance on commercial
                job sites.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#request"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Request Information
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#working-plan"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  How it Works
                </a>
              </div>

              {/* Trust bullets */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <TrustItem title="Fast Install" desc="Installs in minutes." />
                <TrustItem
                  title="Zero Penetration"
                  desc="No drilling. No damage."
                />
                <TrustItem
                  title="QR Compliance"
                  desc="Digital inspection logs."
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-xl bg-orange-500/20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative h-[360px] sm:h-[420px] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=80"
                  alt="Worker installing skylight protection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING PLAN */}
      <section id="working-plan" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Installation in Minutes, Protection for the Duration
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Working Plan
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={s.img}
                        alt=""
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute -right-2 -top-2 grid h-9 w-9 place-items-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-sm">
                      {s.num}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">
                Designed for compliance
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Built for the Trades That Work Above
              </h2>
            </div>

            <a
              href="#request"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get a Quote <span className="ml-2">→</span>
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.desc}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="relative h-52 overflow-hidden rounded-lg bg-white">
                    <Image src={f.img} alt="" fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Our FAQs
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions, Answered
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Accordion items={faqs} />
            </div>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 via-white to-slate-50" />
              <div className="relative grid h-full place-items-center p-8">
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="relative h-64 w-full">
                    <Image
                      fill
                      className="rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80"
                      alt=""
                    />
                  </div>
                  <div className="relative h-64 w-full">
                    <Image
                      fill
                      className="rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-6 w-full rounded-lg border border-slate-200 bg-white/80 p-6 text-center backdrop-blur">
                  <div className="text-5xl font-extrabold tracking-tight text-slate-900">
                    FAQ
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Quick answers for crews, inspectors, and safety managers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST INFO (CTA) */}
      <section id="request" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-400">
                Get details, pricing, and availability
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Request Product Information
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">
                Tell us about your job site and we’ll follow up with sizing,
                lead times, and compliance documentation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <form className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First Name" placeholder="First Name" />
                <Input label="Last Name" placeholder="Last Name" />
                <Input label="Phone" placeholder="Phone Number" />
                <Input label="Email" placeholder="Email Address" />
                <div className="sm:col-span-2">
                  <Input
                    label="Company / Job Site"
                    placeholder="Company or Job Site"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Textarea
                    label="Message"
                    placeholder="Tell us what you need…"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Send Request <span className="ml-2">→</span>
              </button>

              <p className="mt-3 text-xs text-slate-300">
                This form is a UI demo. Wire it to your backend (EmailJS,
                Formspree, server action, etc.).
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-bold text-white">{title}</div>
      <div className="mt-1 text-xs text-slate-200">{desc}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{label}</div>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-200">
        {label}
      </span>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
      />
    </label>
  );
}

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-200">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
      />
    </label>
  );
}

function Accordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const open = idx === openIndex;
        return (
          <div
            key={it.q}
            className="rounded-lg border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-bold text-slate-900">{it.q}</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-900">
                {open ? "–" : "+"}
              </span>
            </button>

            {open && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
