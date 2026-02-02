import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";

type KitImageKey = "net" | "strap" | "qr" | "bag";

const kitImages = {
  net: "/net.png",
  strap: "/maninstall.png",
  qr: "/qr.png",
  bag: "/package.png",
} as const;

function KitHoverGallery({ kitActive }: { kitActive: KitImageKey }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100/10 bg-slate-50 shadow-sm">
      <Image
        key={kitActive}
        src={kitImages[kitActive]}
        alt="Kit detail"
        width={800}
        height={420}
        className="h-[420px] w-full object-cover transition"
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
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);
  return (
		<section ref={sectionRef} className='bg-black'>
			<div className='mx-auto max-w-6xl px-6 py-16'>
				<div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
					{/* LEFT: Copy + Hover List */}
					<div>
						<p
							className='text-sm font-semibold tracking-wide text-orange-500 transition-all duration-500 ease-out'
							style={{
								transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
								opacity: isVisible ? 1 : 0,
							}}
						>
							The most common commercial skylight size
						</p>
						<div
							className='tracking-tight transition-opacity duration-700'
							style={{
								opacity: isVisible ? 1 : 0,
								transitionDelay: '700ms',
							}}
						>
							<h2 className='mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
								A Kit Built for Real Job Sites
							</h2>
							<p className='mt-4 text-sm leading-relaxed text-gray-200'>
								Every component is selected for durability, ease of use, and
								rapid deployment. Built to be obvious on the roof and defendable
								in an audit.
							</p>
						</div>

						<div
							className='tracking-tight transition-opacity duration-700'
							style={{
								opacity: isVisible ? 1 : 0,
								transitionDelay: '800ms',
							}}
						>
							<div className='mt-6 flex items-center gap-2 text-xs font-semibold text-gray-400'>
								<span className='inline-flex h-6 items-center rounded-full border border-gray-700 bg-black/40 px-3'>
									Hover to see more →
								</span>
							</div>

							{/* Hover targets */}
							<div className='mt-2 space-y-4'>
								<button
									type='button'
									onMouseEnter={() => setKitActive('net')}
									onFocus={() => setKitActive('net')}
									className={[
										'w-full text-left rounded-2xl border p-5 transition',
										kitActive === 'net'
											? 'border-orange-600/50 bg-[#3D2C28]'
											: 'border-gray-700 bg-black/40 hover:bg-black/60',
									].join(' ')}
								>
									<p className='text-sm font-bold text-white'>
										High-Visibility Safety Net
									</p>
									<p className='mt-1 text-sm text-gray-300'>
										UV-stabilized orange mesh sized for commercial skylights.
									</p>
								</button>

								<button
									type='button'
									onMouseEnter={() => setKitActive('strap')}
									onFocus={() => setKitActive('strap')}
									className={[
										'w-full text-left rounded-2xl border p-5 transition',
										kitActive === 'strap'
											? 'border-orange-600/50 bg-[#3D2C28]'
											: 'border-gray-700 bg-black/40 hover:bg-black/60',
									].join(' ')}
								>
									<p className='text-sm font-bold text-white'>
										Heavy-Duty Ratchet Strap
									</p>
									<p className='mt-1 text-sm text-gray-300'>
										Secure attachment to standard curb lips—no tools, no
										penetrations.
									</p>
								</button>

								<button
									type='button'
									onMouseEnter={() => setKitActive('qr')}
									onFocus={() => setKitActive('qr')}
									className={[
										'w-full text-left rounded-2xl border p-5 transition',
										kitActive === 'qr'
											? 'border-orange-600/50 bg-[#3D2C28]'
											: 'border-gray-700 bg-black/40 hover:bg-black/60',
									].join(' ')}
								>
									<p className='text-sm font-bold text-white'>
										Serialized QR Label
									</p>
									<p className='mt-1 text-sm text-gray-300'>
										Scan to register, log inspections, and keep documentation
										clean.
									</p>
								</button>

								<button
									type='button'
									onMouseEnter={() => setKitActive('bag')}
									onFocus={() => setKitActive('bag')}
									className={[
										'w-full text-left rounded-2xl border p-5 transition',
										kitActive === 'bag'
											? 'border-orange-600/50 bg-[#3D2C28]'
											: 'border-gray-700 bg-black/40 hover:bg-black/60',
									].join(' ')}
								>
									<p className='text-sm font-bold text-white'>Storage Bag</p>
									<p className='mt-1 text-sm text-gray-300'>
										Keep kits organized between jobs and easy to transport.
									</p>
								</button>
							</div>
						</div>
					</div>

					{/* RIGHT: Image that changes on hover */}
					<div
						style={{
							opacity: isVisible ? 1 : 0,
							transition: 'opacity 1500ms ease-out',
							transitionDelay: '1000ms',
						}}
					>
						<KitHoverGallery kitActive={kitActive} />
					</div>
				</div>

				{/* Centered Safety Notice - Outside the grid */}
				<div className='mx-auto mt-10 max-w-2xl rounded-2xl border border-yellow-600/40 bg-yellow-900/20 p-6 shadow-lg'>
					<div className='flex items-start gap-3'>
						<FaShieldAlt
							className='mt-0.5 flex-shrink-0 text-yellow-400'
							size={20}
						/>
						<div>
							<p className='text-sm font-bold text-white'>
								Important Safety Notice
							</p>
							<p className='mt-2 text-sm leading-relaxed text-white/90'>
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
