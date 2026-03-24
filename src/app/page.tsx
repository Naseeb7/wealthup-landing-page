"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroSection = dynamic(() => import("./components/HeroSection"));
const BackedBySection = dynamic(() => import("./components/BackedBySection"));
const InvestmentSection = dynamic(() => import("./components/InvestmentSection"));
const WhyWealthSection = dynamic(() => import("./components/WhyWealthSection"));
const HowItWorksSection = dynamic(() => import("./components/HowItWorksSection"));

export default function Home() {
  return (
    <main className="bg-(--page-gradient) text-(--color-primary)">
      <Navbar />
      <HeroSection />
      <BackedBySection />
      <InvestmentSection />
      <WhyWealthSection />
      <HowItWorksSection />
    </main>
  );
}
