import Link from 'next/link';

export function PrivacyPolicy() {
	return (
		<div>
			{/* Hero Section */}
			<section className='relative overflow-hidden bg-black'>
				<div className='absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]' />
				<div className='absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]' />
				<div className='relative mx-auto max-w-6xl px-6 py-16'>
					<p className='text-sm font-semibold tracking-wide text-orange-500'>
						Data Protection
					</p>
					<h1 className='mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
						Privacy Policy
					</h1>
					<p className='mt-4 max-w-3xl text-base leading-relaxed text-gray-200'>
						We are committed to protecting your privacy and handling your
						personal information responsibly.
					</p>
					<p className='mt-2 text-base text-gray-200'>
						<b>Last Updated:</b> January 2026
					</p>

					<div className='mt-8 flex flex-wrap gap-3'>
						<Link
							href='/'
							className='inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'
						>
							Back to Home <span className='ml-2'>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Policy Content */}
			<section style={{ backgroundColor: '#c0652c' }}>
				<div className='mx-auto max-w-4xl px-6 py-16'>
					<div className='space-y-12'>
						{/* Section 1 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>1.</span>Information We
								Collect
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								We collect information you provide directly to us, including:
							</p>
							<ul className='mt-4 ml-8 space-y-2 text-white/80'>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Name, email
									address, phone number, and business information when you
									create an account or place an order
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Shipping and
									billing addresses for order fulfillment
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Payment
									information processed through secure third-party payment
									processors
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Communication
									history when you contact our customer service
								</li>
							</ul>
						</div>

						{/* Section 2 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>2.</span>How We Use Your
								Information
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								We use collected information to:
							</p>
							<ul className='mt-4 ml-8 space-y-2 text-white/80'>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Process and
									fulfill your orders
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Communicate
									about orders, products, and services
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Provide customer
									support
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Improve our
									website and product offerings
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Send promotional
									materials (with your consent)
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Comply with
									legal obligations
								</li>
							</ul>
						</div>

						{/* Section 3 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>3.</span>Information Sharing
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								We do not sell your personal information. We may share
								information with:
							</p>
							<ul className='mt-4 ml-8 space-y-2 text-white/80'>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Service providers
									who assist with order fulfillment, payment processing, and
									shipping
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Legal authorities
									when required by law
								</li>
								<li className='ml-4 flex items-center'>
									<span className='text-2xl ml-8 mr-2'>•</span> Business partners
									with your explicit consent
								</li>
							</ul>
						</div>

						{/* Section 4 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>4.</span>Data Security
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								We implement reasonable security measures to protect your
								information. However, no method of transmission over the
								internet is completely secure.
							</p>
						</div>

						{/* Section 5 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>5.</span>Your Rights
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								You have the right to access, correct, or delete your personal
								information. Contact us to exercise these rights.
							</p>
						</div>

						{/* Section 6 */}
						<div className='rounded-xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>
								<span className='inline-block w-8'>6.</span>Cookies
							</h2>
							<p className='mt-4 ml-8 text-white/80'>
								Our website uses cookies to enhance user experience and analyze
								site traffic. You can control cookie preferences through your
								browser settings.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-black'>
				<div className='mx-auto max-w-6xl px-6 py-16'>
					<div className='rounded-xl border border-white/10 bg-white/5 p-8'>
						<h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
							Privacy questions?
						</h2>
						<p className='mt-3 max-w-3xl text-sm leading-relaxed text-gray-200'>
							For privacy-related questions, please contact our privacy team.
							We're here to help!
						</p>

						<div className='mt-6 flex flex-wrap gap-3'>
							<Link
								href='/contact-us'
								className='inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'
							>
								Contact Us <span className='ml-2'>→</span>
							</Link>
							<Link
								href='/'
								className='inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
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
