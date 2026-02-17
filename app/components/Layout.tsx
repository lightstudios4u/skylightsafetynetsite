"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop + Mobile Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <Image
              src="/logo.webp"
              alt="SkylightSafety.Net"
              width={96}
              height={96}
              className="h-[96px] w-[96px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-base font-semibold sm:flex">
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#working-plan"
            >
              How it Works
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="#faq"
            >
              FAQ
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors"
              href="/contact-us"
            >
              Contact
            </a>
            <a
              className="rounded-lg bg-orange-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors"
              href="#request"
            >
              Request Info →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="sm:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-white/10 bg-black/95 backdrop-blur-md px-6 py-4 space-y-3">
            <a
              className="block text-sm font-semibold text-gray-300 hover:text-white transition-colors py-2"
              href="#working-plan"
              onClick={() => setMobileOpen(false)}
            >
              How it Works
            </a>
            <a
              className="block text-sm font-semibold text-gray-300 hover:text-white transition-colors py-2"
              href="#faq"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
            <a
              className="block text-sm font-semibold text-gray-300 hover:text-white transition-colors py-2"
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
            <a
              className="block rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white text-center hover:bg-orange-600 transition-colors"
              href="#request"
              onClick={() => setMobileOpen(false)}
            >
              Request Info →
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Image
                src="/logo.webp"
                alt="SkylightSafety.Net"
                width={100}
                height={100}
              />
            </Link>

            {/* Phone Number */}
            <div>
              <a
                href="tel:888-299-3330"
                className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition"
              >
                888.299.3330
              </a>
            </div>

            {/* Document Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <a className="hover:text-white transition" href="/privacy-policy">
                Privacy Policy
              </a>
              <a
                className="hover:text-white transition"
                href="/refund-and-return-policy"
              >
                Refund & Return Policy
              </a>
              <a
                className="hover:text-white transition"
                href="/shipping-policy"
              >
                Shipping Policy
              </a>
              <a
                className="hover:text-white transition"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </a>
              <a className="hover:text-white transition" href="/contact-us">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SkylightSafety.Net. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
