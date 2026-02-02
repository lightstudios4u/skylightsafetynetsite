"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaPlay,
  FaBolt,
  FaShieldAlt,
  FaQrcode,
} from "react-icons/fa";
import { TrustItem } from "../Shared";
import { useState, useEffect } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
		<section id='hero' className='relative overflow-hidden'>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='h-full w-full bg-black pointer-events-none' />
				<div className='absolute inset-0 opacity-40 pointer-events-none [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]' />
				<div className='absolute inset-0 opacity-30 pointer-events-none [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]' />
			</div>

			<div className='relative mx-auto max-w-6xl px-6 py-12 lg:py-10'>
				<div className='text-center'>
					<div
						id='logo'
						className='mx-auto mb-6 w-32 sm:w-40 transition-all duration-1000 ease-out'
						style={{
							transform: isLoaded ? 'translateY(0)' : 'translateY(-100px)',
							opacity: isLoaded ? 1 : 0,
						}}
					>
						<img src='/logo.png' alt='Logo' className='w-full' />
					</div>

					<div
						className='tracking-tight transition-opacity duration-2000'
						style={{ opacity: isLoaded ? 0.75 : 0 }}
					>
						<h1 className='text-4xl font-extrabold text-white sm:text-5xl'>
							Purpose-Built Skylight Fall-Through Protection
						</h1>
						<p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200'>
							Installs in minutes. Moves job-to-job. Documented with one QR
							scan.
						</p>
					</div>

					<div
						className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row transition-opacity duration-2000'
						style={{
							opacity: isLoaded ? 1 : 0,
							transitionDelay: '500ms',
						}}
					>
						<Link
							href='/products-and-services'
							className='inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black'
						>
							<FaArrowRight className='mr-2' size={18} />
							Order Online
						</Link>

						<a
							href='#video'
							className='inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10'
						>
							<FaPlay className='mr-2' size={16} />
							Installation Video
						</a>
					</div>
				</div>

				<div className='relative mx-auto mt-10 max-w-4xl'>
					<div className='absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-orange-500/20 blur-2xl' />
					<div className='absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl' />
					<div
						className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl'
						style={{
							opacity: isLoaded ? 1 : 0,
							transition: 'opacity 1500ms ease-out',
							transitionDelay: '1000ms',
						}}
					>
						<img
							src='/wideshot.png'
							alt='Workers on roof with skylight protection'
							className='h-[300px] w-full object-cover sm:h-[360px]'
						/>
					</div>
				</div>

				<div className='mx-auto mt-10 max-w-6xl'>
					<div className='mx-auto grid max-w-4xl gap-4 sm:grid-cols-3'>
						{[
							{
								icon: <FaBolt className='text-orange-400' size={20} />,
								title: 'Fast Install',
								desc: 'Minutes, not hours.',
							},
							{
								icon: <FaShieldAlt className='text-orange-400' size={20} />,
								title: 'Zero Penetration',
								desc: 'No drilling. No damage.',
							},
							{
								icon: <FaQrcode className='text-orange-400' size={20} />,
								title: 'QR Compliance',
								desc: 'Log installs + inspections.',
							},
						].map((item, index) => (
							<div
								key={item.title}
								style={{
									opacity: isLoaded ? 1 : 0,
									transition: 'opacity 700ms ease-out',
									transitionDelay: `${1500 + index * 100}ms`,
								}}
							>
								<TrustItem
									icon={item.icon}
									title={item.title}
									desc={item.desc}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
