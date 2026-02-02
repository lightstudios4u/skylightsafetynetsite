import { useEffect, useRef, useState } from "react";
import { Stat } from "../Shared";
import { Input } from "../Shared";
import { Textarea } from "../Shared";

export function RequestForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      {/* REQUEST FORM (FINAL CTA) */}
      <section id="request" ref={sectionRef} className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                className={`text-sm font-semibold tracking-wide text-orange-500 animate-fade-down ${isVisible ? "visible" : ""}`}
              >
                Get details, pricing, and availability
              </p>
              <h2
                className={`mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
              >
                Request Product Information
              </h2>
              <p
                className={`mt-3 max-w-xl text-sm leading-relaxed text-gray-200 animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
              >
                Tell us about your job site and we'll follow up with sizing,
                lead times, and compliance documentation.
              </p>

              <div
                className={`mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-gray-700 bg-black/40 p-6 animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
              >
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <form
              className={`rounded-3xl border border-gray-700 bg-black/40 p-6 shadow-xl animate-fade-up delay-500 ${isVisible ? "visible" : ""}`}
            >
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
              >
                Send Request <span className="ml-2">→</span>
              </button>

              {/* <p className="mt-3 text-xs text-gray-400">
                UI only — wire to your backend (EmailJS, Formspree, API route,
                etc.).
              </p> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
