"use client";

import React from "react";
import Link from "next/link";
import { scrollToContact } from "@/app/utils/scrollToContact";

export function ShippingPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-base font-semibold tracking-wide text-orange-500">
            Delivery Information
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Shipping Policy
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-base leading-relaxed text-gray-200">
            We are committed to delivering your orders promptly and safely.
          </p>
          <p className="mt-2 text-base text-gray-200">
            <b>Last Updated:</b> January 2026
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              Back to Home <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section style={{ backgroundColor: "#c0652c" }}>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">1.</span>Shipping Methods
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                We offer the following shipping options:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Standard Ground
                  Shipping (5-7 business days)
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Expedited
                  Shipping (2-3 business days)
                </li>
              </ul>
              <p className="mt-4 ml-8 text-white/80">
                Shipping times are estimates and begin after order processing is
                complete.
              </p>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">2.</span>Shipping Costs
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Shipping costs are calculated based on:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Order weight and
                  dimensions
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Destination
                  address
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Selected
                  shipping method
                </li>
              </ul>
              <p className="mt-4 ml-8 text-white/80">
                Shipping costs are displayed at checkout before payment.
              </p>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">3.</span>Processing Time
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Orders are typically processed within 1-2 business days. You
                will receive a confirmation email with tracking information once
                your order ships.
              </p>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">4.</span>Delivery Locations
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                We currently ship to addresses within the continental United
                States. Additional restrictions may apply to certain locations.
              </p>
            </div>

            {/* Section 5 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">5.</span>Order Tracking
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Once your order ships, you will receive:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Shipping
                  confirmation email
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Tracking number
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Carrier
                  information
                </li>
              </ul>
              <p className="mt-4 ml-8 text-white/80">
                You can track your package through the carrier's website.
              </p>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">6.</span>Delivery Issues
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                If your shipment is delayed, damaged, or lost:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Contact the
                  shipping carrier first using your tracking number
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Contact our
                  customer service team for assistance
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> We will work
                  with you to resolve the issue promptly
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">7.</span>International
                Shipping
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                International shipping may be available upon request. Additional
                customs fees, duties, and taxes may apply and are the
                responsibility of the customer.
              </p>
            </div>

            {/* Section 8 */}
            <div className="rounded-xl border border-orange-600/30 bg-black p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">8.</span>Large or Bulk Orders
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Special shipping arrangements may be required for large quantity
                orders. Contact us for custom shipping quotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Questions about shipping?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-200">
              For shipping questions, contact our customer service team. We're
              here to help!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
                onClick={scrollToContact}
              >
                Get in Touch <span className="ml-2">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
