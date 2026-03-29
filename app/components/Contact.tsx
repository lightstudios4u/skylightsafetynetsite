"use client";

import { FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRecaptcha } from "../helpers/useRecaptcha";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" }); // Clear previous status

    try {
      const token = await executeRecaptcha("CONTACT_FORM");

      if (!token) {
        setStatus({
          type: "error",
          message: "reCAPTCHA verification failed. Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

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
        const text = await response.text();
        let parsed: unknown = null;
        try {
          parsed = text ? JSON.parse(text) : null;
        } catch {}
        const errorMessage =
          parsed &&
          typeof parsed === "object" &&
          "error" in parsed &&
          typeof parsed.error === "string"
            ? parsed.error
            : text || "Failed to submit";

        setStatus({
          type: "error",
          message: errorMessage,
        });
        setIsSubmitting(false);
        return;
      }

      setStatus({
        type: "success",
        message: "✓ Message sent successfully! We'll get back to you soon.",
      });
      form.reset();

      // Optional: Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message:
          "There was an error submitting the form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact" || hash === "#request") {
      const el = document.getElementById("contact");
      if (el) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight ?? 0;
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  return (
    <section id="contact" style={{ backgroundColor: "#111111" }}>
      <div id="request" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl border border-orange-600/30 bg-gray-900 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: info */}
            <div className="flex flex-col justify-between p-8 lg:border-r border-orange-600/30">
              <div>
                <p className="text-base font-semibold tracking-wide text-orange-400">
                  Get in Touch
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Contact Us
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Have questions about our products or services? We&apos;d love
                  to hear from you. Reach out to our team and we&apos;ll get
                  back to you as soon as possible.
                </p>
              </div>

              <div className="mt-10 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
                  <FaPhone className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">Phone</p>
                  <p className="mt-1 text-base text-white/70">
                    Call us directly for immediate assistance.
                  </p>
                  <a
                    href="tel:833-433-1010"
                    className="mt-2 inline-block text-orange-400 font-semibold hover:text-orange-300 transition"
                  >
                    833.433.1010
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">
                Send Us a Message
              </h3>
              <p className="mt-1 text-base text-white/70">
                We&apos;ll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-base font-semibold text-white">
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
                  <label className="block text-base font-semibold text-white">
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
                  <label className="block text-base font-semibold text-white">
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
                  <label className="block text-base font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
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

                {status.type !== "idle" && (
                  <div
                    className={`rounded-lg border p-4 text-base font-medium transition-all duration-300 ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
