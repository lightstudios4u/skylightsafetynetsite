"use client";

import Link from "next/link";
import {
  FaFileContract,
  FaShippingFast,
  FaUndoAlt,
  FaShieldAlt,
  FaPlayCircle,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

const videoLinks = [
  {
    href: "https://vimeo.com/1175542695/ad89473178?fl=ip&fe=ec",
    label: "Install Video",
    desc: "Step-by-step installation guide for the O.S.H.A. Skylight Safety Net System.",
  },
  {
    href: "https://vimeo.com/1177125518/c6aeac5192?fl=ip&fe=ec",
    label: "Drop Test Video",
    desc: "Watch the safety net system withstand a live drop test.",
  },
];

const documentLinks = [
  {
    href: "/pdf/SkylightSafetyBrochure2026.pdf",
    label: "Product Brochure",
    desc: "Overview of the Skylight Safety Net System, features, and specifications.",
  },
  {
    href: "/pdf/SkylightSafetyInstallInstructions_2026.pdf",
    label: "Installation Instructions",
    desc: "Detailed installation guide for proper setup and deployment.",
  },
];

const policyLinks = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    icon: <FaShieldAlt size={20} />,
    desc: "How we collect, use, and protect your personal information.",
  },
  {
    href: "/shipping-policy",
    label: "Shipping Policy",
    icon: <FaShippingFast size={20} />,
    desc: "Delivery timelines, methods, and shipping-related details.",
  },
  {
    href: "/refund-and-return-policy",
    label: "Refund & Return Policy",
    icon: <FaUndoAlt size={20} />,
    desc: "Our process for returns, exchanges, and refunds.",
  },
  {
    href: "/terms-and-conditions",
    label: "Terms & Conditions",
    icon: <FaFileContract size={20} />,
    desc: "The terms governing the use of our products and services.",
  },
];

export function Resources() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Resources
        </h1>

        {/* Videos */}
        <div className="mt-12">
          <h2 className="text-xl font-bold uppercase tracking-wide text-orange-500">
            Videos
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {videoLinks.map((video) => (
              <a
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 transition hover:border-orange-500/40 hover:bg-neutral-800"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-500 transition group-hover:bg-orange-500/25">
                  <FaPlayCircle size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-white group-hover:text-orange-400 transition">
                    {video.label}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{video.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-14">
          <h2 className="text-xl font-bold uppercase tracking-wide text-orange-500">
            Documentation
          </h2>
          <p className="mt-1 text-sm text-white/40">Click to download</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {documentLinks.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                download
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 transition hover:border-orange-500/40 hover:bg-neutral-800"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-500 transition group-hover:bg-orange-500/25">
                  <FaFilePdf size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-white group-hover:text-orange-400 transition">
                    {doc.label}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{doc.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-14 rounded-xl border border-white/10 bg-neutral-900 p-8 text-center">
          <FaEnvelope className="mx-auto text-orange-500" size={28} />
          <h2 className="mt-4 text-xl font-bold text-white">Have Questions?</h2>
          <p className="mt-2 text-sm text-white/50">
            Reach out to our team for product info, quotes, or support.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors"
          >
            Contact Us →
          </Link>
        </div>

        {/* Policies & Legal */}
        <div className="mt-14">
          <h2 className="text-xl font-bold uppercase tracking-wide text-orange-500">
            Policies & Legal
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 transition hover:border-orange-500/40 hover:bg-neutral-800"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-500 transition group-hover:bg-orange-500/25">
                  {link.icon}
                </div>
                <div>
                  <p className="text-base font-bold text-white group-hover:text-orange-400 transition">
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
