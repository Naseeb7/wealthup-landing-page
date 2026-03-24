import Image from "next/image";

const goals = [
  {
    title: "Car",
    image: "/assets/205830899_10815917%201.png",
    active: true,
  },
  {
    title: "Travel",
    image: "/assets/pngtree-realistic-passenger-airplane-in-mid-flight-isolated-on-transparent-background-png-image_15788014%201.png",
  },
  {
    title: "Home",
    image: "/assets/modern-bungalow-on-isolated-background-png%201.png",
  },
  {
    title: "Custom",
    image: "/assets/%3F%3F.png",
  },
];

const investmentOptions = [
  {
    title: "Mutual Funds",
    icon: "/assets/arrow-trend-up-solid-full%201.svg",
    accent: "dark",
    description:
      "Professionally managed portfolios designed to grow your wealth over the long term. Diversified across sectors and asset classes to balance risk and returns.",
  },
  {
    title: "Bonds",
    icon: "/assets/file-solid-full%201.svg",
    description:
      "Stable income-generating investments for predictable and steady returns. Ideal for investors seeking lower volatility and consistent cash flow.",
  },
  {
    title: "Invoice Discounting",
    icon: "/assets/briefcase-solid-full%201.svg",
    description:
      "Access short-term investment opportunities backed by verified business invoices. Earn attractive returns while supporting real business transactions.",
  },
];

const advantageCards = [
  "Handpicked Investments",
  "Capitalizing on Opportunities",
  "Optimized for Tax Efficiency",
];

const howItWorksCards = [
  {
    title: "Define Your Goal",
    description:
      "Start by defining what you want to achieve whether it’s buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we’ll create a personalized investment plan to help you get there.",
    icon: "⌕",
    progress: [true, false, false, false, false],
    showPhone: true,
  },
  {
    title: "Setup Your Investment Account",
    description:
      "Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.",
    icon: "◫",
    progress: [false, true, false, false, false],
  },
];

