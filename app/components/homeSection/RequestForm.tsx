"use client";
import { useEffect, useRef, useState } from "react";
import { Stat } from "../Shared";
import { Input } from "../Shared";
import { Textarea } from "../Shared";
import { useRecaptcha } from "@/app/helpers/useRecaptcha";

export function RequestForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const { executeRecaptcha } = useRecaptcha();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" }); // Clear previous status

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptcha("SUBMIT_REQUEST_FORM");

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
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        recaptchaToken: token,
      };

      // Submit to your backend
      const response = await fetch("/api/submit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "✓ Request submitted successfully! We'll be in touch soon.",
        });
        form.reset();

        // Optional: Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "idle", message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: "Failed to submit request. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* REQUEST FORM (FINAL CTA) */}
      <section id="request" ref={sectionRef} className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                className={`text-base font-semibold tracking-wide text-orange-500 animate-fade-down ${isVisible ? "visible" : ""}`}
              >
                Get details, pricing, and availability
              </p>
              <h2
                className={`mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
              >
                Request Product Information
              </h2>
              <p
                className={`mt-3 max-w-xl text-base leading-relaxed text-gray-200 animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
              >
                Tell us about your job site and we&apos;ll follow up with
                sizing, lead times, and compliance documentation.
              </p>

              <div
                className={`mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-700 bg-black/40 p-6 animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
              >
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className={`rounded-xl border border-gray-700 bg-black/40 p-6 shadow-xl animate-fade-up delay-500 ${isVisible ? "visible" : ""}`}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="First Name"
                  placeholder="First Name"
                  name="firstName"
                  required={true}
                />
                <Input
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                  required={true}
                />
                <Input label="Phone" placeholder="Phone Number" name="phone" />
                <Input
                  label="Email"
                  placeholder="Email Address"
                  name="email"
                  required={true}
                />
                <div className="sm:col-span-2">
                  <Input
                    label="Company / Job Site"
                    placeholder="Company or Job Site"
                    name="company"
                    required={false}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Textarea
                    label="Message"
                    placeholder="Tell us what you need…"
                    name="message"
                    required={true}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Send Request"}{" "}
                <span className="ml-2">→</span>
              </button>

              {/* Status Message */}
              {status.type !== "idle" && (
                <div
                  className={`mt-4 rounded-lg border p-4 text-base font-medium transition-all duration-300 ${
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
      </section>
    </>
  );
}
