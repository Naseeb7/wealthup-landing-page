"use client";

import Image from "next/image";
import { trustLogos } from "../constants";

export default function BackedBySection() {
  return (
    <section className="px-5 py-8 md:px-[60px] lg:px-[200px]">
      <div className="rounded-[28px] border border-white/60 bg-white/40 px-5 py-8 shadow-[0_12px_32px_rgba(41,79,124,0.10)] md:px-10">
        <p className="text-center text-2xl font-semibold text-[var(--color-primary)]">Backed By</p>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {trustLogos.map((logo) => (
            <div
              key={logo.alt}
              className="relative mx-auto flex h-12 w-full max-w-[132px] items-center justify-center sm:h-14 sm:max-w-[140px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 640px) 132px, 140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
