import React from "react";
import Link from "next/link";

export function ProductsAndServices() {
  return (
    <div>
      {/* Top hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold tracking-wide text-orange-500">
            Products & Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specs, QR Tracking, and What&apos;s Included
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            This page exists for the people who ask “Cool… but what exactly do I
            get, and how does the documentation work?” Short answer: strap it
            on, scan it, log it, export it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#request"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Request Info <span className="ml-2">→</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Landing
            </Link>
          </div>
        </div>
      </section>

      {/* What’s included / specs */}
      <section id="whats-included" style={{ backgroundColor: "#c0652c" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            What&apos;s Included
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white">In the box</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                  • Skylight safety net (standard 4&apos; × 8&apos; footprint)
                </li>
                <li>• Heavy-duty ratchet strap system</li>
                <li>• Unique QR label attached to each net</li>
                <li>• Basic instructions + safety notes</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white">
                Core specs (example)
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-white/60">Typical install</dt>
                  <dd className="font-semibold text-white">&lt; 5 minutes</dd>
                </div>
                <div>
                  <dt className="text-white/60">Roof penetration</dt>
                  <dd className="font-semibold text-white">None</dd>
                </div>
                <div>
                  <dt className="text-white/60">Documentation</dt>
                  <dd className="font-semibold text-white">QR logging</dd>
                </div>
                <div>
                  <dt className="text-white/60">Redeployable</dt>
                  <dd className="font-semibold text-white">Yes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ backgroundColor: "#fc8337" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Typical Nets vs. This System
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white">
                Typical skylight nets
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Slower setup or awkward fit</li>
                <li>• Documentation is manual (or nonexistent)</li>
                <li>• Hard to prove compliance after the fact</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white">
                Skylight Safety Net
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Installs in minutes with straps</li>
                <li>• QR scan ties the net to a job + crew</li>
                <li>• Inspection logs are audit-ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QR Tracking deep dive */}
      <section id="qr" style={{ backgroundColor: "#c0652c" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            QR Tracking (How it actually helps)
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/80">
            The goal isn’t “cool QR tech.” The goal is fewer gaps in compliance,
            fewer forgotten inspections, and cleaner records when someone asks.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Install registration",
                desc: "One scan logs location, date/time, and crew member. That’s the starting point for the record.",
              },
              {
                title: "Inspection logging",
                desc: "Repeat scans during the project create a simple timeline of checks and status changes.",
              },
              {
                title: "Redeploy + history",
                desc: "Removal and redeploy creates continuity across job sites—no mystery nets with no paper trail.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-white">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-bold text-white">
              Audit-friendly output
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              If you want, this page can include a screenshot/example log table,
              but I’d keep that behind a lead capture unless you’re
              intentionally giving away the whole playbook.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Want pricing or bulk availability?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-200">
              We’ll follow up with lead times, documentation, and whether a
              fleet program makes sense for your crews.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#request"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Request Info <span className="ml-2">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Landing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
