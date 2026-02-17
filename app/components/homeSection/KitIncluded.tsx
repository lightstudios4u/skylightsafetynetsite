import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type KitImageKey = "net" | "strap" | "qr" | "bag";

const kitImages = {
  net: "/net.webp",
  strap: "/maninstall.webp",
  qr: "/qr.webp",
  bag: "/package.webp",
} as const;

function KitHoverGallery({ kitActive }: { kitActive: KitImageKey }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-100/10 bg-slate-50 shadow-sm">
      <Image
        key={kitActive}
        src={kitImages[kitActive]}
        alt="Kit detail"
        width={800}
        height={420}
        className="h-[420px] w-full object-cover"
      />

      <div className="bg-black p-4">
        <p className="text-xs font-semibold text-white">
          Showing:{" "}
          <span className="text-white">
            {kitActive === "net"
              ? "Safety Net"
              : kitActive === "strap"
                ? "Ratchet Strap"
                : kitActive === "qr"
                  ? "QR Label"
                  : "Storage Bag"}
          </span>
        </p>
      </div>
    </div>
  );
}

export function KitIncluded({
  kitActive,
  setKitActive,
}: {
  kitActive: KitImageKey;
  setKitActive: (key: KitImageKey) => void;
}) {
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
    <section ref={sectionRef} className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div
          className={`tracking-tight animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            4&apos; × 8&apos; Skylight Safety Net Kit
          </h2>
          <p className="mt-1 text-lg font-semibold text-orange-500">
            The Most Common Commercial Skylight Size
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Copy + Hover List */}
          <div>
            <div
              className={`animate-fade-in delay-200 ${isVisible ? "visible" : ""}`}
            >
              <p className="mt-4 text-sm leading-relaxed text-gray-200">
                Our kit is engineered for the standard 4&apos; × 8&apos;
                skylight found on 98% of commercial rooftops nationwide. Every
                component is selected for durability, ease of use, and rapid
                deployment in real-world job site conditions.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                This isn&apos;t an adapted cargo net or improvised solution.
                It&apos;s purpose-built fall-through protection designed by
                rooftop professionals who understand the specific needs of
                rooftop work.
              </p>
            </div>

            <div
              className={`animate-fade-in delay-300 ${isVisible ? "visible" : ""}`}
            >
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-400">
                <span className="inline-flex h-6 items-center rounded-full border border-gray-700 bg-black/40 px-3">
                  Hover to see more →
                </span>
              </div>

              {/* Hover targets */}
              <div className="mt-2 space-y-4">
                <button
                  type="button"
                  onMouseEnter={() => setKitActive("net")}
                  onFocus={() => setKitActive("net")}
                  className={[
                    "w-full text-left rounded-lg border p-5 transition-colors duration-200",
                    kitActive === "net"
                      ? "border-orange-600/50 bg-[#3D2C28]"
                      : "border-gray-700 bg-black/40 hover:bg-black/60",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-white">
                    High-Visibility Safety Net
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    UV-stabilized orange mesh net sized precisely for 4&apos; ×
                    8&apos; skylights. Contractors can see protected areas from
                    across the roof.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("strap")}
                  onFocus={() => setKitActive("strap")}
                  className={[
                    "w-full text-left rounded-lg border p-5 transition-colors duration-200",
                    kitActive === "strap"
                      ? "border-orange-600/50 bg-[#3D2C28]"
                      : "border-gray-700 bg-black/40 hover:bg-black/60",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-white">
                    Heavy-Duty Ratchet Strap
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    Professional-grade stainless steel ratcheting strap system
                    provides secure attachment to standard curb lips without
                    tools or penetrations.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("qr")}
                  onFocus={() => setKitActive("qr")}
                  className={[
                    "w-full text-left rounded-lg border p-5 transition-colors duration-200",
                    kitActive === "qr"
                      ? "border-orange-600/50 bg-[#3D2C28]"
                      : "border-gray-700 bg-black/40 hover:bg-black/60",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-white">
                    Serialized QR Label
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    Permanently attached to the net and storage bag. Scan to
                    register, log inspections, and track location.
                  </p>
                </button>

                <button
                  type="button"
                  onMouseEnter={() => setKitActive("bag")}
                  onFocus={() => setKitActive("bag")}
                  className={[
                    "w-full text-left rounded-lg border p-5 transition-colors duration-200",
                    kitActive === "bag"
                      ? "border-orange-600/50 bg-[#3D2C28]"
                      : "border-gray-700 bg-black/40 hover:bg-black/60",
                  ].join(" ")}
                >
                  <p className="text-sm font-bold text-white">Storage Bag</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Durable carry bag keeps your kit organized and protected
                    between jobs. Easy transport from truck to roof, and
                    protects the Safety Net from damage when not in use.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Image that changes on hover */}
          <div
            className={`animate-fade-up delay-400 ${isVisible ? "visible" : ""}`}
          >
            <KitHoverGallery kitActive={kitActive} />
          </div>
        </div>

        {/* Key Specifications Table */}
        <div
          className={`mt-10 mx-auto max-w-4xl animate-fade-up delay-500 ${isVisible ? "visible" : ""}`}
        >
          <h3 className="text-center text-2xl font-extrabold text-white mb-6">
            Key Specifications
          </h3>
          <div className="overflow-hidden rounded-lg border border-gray-700">
            <div className="divide-y divide-gray-700">
              {[
                {
                  label: "Net Dimensions",
                  value:
                    "Fits standard 4' × 8' commercial skylights — curb mounted or self-flashing",
                },
                {
                  label: "Visibility Color",
                  value: "High-visibility safety orange",
                },
                {
                  label: "Material",
                  value: "UV-stabilized synthetic polyester strapping",
                },
                {
                  label: "Installation Time",
                  value: "Under 2 minutes by a crew of two",
                },
                {
                  label: "Portability",
                  value: "Lightweight and reusable across multiple job sites",
                },
                {
                  label: "Curb Requirement",
                  value:
                    'Minimum 1.5" metal skylight counter flashing lip for strap attachment',
                },
                {
                  label: "Documentation",
                  value:
                    "QR code for digital inspection logs / installation instructions — printed and video / tailgate safety talk materials — available in English and Spanish",
                },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-3 sm:grid-cols-4"
                >
                  <div className="col-span-1 bg-black/40 px-4 py-3 text-sm font-semibold text-gray-200">
                    {spec.label}
                  </div>
                  <div className="col-span-2 sm:col-span-3 px-4 py-3 text-sm text-white/80">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Safety Notice - Outside the grid */}
        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-yellow-600/40 bg-yellow-900/20 p-6 shadow-lg">
          <div className="flex items-start gap-3">
            <FaShieldAlt
              className="mt-0.5 flex-shrink-0 text-yellow-400"
              size={20}
            />
            <div>
              <p className="text-sm font-bold text-white">
                Important Safety Notice
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                This product helps prevent fall-through incidents at skylight
                openings. It is NOT an anchorage device and must not be used for
                personal fall arrest systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
