import Image, { type StaticImageData } from "next/image";

import heroStreaks from "@/assets/images/hero-streaks.webp";
import heroPhone from "@/assets/images/hero-phone.webp";
import badgeEurusd from "@/assets/images/hero-badge-eurusd.webp";
import badgeSentiment from "@/assets/images/hero-badge-sentiment.webp";
import badgeGold from "@/assets/images/hero-badge-gold.webp";
import { hero } from "@/content/forex";
import { tracking } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { RegulatorMarquee } from "./regulator-marquee";

/*
 * Every position below is measured from the Framer page at each breakpoint
 * (mobile < 810 ≤ tablet < 1200 ≤ desktop < 1600 ≤ wide).
 *  - mobile / tablet: elements are centred, offsets are from the middle (50%).
 *  - desktop / wide: content sits in a 1200px container (min. 80px side padding);
 *    the phone group is anchored to the container's right edge.
 */

/** An image in a fixed box with object-fit: contain (how Framer sizes these layers). */
function Layer({
  src,
  alt = "",
  sizes,
  preload,
  className,
}: {
  src: StaticImageData;
  alt?: string;
  sizes: string;
  preload?: boolean;
  className: string;
}) {
  return (
    <div className={cn("absolute", className)} aria-hidden={alt ? undefined : true}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-contain" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate h-[800px] overflow-hidden bg-navy-950 tablet:h-[1080px] desktop:h-[800px] wide:h-[960px]"
    >
      {/* Light streaks — half-speed parallax on scroll, like Framer */}
      <div
        aria-hidden
        className={cn(
          "hero-parallax absolute",
          "top-[180px] right-0 h-[384px] w-[154.1%]",
          "tablet:top-[158px] tablet:h-[567px] tablet:w-[144%]",
          "desktop:top-[-21px] desktop:right-auto desktop:left-px desktop:h-[712px] desktop:w-full",
          "wide:top-[-9px] wide:left-[12.6%] wide:h-[835px] wide:w-[87%]",
        )}
      >
        <Image
          src={heroStreaks}
          alt=""
          fill
          preload
          sizes="(min-width: 1600px) 87vw, 155vw"
          className="object-cover"
        />
      </div>

      {/* Blue radial glow (painted above the streaks, as in Framer) */}
      <div
        aria-hidden
        className={cn(
          "glow-radial pointer-events-none absolute",
          "top-[-250px] left-[-28px] h-[405px] w-[calc(100%+76px)]",
          "tablet:top-[-848px] tablet:left-[calc(50%-653px)] tablet:h-[1133px] tablet:w-[1306px]",
          "desktop:top-[-698px] desktop:left-[calc(33.2%-536px)] desktop:h-[930px] desktop:w-[1072px]",
          "wide:top-[-848px] wide:left-[calc(38.24%-653px)] wide:h-[1133px] wide:w-[1306px]",
        )}
      />

      <h1
        id="hero-title"
        className={cn(
          "t-hero absolute inset-x-4 top-[100px] text-center",
          "tablet:inset-x-20",
          "desktop:top-[179px] desktop:right-auto desktop:left-[max(80px,calc(50%-600px))] desktop:text-left",
          "wide:top-[229px]",
        )}
      >
        <span className="block text-white">{hero.titleLine1}</span>
        <span className="block text-white">{hero.titleLine2}</span>
        <span className="block text-brand-300">{hero.titleAccent}</span>
      </h1>

      {/* Phone + floating badges */}
      <Layer
        src={heroPhone}
        alt="Aplikasi MIFX menampilkan grafik EURUSD dengan tombol Sell dan Buy"
        preload
        sizes="(min-width: 1600px) 433px, (min-width: 1200px) 393px, 348px"
        className={cn(
          "top-[238px] left-[calc(50%-179px)] h-[271px] w-[362px]",
          "tablet:top-[344px] tablet:left-[calc(50%-183px)] tablet:h-[442px] tablet:w-[347px]",
          "desktop:top-[111px] desktop:right-[max(107px,calc(50%-573px))] desktop:left-auto desktop:h-[501px] desktop:w-[393px]",
          "wide:top-[157px] wide:right-[calc(50%-596px)] wide:h-[551px] wide:w-[433px]",
        )}
      />
      <Layer
        src={badgeEurusd}
        sizes="(min-width: 1600px) 236px, 164px"
        className={cn(
          "animate-float",
          "top-[231px] left-[calc(50%-145px)] h-[103px] w-[100px]",
          "tablet:top-[345px] tablet:left-[calc(50%-255px)] tablet:h-[167px] tablet:w-[162px]",
          "desktop:top-[98px] desktop:right-[max(353px,calc(50%-327px))] desktop:left-auto desktop:h-[169px] desktop:w-[164px]",
          "wide:top-[92px] wide:right-[calc(50%-302px)] wide:h-[243px] wide:w-[236px]",
        )}
      />
      <Layer
        src={badgeSentiment}
        sizes="(min-width: 1600px) 197px, 154px"
        className={cn(
          "animate-float [animation-delay:-1.6s]",
          "top-[373px] left-[calc(50%-136px)] h-[90px] w-[88px]",
          "tablet:top-[529px] tablet:left-[calc(50%-248px)] tablet:h-[158px] tablet:w-[154px]",
          "desktop:top-[320px] desktop:right-[max(392px,calc(50%-288px))] desktop:left-auto desktop:h-[152px] desktop:w-[148px]",
          "wide:top-[377px] wide:right-[calc(50%-281px)] wide:h-[203px] wide:w-[197px]",
        )}
      />
      <Layer
        src={badgeGold}
        sizes="(min-width: 1600px) 133px, 103px"
        className={cn(
          "animate-float [animation-delay:-3.2s]",
          "top-[404px] left-[calc(50%+65px)] h-[66px] w-[64px]",
          "tablet:top-[613px] tablet:left-[calc(50%+94px)] tablet:h-[101px] tablet:w-[98px]",
          "desktop:top-[402px] desktop:right-[max(67px,calc(50%-613px))] desktop:left-auto desktop:h-[106px] desktop:w-[103px]",
          "wide:top-[478px] wide:right-[calc(50%-648px)] wide:h-[137px] wide:w-[133px]",
        )}
      />

      <div
        className={cn(
          "absolute inset-x-0 top-[556px] flex justify-center",
          "tablet:top-[858px]",
          "desktop:top-[476px] desktop:right-auto desktop:left-[max(80px,calc(50%-600px))] desktop:justify-start",
          "wide:top-[526px]",
        )}
      >
        <CtaButton tracking={tracking.hero.cta}>{hero.cta}</CtaButton>
      </div>

      {/*
        Regulators. Framer's tablet layout clips this row (and half the CTA) at 900px;
        here the hero is 1080px tall on tablet so both stay visible.
      */}
      <p
        className={cn(
          "t-small absolute inset-x-4 top-[652px] text-center text-ink-200",
          "tablet:inset-x-20 tablet:top-[966px]",
          "desktop:top-[664px]",
          "wide:top-[794px]",
        )}
      >
        {hero.regulatedLabel}
      </p>
      <RegulatorMarquee
        className={cn(
          "absolute inset-x-4 top-[688px]",
          "tablet:inset-x-20 tablet:top-[1002px]",
          "desktop:inset-x-[max(80px,calc(50%-600px))] desktop:top-[700px]",
          "wide:top-[830px]",
        )}
      />

      <div aria-hidden className="divider-fade absolute inset-x-0 bottom-0 mx-auto h-px max-w-[1200px]" />
    </section>
  );
}
