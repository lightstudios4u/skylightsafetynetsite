import { useState } from "react";

export function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-orange-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-orange-500/10">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 transition-all group-hover:bg-orange-500/20">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold leading-tight text-white">
            {title}
          </div>
          <div className="mt-1.5 text-xs leading-relaxed text-slate-300">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{label}</div>
    </div>
  );
}

export function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-200">
        {label}
      </span>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
      />
    </label>
  );
}

export function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-200">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40"
      />
    </label>
  );
}

export type FAQ = { q: string; a: string };

export function Accordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const open = idx === openIndex;
        return (
          <div
            key={it.q}
            className="rounded-2xl border border-slate-200 bg-[#3D2C28] shadow-sm transition-all hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left "
            >
              <span className="text-sm font-bold text-white">{it.q}</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 ">
                {open ? "–" : "+"}
              </span>
            </button>

            {open && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-white">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
