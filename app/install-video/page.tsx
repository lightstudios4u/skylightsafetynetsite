"use client";

import { useEffect } from "react";

export default function InstallVideoPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(
        "https://vimeo.com/1175542695/ad89473178?fl=ip&fe=ec"
      );
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-900 px-4 py-12">
      <p className="text-lg text-white">Redirecting to install video&hellip;</p>
    </div>
  );
}
