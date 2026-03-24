"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { howItWorksCarouselSlides, investmentAccountCard } from "../constants";

export default function HowItWorksSection() {
  const [activeHowItWorksIndex, setActiveHowItWorksIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHowItWorksIndex((current) => (current + 1) % howItWorksCarouselSlides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeHowItWorksCard = howItWorksCarouselSlides[activeHowItWorksIndex];

  return (
    <section className="px-5 pb-24 pt-18 md:px-[60px] lg:px-[200px]">
      <SectionHeading
        title="How It Works?"
        description="India&apos;s most intelligent investment platform"
      />

      <div className="mt-14">
        <article className="overflow-hidden rounded-[28px] border border-[#5E95DA] bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(207,230,247,0.92)_48%,rgba(194,221,242,1)_100%)] px-7 py-7 shadow-[0_18px_44px_rgba(41,79,124,0.10)] md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#5C95D9] bg-white/35 text-3xl font-medium text-[#31598C]">
                {activeHowItWorksCard.icon}
              </div>
              <div className="max-w-[580px]">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#31598C] md:text-[2.2rem]">
                  {activeHowItWorksCard.title}
                </h3>
                <p className="mt-4 text-xl leading-[1.25] text-[#31598C]/90 md:text-[1.15rem]">
                  {activeHowItWorksCard.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {howItWorksCarouselSlides.map((_, index) => (
                  <button
                    key={`how-it-works-dot-${index}`}
                    type="button"
                    aria-label={`Show step ${index + 1}`}
                    onClick={() => setActiveHowItWorksIndex(index)}
                    className={`block h-3 rounded-full transition-all ${
                      index === activeHowItWorksIndex ? "w-28 bg-[#31598C]" : "w-12 bg-[#C7DFF2]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[260px] justify-center">
              <Image
                src="/assets/Rectangle.png"
                alt="Wealthup mobile app"
                width={215}
                height={380}
                className="h-auto w-[185px] rotate-[8deg] drop-shadow-[0_18px_26px_rgba(42,70,113,0.30)] md:w-[205px]"
              />
            </div>
          </div>
        </article>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-[#5E95DA] bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(207,230,247,0.92)_48%,rgba(194,221,242,1)_100%)] px-7 py-7 shadow-[0_18px_44px_rgba(41,79,124,0.10)] md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#5C95D9] bg-white/35 text-3xl font-medium text-[#31598C]">
                {investmentAccountCard.icon}
              </div>
              <div className="max-w-[580px]">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#31598C] md:text-[2.2rem]">
                  {investmentAccountCard.title}
                </h3>
                <p className="mt-4 text-xl leading-[1.25] text-[#31598C]/90 md:text-[1.15rem]">
                  {investmentAccountCard.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="block h-3 w-12 rounded-full bg-[#C7DFF2]" />
                <span className="block h-3 w-28 rounded-full bg-[#31598C]" />
                <span className="block h-3 w-12 rounded-full bg-[#C7DFF2]" />
                <span className="block h-3 w-12 rounded-full bg-[#C7DFF2]" />
                <span className="block h-3 w-12 rounded-full bg-[#C7DFF2]" />
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </article>
      </div>
    </section>
  );
}
