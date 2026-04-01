"use client";

import React, { useMemo, useState } from "react";
import { Hero } from "./homeSection/Hero";
import { WhoItsFor } from "./homeSection/WhoItsFor";
import { RiskFraming } from "./homeSection/RiskFraming";
import { CoreBenefits } from "./homeSection/CoreBenefits";
import { Comparison } from "./homeSection/Comparison";
import { OrderOnline } from "./homeSection/OrderOnline";
import { KitIncluded } from "./homeSection/KitIncluded";
import { DeploymentSteps } from "./homeSection/DeploymentSteps";
import { QRProof } from "./homeSection/QRProof";
import { Applications } from "./homeSection/Applications";
import { BulkFleet } from "./homeSection/BulkFleet";
import { FAQSection } from "./homeSection/FAQSection";
import { RequestForm } from "./homeSection/RequestForm";
import { Contact } from "./Contact";
import { FAQ } from "./Shared";
import { FaTools, FaQrcode, FaRedoAlt } from "react-icons/fa";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

type Application = {
  title: string;
  items: string[];
};
export function Home() {
  const [kitActive, setKitActive] = useState<"net" | "strap" | "qr" | "bag">(
    "net",
  );

  const steps: Step[] = useMemo(
    () => [
      {
        num: "01",
        title: "Strap It On",
        desc: "Position the net over the skylight and secure using the included ratchet strap system.  No tools, no penetrations, no complex rigging.",
        icon: <FaTools className="text-amber-400" size={28} />,
      },
      {
        num: "02",
        title: "Scan the QR Code",
        desc: "Use any smartphone to scan the unique QR label on your net. Register the installation location, date, and responsible crew member in seconds.",
        icon: <FaQrcode className="text-sky-400" size={28} />,
      },
      {
        num: "03",
        title: "Log and Redeploy",
        desc: "Track inspections throughout the job. When the project is complete, remove the net, scan to log removal, return to inventory and redeploy it at your next site.",
        icon: <FaRedoAlt className="text-emerald-400" size={28} />,
      },
    ],
    [],
  );

  const applications: Application[] = useMemo(
    () => [
      {
        title: "New Construction",
        items: [
          "Protect skylight openings during initial roof construction",
          "Maintain protection during multi-phase builds",
        ],
      },
      {
        title: "Reroof + Replacement",
        items: [
          "Secure skylights during tearoff and installation phases",
          "Protect openings when replacing damaged skylights",
        ],
      },
      {
        title: "Maintenance + Service",
        items: [
          "Deploy protection during rooftop service calls",
          "Secure skylights for inspection and repair work",
        ],
      },
      {
        title: "Multi-Trade Projects",
        items: [
          "Coordinate fall protection when multiple crews are on the roof",
          "Document which trade installed/removed protection",
        ],
      },
    ],
    [],
  );

  const faqs: FAQ[] = useMemo(
    () => [
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
      {
        q: "Is this an anchorage / fall arrest device?",
        a: "No. This is fall-through protection for skylight openings and is not an anchorage device. Always follow your site safety plan and applicable OSHA regulations.",
      },
    ],
    [],
  );

  return (
    <div>
      <Hero />
      <WhoItsFor />
      <QRProof />
      <RiskFraming />
      <CoreBenefits />
      {/* <Comparison /> */}
      {/* <OrderOnline /> */}
      <KitIncluded kitActive={kitActive} setKitActive={setKitActive} />
      <DeploymentSteps steps={steps} />
      {/* <Applications applications={applications} />
      <BulkFleet /> */}
      {/* <FAQSection faqs={faqs} /> */}
      {/* <RequestForm /> */}
      <Contact />
    </div>
  );
}
