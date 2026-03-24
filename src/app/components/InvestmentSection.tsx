"use client";

import Image from "next/image";
import { investmentOptions } from "../constants";
import SectionHeading from "./SectionHeading";

export default function InvestmentSection() {
  return (
    <section className="px-5 py-18 md:px-[60px] lg:px-[200px]">
      <SectionHeading
        title="Multiple ways to grow your wealth"
        description="Diversified investment options selected and optimized by WealthUp."
      />

      <div className="mt-12 grid justify-items-center gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {investmentOptions.map((option, index) => (
          <div
            key={option.title}
            className="mx-auto flex h-[124px] w-full max-w-[232px] items-center justify-center sm:h-[138px]"
            style={{
              transform:
                index === 0
                  ? "rotate(-10deg)"
                  : index === 1
                  ? "rotate(-4deg)"
                  : "rotate(10deg)",
            }}
          >
            <div className="relative h-[100px] w-[190px] sm:h-[105px] sm:w-[205px]">
              <div
                className={`absolute inset-x-0 bottom-[-8px] h-[92px] rounded-[20px] sm:h-[96px] ${
                  option.accent === "dark" ? "bg-[#395a83]" : "bg-[#d7ebfb]"
                }`}
              />
              <div
                className={`relative z-10 flex h-[100px] w-[190px] items-center gap-3 rounded-[20px] border px-4 py-4 shadow-[0_14px_30px_rgba(41,79,124,0.12)] sm:h-[105px] sm:w-[205px] sm:gap-4 sm:px-6 sm:py-5 ${
                  option.accent === "dark"
                    ? "border-[#5F8FC4] bg-[linear-gradient(180deg,#5578A5_0%,#4A6E9D_100%)] text-white"
                    : "border-[#6CA3E7] bg-[#f7fbff] text-[var(--color-primary)]"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    option.accent === "dark"
                      ? "border-white/60 bg-white text-[#50729E]"
                      : "border-[#5E95DA] bg-white"
                  }`}
                >
                  <Image
                    src={option.icon}
                    alt=""
                    width={22}
                    height={22}
                    className={option.accent === "dark" ? "invert-[0.3]" : ""}
                  />
                </div>
                <h3 className="max-w-[110px] text-base font-medium leading-tight tracking-[-0.04em] sm:max-w-[120px] sm:text-[1.05rem]">
                  {option.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid overflow-hidden rounded-[30px] border border-[#7AADE8] bg-white/45 shadow-[0_20px_60px_rgba(41,79,124,0.10)] lg:grid-cols-3">
        {investmentOptions.map((option) => (
          <article
            key={`${option.title}-detail`}
            className={`border-[#7AADE8] px-6 py-8 sm:px-8 sm:py-10 ${
              option.accent === "dark"
                ? "bg-[linear-gradient(180deg,#496E9A_0%,#4A6F9E_100%)] text-white"
                : "border-t lg:border-l lg:border-t-0 bg-transparent text-[var(--color-primary)]"
            }`}
          >
            <div className="mb-8 flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full border ${
                  option.accent === "dark"
                    ? "border-white/55 bg-white text-[#4D6F9A]"
                    : "border-[#649BDD] bg-white"
                }`}
              >
                <Image
                  src={option.icon}
                  alt=""
                  width={22}
                  height={22}
                  className={option.accent === "dark" ? "invert-[0.3]" : ""}
                />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{option.title}</h3>
            </div>
            <p className="text-base leading-7 opacity-90 sm:text-lg sm:leading-8">{option.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
