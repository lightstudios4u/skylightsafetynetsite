import React from "react";
import Link from "next/link";

export function RefundAndReturnPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-base font-semibold tracking-wide text-orange-500">
            Return Information
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Refund/Return Policy
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            We stand behind the quality of our products and want you to be
            satisfied with your purchase.
          </p>
          <p className="mt-2 text-base text-gray-200">
            <b>Last Updated:</b> January 2026
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">1.</span>Return Eligibility
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Products may be returned within 30 days of delivery if they are:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Unused and in
                  original condition
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> In original
                  packaging with all tags and documentation
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Free from damage
                  or alteration
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">2.</span>Non-Returnable Items
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                For safety and hygiene reasons, the following cannot be
                returned:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Products that
                  show signs of use or installation
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Damaged safety
                  equipment
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Custom or
                  special-order products
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">3.</span>Return Process
              </h2>
              <p className="mt-4 ml-8 text-white/80">To initiate a return:</p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Contact our
                  customer service team within 30 days of delivery
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Provide your
                  order number and reason for return
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Receive return
                  authorization and shipping instructions
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Ship the product
                  back using provided instructions
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">4.</span>Refund Processing
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                Once we receive and inspect your return:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span>Approved refunds
                  will be processed within 5-10 business days
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span>Refunds are
                  issued to the original payment method
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span>Shipping costs
                  are non-refundable unless the return is due to our error
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">5.</span>Defective Products
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                If you receive a defective product:
              </p>
              <ul className="mt-4 ml-4 space-y-2 text-white/80">
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span>Contact us
                  immediately upon discovery
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> We will arrange
                  for replacement or full refund, including shipping costs
                </li>
                <li className="ml-4 flex items-center">
                  <span className="text-2xl ml-8 mr-2">•</span> Warranty
                  coverage applies as specified in product documentation
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                <span className="inline-block w-8">6.</span>Restocking Fee
              </h2>
              <p className="mt-4 ml-8 text-white/80">
                A restocking fee may apply to certain returns. This will be
                communicated prior to return authorization.
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
              Questions about returns?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-200">
              For questions about returns, contact our customer service team.
              We're here to help!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Contact Us <span className="ml-2">→</span>
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
