import Image from "next/image";

import platformPhone from "@/assets/images/platform-phone.webp";
import { benefits, stats, type Benefit, type Stat } from "@/content/forex";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

function BenefitCard({ benefit, className }: { benefit: Benefit; className?: string }) {
  return (
    <article
      className={cn(
        "reveal rounded-2xl border border-white/15 bg-navy-950/70 p-6 backdrop-blur-md",
        className,
      )}
    >
      <Image src={benefit.icon} alt="" sizes="48px" className="size-12" />
      <h3 className="heading-card mt-4 text-white">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-5 text-ink-400 tablet:hidden">{benefit.descriptionMobile}</p>
      <p className="mt-2 hidden text-base leading-6 text-ink-400 tablet:block">{benefit.description}</p>
    </article>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="reveal flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/15 bg-navy-950 px-3 py-6 text-center tablet:h-[139px] tablet:py-0">
      <p className="flex items-center gap-2 text-[28px] leading-[35px] font-bold tracking-[-0.7px] text-white tablet:text-5xl tablet:leading-[1.08] tablet:tracking-[-1.2px]">
        {stat.value}
        {stat.icon ? (
          <Image
            src={stat.icon === "app-store" ? "/images/icon-app-store.svg" : "/images/icon-google-play.svg"}
            alt={stat.icon === "app-store" ? "App Store" : "Google Play"}
            width={32}
            height={32}
            unoptimized
            className="size-6 tablet:size-8"
          />
        ) : null}
      </p>
      <p className="text-sm leading-5 text-ink-400 tablet:text-base tablet:leading-6">{stat.label}</p>
    </div>
  );
}

export function PlatformBenefits() {
  const { keamanan, kemudahan, kecepatan } = benefits.items;

  return (
    <section
      aria-labelledby="benefits-title"
      className="relative isolate overflow-hidden bg-navy-950 pt-16 pb-16 tablet:pt-20 tablet:pb-20"
    >
      <div aria-hidden className="divider-fade absolute inset-x-0 top-0 mx-auto h-px max-w-[1300px]" />
      <div
        aria-hidden
        className="glow-radial absolute top-[-200px] left-1/2 -z-10 h-[930px] w-[1400px] -translate-x-1/2 opacity-70"
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 tablet:px-8 desktop:px-0">
        <SectionHeading id="benefits-title" title={benefits.title} accent={benefits.titleAccent} />

        {/* Mobile / tablet: image then stacked cards */}
        <div className="desktop:hidden">
          <Image
            src={platformPhone}
            alt="Tangan memegang ponsel dengan aplikasi MIFX"
            sizes="(min-width: 810px) 420px, 355px"
            className="reveal mx-auto mt-8 w-[355px] tablet:w-[420px]"
          />
          <div className="mt-6 grid gap-4 tablet:grid-cols-3">
            <BenefitCard benefit={keamanan} />
            <BenefitCard benefit={kemudahan} />
            <BenefitCard benefit={kecepatan} />
          </div>
        </div>

        {/* Desktop: absolute composition measured from the Framer artboard (1200px wide) */}
        <div className="relative mt-[60px] hidden h-[790px] desktop:block">
          <Image
            src={platformPhone}
            alt="Tangan memegang ponsel dengan aplikasi MIFX"
            sizes="598px"
            className="absolute top-0 left-[374px] w-[598px] max-w-none"
          />
          {/* fade the hand into the background */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-[-20px] h-[260px] bg-[linear-gradient(rgba(8,109,191,0)_0%,#01101c_83%)]"
          />
          <BenefitCard benefit={kemudahan} className="absolute top-[204px] left-[9px] w-[332px]" />
          <BenefitCard benefit={keamanan} className="absolute top-[17px] left-[834px] w-[316px]" />
          <BenefitCard benefit={kecepatan} className="absolute top-[354px] left-[844px] w-[316px]" />
        </div>

        <div className="relative z-10 mt-6 grid grid-cols-2 gap-4 desktop:mt-0 desktop:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="mt-10 flex justify-center desktop:mt-20">
          <CtaButton>{benefits.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
