import Image, { type StaticImageData } from "next/image";

import ctaBg from "@/assets/images/cta-bg.webp";
import ctaHands from "@/assets/images/cta-hands.webp";
import iconOil from "@/assets/images/cta-icon-oil.webp";
import iconEurusd from "@/assets/images/cta-icon-eurusd.webp";
import iconGold from "@/assets/images/cta-icon-gold.webp";
import iconNasdaq from "@/assets/images/cta-icon-nasdaq.webp";
import { finalCta } from "@/content/forex";
import { tracking } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

/**
 * Floating product tiles, offsets from the page centre (measured in Framer):
 * 48px on mobile, 72px on tablet, 96px on desktop.
 */
const tiles: { src: StaticImageData; label: string; className: string; delay: string }[] = [
  {
    src: iconOil,
    label: "Oil",
    delay: "[animation-delay:-1s]",
    className:
      "top-[321px] left-[calc(50%-168px)] tablet:top-[277px] tablet:left-[calc(50%-371px)] desktop:top-[260px] desktop:left-[calc(50%-515px)] wide:left-[calc(50%-511px)]",
  },
  {
    src: iconEurusd,
    label: "EURUSD",
    delay: "[animation-delay:-3s]",
    className:
      "top-[351px] left-[calc(50%-94px)] tablet:top-[316px] tablet:left-[calc(50%-250px)] desktop:top-[311px] desktop:left-[calc(50%-364px)] wide:left-[calc(50%-360px)]",
  },
  {
    src: iconGold,
    label: "Gold",
    delay: "[animation-delay:-5s]",
    className:
      "top-[351px] left-[calc(50%+42px)] tablet:top-[316px] tablet:left-[calc(50%+179px)] desktop:top-[311px] desktop:left-[calc(50%+236px)] wide:left-[calc(50%+240px)]",
  },
  {
    src: iconNasdaq,
    label: "Nasdaq",
    delay: "[animation-delay:-2s]",
    className:
      "top-[321px] left-[calc(50%+124px)] tablet:top-[277px] tablet:left-[calc(50%+300px)] desktop:top-[260px] desktop:left-[calc(50%+386px)] wide:left-[calc(50%+390px)]",
  },
];

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate h-[688px] overflow-hidden bg-navy-950 tablet:h-[800px]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full wide:top-[calc(424px-28.9vw)] wide:h-[57.8vw]"
      >
        <Image src={ctaBg} alt="" fill sizes="100vw" className="object-fill opacity-60" />
      </div>

      <div className="relative z-10 px-4 pt-[81px] tablet:px-9 tablet:pt-[121px]">
        <SectionHeading
          id="final-cta-title"
          accentFirst
          lineBreak="always"
          title={finalCta.title}
          accent={finalCta.titleAccent}
          className="max-w-[260px] tablet:max-w-[920px]"
        />
        <div className="mt-9 flex justify-center desktop:mt-10">
          <CtaButton tracking={tracking.finalCta.cta}>{finalCta.cta}</CtaButton>
        </div>
      </div>

      {tiles.map((tile) => (
        <Image
          key={tile.label}
          src={tile.src}
          alt=""
          aria-hidden
          sizes="(min-width: 1200px) 96px, (min-width: 810px) 72px, 48px"
          className={cn(
            "absolute size-12 animate-float tablet:size-[72px] desktop:size-24",
            tile.delay,
            tile.className,
          )}
        />
      ))}

      <Image
        src={ctaHands}
        alt="Dua tangan memegang ponsel"
        sizes="(min-width: 810px) 1074px, 528px"
        className="absolute top-[417px] left-[calc(47%-264px)] w-[528px] max-w-none tablet:top-[388px] tablet:left-[calc(46%-537px)] tablet:w-[1074px] desktop:left-[calc(47%-537px)] wide:left-[calc(48%-537px)]"
      />
      {/* bottom fade to black, matching Framer */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(rgba(8,109,191,0)_0%,#000_81%)] tablet:h-[300px]"
      />
    </section>
  );
}
