"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <section className="px-0 pt-0">
      <div className="min-h-[100px] rounded-b-[20px] bg-[rgba(207,230,247,0.2)] px-5 backdrop-blur-[30px] md:px-[60px] lg:px-[200px]">
        <nav className="flex min-h-[100px] items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="/assets/wealthup-new-whitelogo 1.svg"
              alt="Wealthup"
              width={126}
              height={40}
              className="h-auto w-[118px] opacity-70 [filter:brightness(0)_saturate(100%)_invert(33%)_sepia(2%)_saturate(20%)_hue-rotate(328deg)_brightness(94%)_contrast(93%)]"
              priority
            />
          </div>
          <button className="min-w-[122px] rounded-full bg-[linear-gradient(180deg,#d7ecfb_0%,#b9d7f5_100%)] px-8 py-[9px] text-[0.95rem] font-semibold text-[#2e5d95] shadow-[0_8px_18px_rgba(84,144,225,0.34)]">
            Login
          </button>
        </nav>
      </div>
    </section>
  );
}
