import Image, { type StaticImageData } from "next/image";

import regJfx from "@/assets/images/reg-jfx.png";
import regIcdx from "@/assets/images/reg-icdx.png";
import regKbi from "@/assets/images/reg-kbi.png";
import regIch from "@/assets/images/reg-ich.png";
import regKemendag from "@/assets/images/reg-kemendag.png";
import { cn } from "@/lib/utils";

/** Display widths match the Framer ticker at 1440px. */
const logos: { src: StaticImageData; alt: string; width: number }[] = [
  { src: regJfx, alt: "Jakarta Futures Exchange (JFX)", width: 84 },
  { src: regIcdx, alt: "Indonesia Commodity & Derivatives Exchange (ICDX)", width: 70 },
  { src: regKbi, alt: "Kliring Berjangka Indonesia", width: 67 },
  { src: regIch, alt: "Indonesia Clearing House", width: 59 },
  { src: regKemendag, alt: "Kementerian Perdagangan Republik Indonesia", width: 107 },
];

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-[100px] pr-[100px]" aria-hidden={duplicate || undefined}>
      {logos.map((logo) => (
        <li key={logo.alt} className="shrink-0">
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.alt}
            sizes={`${logo.width}px`}
            style={{ width: logo.width }}
            className="h-auto"
          />
        </li>
      ))}
    </ul>
  );
}

/** Infinite, CSS-only logo ticker (pauses on hover, stops for reduced motion). */
export function RegulatorMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1200px] overflow-hidden",
        "[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ "--marquee-copies": 3 } as React.CSSProperties}
      >
        <LogoSet />
        <LogoSet duplicate />
        <LogoSet duplicate />
      </div>
    </div>
  );
}
