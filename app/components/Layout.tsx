"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar - replace with your real header/nav if you have one */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur hidden sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            {/* <Image
              src="/wings.png"
              alt="SkylightSafety.Net"
              width={36}
              height={36}
              className="h-9 w-9"
            /> */}
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">
                SkylightSafety.Net
              </div>
              {/* <div className="text-xs text-slate-500">Safety First</div> */}
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex">
            <a
              className="text-slate-700 hover:text-slate-900"
              href="#working-plan"
            >
              How it Works
            </a>
            <a className="text-slate-700 hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <a
              className="text-slate-700 hover:text-slate-900"
              href="/contact-us"
            >
              Contact
            </a>
            <a
              className="rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              href="#request"
            >
              Request Info →
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-100 bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Image
                src="/logo.png"
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
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <a
                className="hover:text-slate-900 transition"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-slate-900 transition"
                href="/refund-and-return-policy"
              >
                Refund & Return Policy
              </a>
              <a
                className="hover:text-slate-900 transition"
                href="/shipping-policy"
              >
                Shipping Policy
              </a>
              <a
                className="hover:text-slate-900 transition"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </a>
              <a className="hover:text-slate-900 transition" href="/contact-us">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} SkylightSafety.Net. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
