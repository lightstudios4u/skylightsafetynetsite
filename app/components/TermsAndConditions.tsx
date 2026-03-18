import React from "react";
import Link from "next/link";

export function TermsAndConditions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-base font-semibold tracking-wide text-orange-500">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            Welcome to our website. By accessing and using this site, you agree
            to comply with and be bound by the following terms and conditions.
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

      {/* Terms Content */}
      <section style={{ backgroundColor: "#c0652c" }}>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">1. Use of Site</h2>
              <p className="mt-4 text-white/80">
                This website and its content are provided for informational and
                commercial purposes. You may browse our product offerings, place
                orders, and access resources related to our safety equipment
                products.
              </p>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                2. Product Information
              </h2>
              <p className="mt-4 text-white/80">
                We strive to ensure all product descriptions, specifications,
                and pricing information are accurate. However, we reserve the
                right to correct any errors and update information without prior
                notice.
              </p>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                3. Orders and Payment
              </h2>
              <p className="mt-4 text-white/80">
                By placing an order, you are making an offer to purchase
                products subject to these terms. All orders are subject to
                acceptance and product availability. Payment must be received
                before order fulfillment.
              </p>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                4. Intellectual Property
              </h2>
              <p className="mt-4 text-white/80">
                All content on this website, including text, images, logos, and
                design elements, is the property of our company and protected by
                applicable copyright and trademark laws.
              </p>
            </div>

            {/* Section 5 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                5. Limitation of Liability
              </h2>
              <p className="mt-4 text-white/80">
                We provide products and information "as is" without warranties
                of any kind. We are not liable for any indirect, incidental, or
                consequential damages arising from your use of this website or
                our products.
              </p>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                6. Modifications
              </h2>
              <p className="mt-4 text-white/80">
                We reserve the right to modify these terms at any time.
                Continued use of the website following any changes constitutes
                acceptance of those changes.
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
              Questions about our terms?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-200">
              For questions about these terms, please contact our customer
              service team.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#request"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
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
