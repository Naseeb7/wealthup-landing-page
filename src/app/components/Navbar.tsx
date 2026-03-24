"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <section className="px-0 pt-0">
      <div className="min-h-22 rounded-b-[20px] px-4 backdrop-blur-[30px] sm:px-5 md:min-h-25 md:px-15 lg:px-50 border-b-2 border-white/30">
        <nav className="flex min-h-22 items-center justify-between gap-3 md:min-h-25 md:gap-4">
          <div className="flex items-center">
            <Image
              src="/assets/wealthup-new-whitelogo 1.svg"
              alt="Wealthup"
              width={126}
              height={40}
              className="h-auto w-26 opacity-70 filter-[brightness(0)_saturate(100%)_invert(33%)_sepia(2%)_saturate(20%)_hue-rotate(328deg)_brightness(94%)_contrast(93%)] sm:w-29.5"
              preload
            />
          </div>
          <button className="px-9 py-2 rounded-full bg-primary-100 font-semibold text-xl text-foreground shadow-lg shadow-primary-200 sm:px-6">
            Login
          </button>
        </nav>
      </div>
    </section>
  );
}
