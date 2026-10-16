import Image from "next/image";

import heroStreaks from "@/assets/images/hero-streaks.webp";
import heroPhone from "@/assets/images/hero-phone.webp";
import badgeEurusd from "@/assets/images/hero-badge-eurusd.webp";
import badgeSentiment from "@/assets/images/hero-badge-sentiment.webp";
import badgeGold from "@/assets/images/hero-badge-gold.webp";
import { hero } from "@/content/forex";
import { CtaButton } from "./cta-button";
import { RegulatorMarquee } from "./regulator-marquee";

/**
 * Phone + floating badges. Positions are percentages of a 480×520 artboard
 * measured from the Framer desktop layout, so the group scales as one unit.
 */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[480/520] w-[272px] tablet:w-[400px] desktop:mx-0 desktop:w-[480px]">
      <Image
        src={heroPhone}
        alt="Aplikasi MIFX menampilkan grafik EURUSD dengan tombol Sell dan Buy"
        preload
        sizes="(min-width: 1200px) 393px, (min-width: 810px) 328px, 238px"
        className="absolute top-[2%] left-[8.3%] w-[81.9%]"
      />
      <Image
        src={badgeEurusd}
        alt=""
        sizes="164px"
        className="absolute top-0 left-[4.8%] w-[34.2%] animate-float"
      />
      <Image
        src={badgeSentiment}
        alt=""
        sizes="148px"
        className="absolute top-[41.3%] left-0 w-[30.8%] animate-float [animation-delay:-2s]"
      />
      <Image
        src={badgeGold}
        alt=""
        sizes="103px"
        className="absolute top-[56.9%] left-[77.1%] w-[21.5%] animate-float [animation-delay:-4s]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950 pt-[96px] tablet:pt-[120px] desktop:min-h-[800px] desktop:pt-[100px]"
    >
      {/* Background: blue glow + light streaks */}
      <div
        aria-hidden
        className="glow-radial absolute -top-[200px] -left-[200px] -z-10 h-[600px] w-[900px] opacity-80"
      />
      <Image
        src={heroStreaks}
        alt=""
        aria-hidden
        preload
        sizes="100vw"
        className="absolute top-[240px] -left-[211px] -z-10 mix-blend-screen h-[384px] w-[601px] max-w-none object-cover tablet:top-[40px] tablet:left-0 tablet:h-[712px] tablet:w-full"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-4 tablet:px-8 desktop:flex-row desktop:items-center desktop:justify-between desktop:gap-0 desktop:px-0">
        <div className="flex flex-col items-center text-center desktop:items-start desktop:pt-[12px] desktop:text-left">
          <h1
            id="hero-title"
            className="text-[28px] leading-[35px] font-bold tracking-[-0.7px] tablet:text-[56px] tablet:leading-[1.15] tablet:tracking-[-1.6px] desktop:text-[72px] desktop:leading-[88.2px] desktop:tracking-[-2.16px]"
          >
            <span className="block text-white">{hero.titleLine1}</span>
            <span className="block text-white">{hero.titleLine2}</span>
            <span className="block text-brand-300">{hero.titleAccent}</span>
          </h1>
          <CtaButton className="mt-8 hidden desktop:inline-flex">{hero.cta}</CtaButton>
        </div>

        <div className="desktop:mr-[-20px]">
          <HeroVisual />
        </div>

        {/* On mobile/tablet the CTA sits below the phone, as in Framer */}
        <CtaButton className="desktop:hidden">{hero.cta}</CtaButton>
      </div>

      <div className="mt-12 desktop:mt-[60px]">
        <p className="text-center text-xs leading-4 text-ink-200 tablet:text-sm tablet:leading-5">
          {hero.regulatedLabel}
        </p>
        <RegulatorMarquee className="mt-6" />
      </div>

      <div aria-hidden className="divider-fade mx-auto mt-12 h-px w-full max-w-[1200px] desktop:mt-[60px]" />
    </section>
  );
}