const trustLogos = [
  { src: "/assets/gov-login-img%201.png", alt: "DPIIT Startup India" },
  { src: "/assets/%23startupindia.png", alt: "Startup India" },
  { src: "/assets/Nvidia_logo.svg%201.png", alt: "Nvidia" },
  {
    src: "/assets/free-razorpay-logo-icon-svg-download-png-1399875%201.png",
    alt: "Razorpay",
  },
  { src: "/assets/amfi%202.png", alt: "AMFI" },
  { src: "/assets/Wadhwanifoundation%201.png", alt: "Wadhwani Foundation" },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--color-primary)] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-base text-[var(--color-primary)]/80 md:text-xl">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--color-surface)] text-[var(--color-primary)]">
      <section className="px-5 pt-6 md:px-[60px] lg:px-[200px]">
        <div className="rounded-[32px] border border-white/60 bg-white/35 px-6 py-6 shadow-[0_12px_40px_rgba(41,79,124,0.12)] backdrop-blur-sm md:px-12">
          <nav className="flex items-center justify-between gap-4">
            <div className="text-[2rem] font-medium tracking-[-0.06em] text-[var(--color-primary)]">
              <Image
                src="/assets/wealthup-new-whitelogo%201.svg"
                alt="Wealthup"
                width={148}
                height={46}
                className="h-auto w-[132px] invert-[0.58] sepia-[0.18] saturate-[1.2] hue-rotate-[174deg] brightness-[0.62]"
              />
            </div>
            <button className="rounded-full border border-[#71A6EB] bg-white px-8 py-3 text-lg font-semibold text-[#2C5F9F] shadow-[0_10px_18px_rgba(84,144,225,0.35)] transition-transform hover:-translate-y-0.5">
              Login
            </button>
          </nav>
        </div>
      </section>

      <section className="overflow-hidden px-5 pb-16 pt-10 md:px-[60px] md:pb-20 lg:px-[200px] lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
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
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-primary)] md:text-7xl">
                Plan your life goals. We&apos;ll plan the investments.
              </h1>
              <p className="max-w-lg text-lg leading-8 text-[var(--color-primary)]/85 md:text-[1.75rem] md:leading-[1.25]">
                WealthUp helps you achieve goals through personalised goal
                based investing.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {goals.map((goal) => (
                <article
                  key={goal.title}
                  className={`flex items-center gap-4 rounded-[28px] border px-6 py-5 shadow-[0_10px_30px_rgba(41,79,124,0.10)] transition-transform hover:-translate-y-1 ${
                    goal.active
                      ? "border-[#4D8EE1] bg-white shadow-[0_16px_40px_rgba(53,114,192,0.24)]"
                      : "border-white/50 bg-white/40"
                  }`}
                >
                  <div className="relative h-16 w-24 shrink-0">
                    <Image
                      src={goal.image}
                      alt={goal.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-medium text-[#2E5D95]">
                    {goal.title}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[640px] items-start justify-center pt-6 lg:min-h-[720px]">
            <div className="relative z-10 w-full max-w-[640px] rounded-[44px] border border-[#7CAFEA] bg-[linear-gradient(180deg,#CCE5F7_0%,#D9ECFB_100%)] p-6 shadow-[0_24px_80px_rgba(73,136,219,0.50)] md:p-10">
              <div className="rounded-[36px] bg-white/35 p-6 md:p-8">
                <h3 className="text-center text-3xl font-semibold text-[var(--color-primary)]">
                  Buy a car
                </h3>
                <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_220px]">
                  <div className="space-y-7">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-lg text-[var(--color-primary)]/80">
                        <span>Car price</span>
                        <span className="font-semibold text-[var(--color-primary)]">
                          ₹ 20L
                        </span>
                      </div>
                      <input
                        type="range"
                        defaultValue={30}
                        className="wealth-slider"
                        aria-label="Car price"
                      />
                      <div className="flex justify-between text-sm text-[var(--color-primary)]/45">
                        <span>₹ 5L</span>
                        <span>₹ 1cr</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-lg text-[var(--color-primary)]/80">
                        <span>Time to buy</span>
                        <span className="font-semibold text-[var(--color-primary)]">
                          5 years
                        </span>
                      </div>
                      <input
                        type="range"
                        defaultValue={55}
                        className="wealth-slider"
                        aria-label="Time to buy"
                      />
                    </div>

                    <button className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#5E9AED] bg-white/70 px-6 py-4 text-2xl font-medium text-[#2E5D95] transition-transform hover:-translate-y-0.5">
                      Let&apos;s get your car
                      <span className="text-xl">🚘</span>
                    </button>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full rounded-[22px] border border-[#6DA4E8] bg-white/92 px-6 py-6 text-center shadow-[0_12px_30px_rgba(64,124,201,0.18)]">
                      <p className="text-lg text-[var(--color-primary)]/70">
                        Lump Sum
                      </p>
                      <p className="mt-3 text-4xl font-semibold text-[var(--color-primary)]">
                        ₹ 11.3L
                      </p>
                    </div>
                    <span className="text-lg text-[var(--color-primary)]/55">
                      OR
                    </span>
                    <div className="w-full rounded-[22px] border border-[#6DA4E8] bg-white/92 px-6 py-6 text-center shadow-[0_12px_30px_rgba(64,124,201,0.18)]">
                      <p className="text-lg text-[var(--color-primary)]/70">
                        Monthly SIP
                      </p>
                      <p className="mt-3 text-4xl font-semibold text-[var(--color-primary)]">
                        ₹ 24k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-0 mx-auto h-28 w-[72%] rounded-full bg-[#0B4F73]/85 blur-2xl" />
            <div className="absolute bottom-3 right-0 z-20 w-[82%] max-w-[520px]">
              <Image
                src="/assets/Group%20101.png"
                alt="Blue car illustration"
                width={1125}
                height={585}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-[60px] lg:px-[200px]">
        <div className="rounded-[28px] border border-white/60 bg-white/40 px-5 py-8 shadow-[0_12px_32px_rgba(41,79,124,0.10)] md:px-10">
          <p className="text-center text-2xl font-semibold text-[var(--color-primary)]">
            Backed By
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative mx-auto flex h-14 w-full max-w-[140px] items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 md:px-[60px] lg:px-[200px]">
        <SectionHeading
          title="Multiple ways to grow your wealth"
          description="Diversified investment options selected and optimized by WealthUp."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-10">
          {investmentOptions.map((option, index) => (
            <div
              key={option.title}
              className={`rounded-[32px] border px-8 py-10 shadow-[0_18px_50px_rgba(41,79,124,0.10)] ${
                option.accent === "dark"
                  ? "border-[#5F8FC4] bg-[linear-gradient(180deg,#5578A5_0%,#4A6E9D_100%)] text-white"
                  : "border-[#6CA3E7] bg-white/65 text-[var(--color-primary)]"
              }`}
              style={{
                transform:
                  index === 0
                    ? "rotate(-8deg)"
                    : index === 1
                      ? "rotate(-2deg)"
                      : "rotate(-8deg)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border ${
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
                <h3 className="max-w-[180px] text-4xl font-medium leading-tight tracking-[-0.04em]">
                  {option.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[30px] border border-[#7AADE8] bg-white/45 shadow-[0_20px_60px_rgba(41,79,124,0.10)] lg:grid-cols-3">
          {investmentOptions.map((option) => (
            <article
              key={`${option.title}-detail`}
              className={`border-[#7AADE8] px-8 py-10 ${
                option.accent === "dark"
                  ? "bg-[linear-gradient(180deg,#496E9A_0%,#4A6F9E_100%)] text-white"
                  : "border-l bg-transparent text-[var(--color-primary)]"
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
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {option.title}
                </h3>
              </div>
              <p className="text-lg leading-8 opacity-90">{option.description}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section className="px-5 py-10 md:px-[60px] lg:px-[200px]">
        <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.30)_100%)] px-6 py-10 shadow-[0_18px_48px_rgba(41,79,124,0.10)] md:px-12 md:py-12">
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20px_20px,rgba(41,79,124,0.10)_2px,transparent_0),radial-gradient(circle_at_70px_70px,rgba(41,79,124,0.08)_4px,transparent_0)] [background-size:120px_120px]" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#2E5D95] md:text-6xl">
                Your Goals Deserve a Plan
              </h2>
              <p className="mt-3 text-lg text-[#2E5D95]/85 md:text-2xl">
                Start your personalized investment roadmap in minutes.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(90deg,#4D90E4_0%,#294F7C_100%)] px-8 py-5 text-xl font-semibold text-white shadow-[0_16px_30px_rgba(53,111,186,0.30)] md:px-12 md:text-2xl">
              Create your investment plan
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-18 md:px-[60px] lg:px-[200px]">
        <SectionHeading
          title="How It Works?"
          description="India&apos;s most intelligent investment platform"
        />

        <div className="mt-14 space-y-8">
          {howItWorksCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[28px] border border-[#5E95DA] bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(207,230,247,0.92)_48%,rgba(194,221,242,1)_100%)] px-7 py-7 shadow-[0_18px_44px_rgba(41,79,124,0.10)] md:px-8 md:py-8"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#5C95D9] bg-white/35 text-3xl font-medium text-[#31598C]">
                    {card.icon}
                  </div>
                  <div className="max-w-[580px]">
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#31598C] md:text-[2.2rem]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-xl leading-[1.25] text-[#31598C]/90 md:text-[1.15rem]">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    {card.progress.map((active, index) => (
                      <span
                        key={`${card.title}-${index}`}
                        className={`block h-3 rounded-full ${
                          active
                            ? "w-28 bg-[#31598C]"
                            : "w-12 bg-[#C7DFF2]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {card.showPhone ? (
                  <div className="relative mx-auto flex w-full max-w-[260px] justify-center">
                    <Image
                      src="/assets/Rectangle.png"
                      alt="Wealthup mobile app"
                      width={215}
                      height={380}
                      className="h-auto w-[185px] rotate-[8deg] drop-shadow-[0_18px_26px_rgba(42,70,113,0.30)] md:w-[205px]"
                    />
                  </div>
                ) : (
                  <div className="hidden lg:block" />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
