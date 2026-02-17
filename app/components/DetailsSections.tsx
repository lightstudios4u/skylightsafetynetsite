import React from "react";
import Link from "next/link";

export function DetailsSections() {
  return (
    <div className="bg-white">
      {/* Top hero */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold tracking-wide text-orange-400">
            Details + compliance documentation
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specs, QR Tracking & What&apos;s Included
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200">
            Everything you need to know about the product, documentation system,
            and compliance tracking.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
      </section>

      {/* What’s included / specs */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What’s Included
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold">In the box</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>
                  • Skylight safety net (standard 4&apos; × 8&apos; footprint)
                </li>
                <li>• Heavy-duty ratchet strap system</li>
                <li>• Unique QR label attached to each net</li>
                <li>• Basic instructions + safety notes</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold">Core specs (example)</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500">Typical install</dt>
                  <dd className="font-semibold text-slate-900">
                    &lt; 5 minutes
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Roof penetration</dt>
                  <dd className="font-semibold text-slate-900">None</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Documentation</dt>
                  <dd className="font-semibold text-slate-900">QR logging</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Redeployable</dt>
                  <dd className="font-semibold text-slate-900">Yes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Typical Nets vs. This System
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Typical skylight nets
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Slower setup or awkward fit</li>
                <li>• Documentation is manual (or nonexistent)</li>
                <li>• Hard to prove compliance after the fact</li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Skylight Safety Net
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                <li>• Installs in minutes with straps</li>
                <li>• QR scan ties the net to a job + crew</li>
                <li>• Inspection logs are audit-ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QR Tracking deep dive */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            QR Tracking
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            Fewer gaps in compliance, fewer forgotten inspections, and cleaner
            records when auditors ask.
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
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-bold">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold">Audit-ready exports</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Export complete inspection logs as PDF or CSV. Every scan is
              timestamped and tied to a crew member—ready for project owners,
              auditors, or insurance carriers.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Want pricing or bulk availability?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200">
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
