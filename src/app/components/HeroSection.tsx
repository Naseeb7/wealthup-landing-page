"use client";

import Image from "next/image";
import { useState } from "react";
import { goals } from "../constants";

export default function HeroSection() {
  const [carPriceValue, setCarPriceValue] = useState(30);
  const [timeToBuyValue, setTimeToBuyValue] = useState(55);

  const sliderTrackStyle = (value: number) =>
    ({
      background: `linear-gradient(90deg, #4A90E2 13.46%, #294F7C ${value}%, #EAF4FB ${value}%)`,
    } as React.CSSProperties);

  return (
    <section className="px-4 pb-14 pt-8 sm:px-5 md:px-[60px] md:pb-20 lg:px-[200px] lg:pt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-3 py-2 shadow-[0_8px_28px_rgba(41,79,124,0.12)]">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="h-9 w-9 rounded-full border-2 border-white bg-[linear-gradient(135deg,#7FAEDF,#294F7C)]"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[var(--color-primary)]/75 md:text-base">
              Trusted by over 2,000 users
            </span>
          </div>

          <div className="max-w-xl space-y-5">
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-primary)] sm:text-5xl md:text-7xl">
              Plan your life goals. We&apos;ll plan the investments.
            </h1>
            <p className="max-w-lg text-base leading-7 text-[var(--color-primary)]/85 sm:text-lg md:text-[1.75rem] md:leading-[1.25]">
              WealthUp helps you achieve goals through personalised goal based investing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className={`flex items-center gap-3 rounded-[24px] border px-4 py-4 shadow-[0_10px_30px_rgba(41,79,124,0.10)] transition-transform sm:gap-4 sm:px-6 sm:py-5 hover:-translate-y-1 ${
                  goal.active
                    ? "border-[#4D8EE1] bg-white shadow-[0_16px_40px_rgba(53,114,192,0.24)]"
                    : "border-white/50 bg-white/40"
                }`}
              >
                <div className="relative h-14 w-20 shrink-0 sm:h-16 sm:w-24">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-medium text-[#2E5D95] sm:text-2xl">{goal.title}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[560px] items-start justify-center pt-2 sm:pt-6 lg:min-h-[720px]">
          <div className="relative z-10 w-full max-w-[640px] rounded-[32px] border border-[#7CAFEA] bg-[linear-gradient(180deg,#CCE5F7_0%,#D9ECFB_100%)] p-4 shadow-[0_24px_80px_rgba(73,136,219,0.50)] sm:rounded-[44px] sm:p-6 md:p-10">
            <div className="rounded-[28px] bg-white/35 p-4 sm:rounded-[36px] sm:p-6 md:p-8">
              <h3 className="text-center text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">Buy a car</h3>
              <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-8">
                <div className="space-y-7">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-base text-[var(--color-primary)]/80 sm:text-lg">
                      <span>Car price</span>
                      <span className="font-semibold text-[var(--color-primary)]">₹ 20L</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={carPriceValue}
                      onChange={(event) => setCarPriceValue(Number(event.target.value))}
                      className="wealth-slider"
                      aria-label="Car price"
                      style={sliderTrackStyle(carPriceValue)}
                    />
                    <div className="flex justify-between text-sm text-[var(--color-primary)]/45">
                      <span>₹ 5L</span>
                      <span>₹ 1cr</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-base text-[var(--color-primary)]/80 sm:text-lg">
                      <span>Time to buy</span>
                      <span className="font-semibold text-[var(--color-primary)]">5 years</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={timeToBuyValue}
                      onChange={(event) => setTimeToBuyValue(Number(event.target.value))}
                      className="wealth-slider"
                      aria-label="Time to buy"
                      style={sliderTrackStyle(timeToBuyValue)}
                    />
                  </div>

                  <button className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#5E9AED] bg-white/70 px-5 py-3 text-lg font-medium text-[#2E5D95] transition-transform sm:px-6 sm:py-4 sm:text-2xl hover:-translate-y-0.5">
                    Let&apos;s get your car
                    <span className="text-xl">🚘</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:flex-col md:items-center">
                  <div className="w-full rounded-[22px] border border-[#6DA4E8] bg-white/92 px-4 py-5 text-center shadow-[0_12px_30px_rgba(64,124,201,0.18)] sm:px-6 sm:py-6">
                    <p className="text-lg text-[var(--color-primary)]/70">Lump Sum</p>
                    <p className="mt-3 text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">₹ 11.3L</p>
                  </div>
                  <span className="hidden text-lg text-[var(--color-primary)]/55 md:inline">OR</span>
                  <div className="w-full rounded-[22px] border border-[#6DA4E8] bg-white/92 px-4 py-5 text-center shadow-[0_12px_30px_rgba(64,124,201,0.18)] sm:px-6 sm:py-6">
                    <p className="text-lg text-[var(--color-primary)]/70">Monthly SIP</p>
                    <p className="mt-3 text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">₹ 24k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-8 z-0 mx-auto h-24 w-[72%] rounded-full bg-[#0B4F73]/85 blur-2xl sm:bottom-0 sm:h-28" />
          <div className="absolute bottom-0 right-[-2%] z-20 w-[88%] max-w-[520px] sm:bottom-3 sm:right-0 sm:w-[82%]">
            <Image
              src="/assets/Group 101.png"
              alt="Blue car illustration"
              width={1125}
              height={585}
              className="h-auto w-full"
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}
