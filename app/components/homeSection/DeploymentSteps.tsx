import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaCheckCircle, FaPlay } from "react-icons/fa";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

export function DeploymentSteps({ steps }: { steps: Step[] }) {
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
    <section
      ref={sectionRef}
      id="working-plan"
      style={{ backgroundColor: "#c0652c" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p
          className={`text-center text-sm font-semibold tracking-wide text-black animate-fade-down ${isVisible ? "visible" : ""}`}
        >
          Installation in minutes, protection for the duration
        </p>
        <h2
          className={`mt-3 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          Three-Step Deployment
        </h2>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {steps.map((s, idx) => (
            <React.Fragment key={s.num}>
              <div
                className={`overflow-hidden group relative flex-1 rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm animate-fade-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 shadow-lg shadow-orange-500/25 transition-all duration-200 group-hover:bg-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/40">
                      {s.icon}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-widest text-orange-500">
                      {s.num}
                    </p>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 ? (
                <div
                  className={`hidden items-center justify-center lg:flex lg:px-2 animate-fade-in ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
                >
                  <FaArrowRight className="text-black/30" size={28} />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div
          className={`mt-12 grid gap-6 lg:grid-cols-2 animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-white">
              What happens after you scan
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              The QR code creates a digital record that follows the net through
              its service life—timestamped, organized, and audit-ready.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                "Installation documentation: who installed it, where, and when",
                "Inspection logs: pre-use checks and periodic condition assessments",
                "Location tracking: which job site or crew currently has the net",
                "Audit trail: complete history exportable for compliance reviews",
                "Desktop access: owners and managers can log in to review inventory location, inspection logs, and history",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <FaCheckCircle className="mt-0.5 text-orange-400" size={14} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-white/60 italic">
              No more clipboards, lost paperwork, or questions about whether
              protection was in place. The documentation exists in the cloud and
              travels with the net.
            </p>
          </div>

          <div
            id="video"
            className="rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm"
          >
            <h3 className="text-lg font-extrabold text-white">
              See it in action
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Watch our complete installation demonstration video to see exactly
              how the O.S.H.A. Safety Net System works in real-world conditions.
            </p>

            <a
              href=""
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              <FaPlay className="mr-2" size={16} />
              Watch Installation Video
            </a>

            {/* <p className="mt-3 text-xs text-white/60">
              Replace the{" "}
              <code className="rounded bg-black/40 px-1 py-0.5">href</code> with
              your video URL.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
