import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Accordion, FAQ } from "../Shared";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

const stepColors = [
  {
    bg: "bg-amber-500/10",
    shadow: "shadow-amber-500/25",
    hoverBg: "bg-amber-500/20",
    hoverShadow: "shadow-amber-500/40",
    label: "text-amber-400",
    border: "border-amber-500/40",
  },
  {
    bg: "bg-sky-500/10",
    shadow: "shadow-sky-500/25",
    hoverBg: "bg-sky-500/20",
    hoverShadow: "shadow-sky-500/40",
    label: "text-sky-400",
    border: "border-sky-500/40",
  },
  {
    bg: "bg-emerald-500/10",
    shadow: "shadow-emerald-500/25",
    hoverBg: "bg-emerald-500/20",
    hoverShadow: "shadow-emerald-500/40",
    label: "text-emerald-400",
    border: "border-emerald-500/40",
  },
];

export function DeploymentSteps({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const commonInstallationQuestions: FAQ[] = [
    {
      q: "How long does installation take?",
      a: "A two-person crew can install an O.S.H.A. Safety Net System in under 2 minutes. Removal is equally fast, making it practical for short-duration work or jobs where skylights need temporary protection during specific phases.",
    },
    {
      q: "Do I need special tools?",
      a: "No tools required. The heavy-duty ratchet strap included with the O.S.H.A. Safety Net System is operated by hand. If you can tighten a ratchet strap, you can install the Safety Net System.",
    },
    {
      q: "Can I move it from job to job?",
      a: "Absolutely. The O.S.H.A. Safety Net System is designed for repeated use across multiple sites. Simply scan to log removal at one location, transport it in the included storage bag, and scan again when you install it at the next job.",
    },
  ];

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
                className={`overflow-hidden group relative flex-1 rounded-xl border ${stepColors[idx]?.border ?? "border-orange-600/30"} bg-[#3D2C28] p-6 shadow-sm animate-fade-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg ${stepColors[idx]?.bg ?? "bg-orange-500/10"} shadow-lg ${stepColors[idx]?.shadow ?? "shadow-orange-500/25"} transition-all duration-200 group-hover:${stepColors[idx]?.hoverBg ?? "bg-orange-500/20"} group-hover:shadow-xl group-hover:${stepColors[idx]?.hoverShadow ?? "shadow-orange-500/40"} ${isVisible ? "animate-icon-pop" : "opacity-0"}`}
                      style={{ animationDelay: `${500 + idx * 150}ms` }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  <div>
                    <p
                      className={`text-xs font-bold tracking-widest ${stepColors[idx]?.label ?? "text-orange-500"}`}
                    >
                      {s.num}
                    </p>
                    <h3 className="card-title-pop text-lg font-bold text-white">
                      {s.title}
                    </h3>
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
          className={`mt-12 animate-fade-up delay-600 ${isVisible ? "visible" : ""}`}
        >
          <div
            id="faq"
            className="rounded-xl border border-orange-600/30 bg-[#3D2C28] p-6 shadow-sm"
          >
            <h3 className="card-title-pop text-lg font-extrabold text-white">
              What happens after you scan
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              The QR code system creates a digital record that follows your net
              through its entire service life. Each scan captures critical
              information that safety managers and project owners need:
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                "Installation documentation: Who installed it, where, and when",
                "Inspection logs: Confirms visual inspection at deployment, weekly while working on the job, and removal at job completion",
                "Location tracking: Confirms job name, job address, number of nets deployed, weekly inspection compliance by crew",
                "Audit trail: Complete history of deployment and inspections exportable for compliance reviews",
                "Desktop access: Provides owners and managers with desktop login to review inventory location, inspection logs, compliance.",
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

            <div className="mt-8 border-t border-orange-600/20 pt-8">
              <h3 className="card-title-pop text-lg font-extrabold text-white">
                Common installation questions
              </h3>
              <div className="mt-4">
                <Accordion items={commonInstallationQuestions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
