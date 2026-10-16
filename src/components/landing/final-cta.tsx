import Image, { type StaticImageData } from "next/image";

import ctaBg from "@/assets/images/cta-bg.webp";
import ctaHands from "@/assets/images/cta-hands.webp";
import iconOil from "@/assets/images/cta-icon-oil.webp";
import iconEurusd from "@/assets/images/cta-icon-eurusd.webp";
import iconGold from "@/assets/images/cta-icon-gold.webp";
import iconNasdaq from "@/assets/images/cta-icon-nasdaq.webp";
import { finalCta } from "@/content/forex";
import { trackingIds } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

/**
 * Floating product tiles. Desktop offsets are relative to the page centre
 * (measured at 1440px); mobile positions from the 390px artboard.
 */
const tiles: { src: StaticImageData; label: string; className: string; delay: string }[] = [
  {
    src: iconOil,
    label: "Oil",
    delay: "[animation-delay:-1s]",
    className: "top-[330px] left-[calc(50%-168px)] tablet:top-[261px] tablet:left-[calc(50%-515px)]",
  },
  {
    src: iconEurusd,
    label: "EURUSD",
    delay: "[animation-delay:-3s]",
    className: "top-[357px] left-[calc(50%-94px)] tablet:top-[311px] tablet:left-[calc(50%-364px)]",
  },
  {
    src: iconGold,
    label: "Gold",
    delay: "[animation-delay:-5s]",
    className: "top-[357px] left-[calc(50%+42px)] tablet:top-[311px] tablet:left-[calc(50%+236px)]",
  },
  {
    src: iconNasdaq,
    label: "Nasdaq",
    delay: "[animation-delay:-2s]",
    className: "top-[330px] left-[calc(50%+124px)] tablet:top-[261px] tablet:left-[calc(50%+386px)]",
  },
];

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate h-[688px] overflow-hidden bg-navy-950 tablet:h-[800px]"
    >
      <Image src={ctaBg} alt="" aria-hidden fill sizes="100vw" className="-z-10 object-cover opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pt-[90px] tablet:px-8 tablet:pt-[122px] desktop:px-0">
        <SectionHeading
          id="final-cta-title"
          accentFirst
          lineBreak="always"
          title={finalCta.title}
          accent={finalCta.titleAccent}
          className="max-w-[260px] tablet:max-w-[920px]"
        />
        <div className="mt-8 flex justify-center tablet:mt-10">
          <CtaButton id={trackingIds.finalCta.cta}>{finalCta.cta}</CtaButton>
        </div>
      </div>

      {tiles.map((tile) => (
        <Image
          key={tile.label}
          src={tile.src}
          alt=""
          aria-hidden
          sizes="(min-width: 810px) 96px, 48px"
          className={cn("absolute size-12 animate-float tablet:size-24", tile.delay, tile.className)}
        />
      ))}

      <Image
        src={ctaHands}
        alt="Dua tangan memegang ponsel"
        sizes="(min-width: 810px) 1074px, 528px"
        className="absolute bottom-[40px] left-1/2 w-[528px] max-w-none -translate-x-1/2 tablet:bottom-[35px] tablet:w-[1074px]"
      />
      {/* bottom fade to black, matching Framer */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(rgba(8,109,191,0)_0%,#000_81%)] tablet:h-[300px]"
      />
    </section>
  );
}
