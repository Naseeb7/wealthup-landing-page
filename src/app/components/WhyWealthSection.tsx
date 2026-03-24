"use client";

import SectionHeading from "./SectionHeading";
import { advantageCards } from "../constants";

export default function WhyWealthSection() {
  return (
    <section className="px-5 py-18 md:px-[60px] lg:px-[200px]">
      <SectionHeading
        title="Why Your Wealth Grows Faster With WealthUp"
        description="A smarter investment approach combining expert-curated opportunities, dynamic portfolio adjustments, and tax-efficient strategies."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {advantageCards.map((title) => (
          <article
            key={title}
            className="rounded-[28px] border border-white/70 bg-white/35 p-4 shadow-[0_16px_40px_rgba(41,79,124,0.10)]"
          >
            <div className="rounded-[22px] bg-[linear-gradient(180deg,#6D88AA_0%,#5C7CA3_100%)] px-8 py-6 text-center text-3xl font-semibold tracking-[-0.04em] text-white shadow-[0_10px_24px_rgba(66,99,139,0.24)]">
              {title}
            </div>
            <div className="min-h-[220px] rounded-[22px] bg-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
