import Image from "next/image";

import platformPhone from "@/assets/images/platform-phone.webp";
import { benefits, stats, type Benefit, type Stat } from "@/content/forex";
import { tracking } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

/*
 * Layout measured from Framer:
 *  - mobile: phone, then the three cards stacked, then a 2×2 stat grid.
 *  - tablet & desktop: cards float around the phone (absolute positions,
 *    relative to the section top), stats in one row of four.
 */

function BenefitCard({ benefit, className }: { benefit: Benefit; className?: string }) {
  return (
    <article className={cn("glass-card reveal px-6 pt-5 pb-5", className)}>
      <Image src={benefit.icon} alt="" sizes="48px" className="size-12" />
      <h3 className="t-card mt-3 text-white">{benefit.title}</h3>
      <p className="t-body mt-[5px] text-ink-400 tablet:hidden">{benefit.descriptionMobile}</p>
      <p className="t-body mt-[5px] hidden text-ink-400 tablet:block">{benefit.description}</p>
    </article>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="glass-card reveal flex h-[120px] flex-col items-center justify-center gap-2 px-3 text-center tablet:h-[140px]">
      <p className="t-h2 flex items-center gap-2 text-white">
        {stat.value}
        {stat.icon ? (
          <Image
            src={stat.icon === "app-store" ? "/images/icon-app-store.svg" : "/images/icon-google-play.svg"}
            alt={stat.icon === "app-store" ? "App Store" : "Google Play"}
            width={32}
            height={32}
            unoptimized
            className="size-8"
          />
        ) : null}
      </p>
      <p className="t-body text-ink-400">{stat.label}</p>
    </div>
  );
}

export function PlatformBenefits() {
  const { keamanan, kemudahan, kecepatan } = benefits.items;

  return (
    <section
      aria-labelledby="benefits-title"
      className="relative isolate overflow-hidden bg-navy-950 pt-[57px] pb-14 tablet:h-[1363px] tablet:pt-[81px] tablet:pb-0 desktop:h-[1387px]"
    >
      <div aria-hidden className="divider-fade absolute inset-x-0 top-0 mx-auto h-px max-w-[1300px]" />
      <div
        aria-hidden
        className="glow-radial-soft absolute top-[-200px] left-1/2 -z-10 h-[389px] w-full -translate-x-1/2 tablet:top-[-438px] tablet:h-[930px] tablet:w-[1440px]"
      />

      <div className="px-4 tablet:px-9">
        <SectionHeading id="benefits-title" title={benefits.title} accent={benefits.titleAccent} />
      </div>

      {/* Phone in hand */}
      <div className="relative mt-[41px] h-[479px] tablet:absolute tablet:inset-x-0 tablet:top-[225px] tablet:mt-0 tablet:h-[807px] desktop:top-[249px]">
        <Image
          src={platformPhone}
          alt="Tangan memegang ponsel dengan aplikasi MIFX"
          sizes="(min-width: 810px) 598px, 355px"
          className="absolute top-0 left-[calc(50%-133.5px)] h-[479px] w-[355px] max-w-none tablet:left-[calc(50%-217px)] tablet:h-[807px] tablet:w-[598px] desktop:left-[calc(50%-225.5px)]"
        />
      </div>
      {/* Fade the hand into the background */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[926px] hidden h-[106px] bg-[linear-gradient(rgba(8,109,191,0)_0%,#01101c_83.4%)] tablet:block desktop:top-[950px]"
      />

      {/* Benefit cards: stacked on mobile, floating around the phone from tablet up */}
      <div className="flex flex-col gap-4 px-4 tablet:contents">
        <BenefitCard
          benefit={keamanan}
          className="tablet:absolute tablet:top-[232px] tablet:left-[496px] tablet:w-[274px] desktop:top-[266px] desktop:left-[calc(50%+234px)] desktop:w-[317px] wide:left-[calc(50%+184px)]"
        />
        <BenefitCard
          benefit={kemudahan}
          className="tablet:absolute tablet:top-[449px] tablet:left-[34px] tablet:w-[274px] desktop:top-[453px] desktop:left-[calc(50%-592px)] desktop:w-[334px] wide:left-[calc(50%-532px)]"
        />
        <BenefitCard
          benefit={kecepatan}
          className="tablet:absolute tablet:top-[612px] tablet:right-9 tablet:w-[274px] desktop:top-[603px] desktop:right-auto desktop:left-[calc(50%+243px)] desktop:w-[317px] wide:top-[602px] wide:left-[calc(50%+183px)]"
        />
      </div>

      <div
        className={cn(
          "relative z-10 mt-[23px] grid grid-cols-2 gap-4 px-4",
          "tablet:absolute tablet:inset-x-9 tablet:top-[1015px] tablet:mt-0 tablet:grid-cols-4 tablet:px-0",
          "desktop:inset-x-[max(80px,calc(50%-600px))] desktop:top-[1039px]",
        )}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="mt-8 flex justify-center tablet:absolute tablet:inset-x-0 tablet:top-[1235px] tablet:mt-0 desktop:top-[1259px]">
        <CtaButton tracking={tracking.benefits.cta}>{benefits.cta}</CtaButton>
      </div>
    </section>
  );
}
