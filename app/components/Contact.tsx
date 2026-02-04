"use client";

import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import { useRecaptcha } from "../helpers/useRecaptcha";
import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://nets-api.skylightsafety.net/api/forms/submit";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha("CONTACT_FORM");

      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Use e.target instead of e.currentTarget and cast to HTMLFormElement
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        recaptchaToken: token,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit");
      }

      alert("Message sent successfully! We'll get back to you soon.");
      form.reset(); // Clear form
    } catch (error) {
      console.error("Contact form error:", error);
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold tracking-wide text-orange-500">
            Get in Touch
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            Have questions about our products or services? We&apos;d love to
            hear from you. Reach out to our team and we&apos;ll get back to you
            as soon as possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Back to Home <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: "#c0652c" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-white">
                Send us a Message
              </h2>
              <p className="mt-2 text-white/80">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                    <FaPhone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Phone</h3>
                    <p className="mt-2 text-white/80">
                      Call us directly for immediate assistance.
                    </p>
                    <a
                      href="tel:888-299-3330"
                      className="mt-3 inline-block text-orange-400 hover:text-orange-300 transition"
                    >
                      888.299.3330
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-200">
              Check out our FAQs or reach out to our team directly. We&apos;re
              here to help!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#faq"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                View FAQs <span className="ml-2">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const { recaptchaToken, name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Prepare payload matching the Postman structure
    const payload = {
      recaptchaToken: recaptchaToken || "test_token_12345",
      name: name,
      phone: phone || "",
      company: "Contact Form Submission", // Add company field
      email: email,
      message: message || "",
    };

    console.log("Sending to external API:", payload);

    // Send to external API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("External API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API error response:", errorText);

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { error: errorText };
      }

      return NextResponse.json(
        { error: "Failed to submit contact form", details: errorData },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("External API success response:", data);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
