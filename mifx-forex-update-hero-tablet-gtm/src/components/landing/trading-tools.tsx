import Image from "next/image";

import { tradingTools, type TradingTool } from "@/content/forex";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type ToolLayout = {
  /** Card wrapper size per breakpoint */
  card: string;
  /** Description type style + width of the desktop text column */
  text: string;
  /** Image box (object-contain) — position inside the card per breakpoint */
  image: string;
  sizes: string;
};

/* Geometry measured from Framer at 390 / 1000 / 1440px. */
const layouts: ToolLayout[] = [
  {
    // Trading Signal — tall card
    card: "h-[462px] tablet:row-span-2 tablet:h-[548px] desktop:h-[500px]",
    text: "t-body desktop:max-w-[232px]",
    image:
      "top-[143px] left-[calc(50%-126px)] h-[307px] w-[252px] tablet:top-[198px] desktop:top-[59px] desktop:right-[28px] desktop:left-auto desktop:h-[414px] desktop:w-[339px]",
    sizes: "(min-width: 1200px) 339px, 252px",
  },
  {
    // Sentiment Analysis
    card: "h-[279px] tablet:h-[258px] desktop:h-[234px]",
    text: "t-small desktop:max-w-[186px]",
    image:
      "top-[139px] left-[calc(50%-137.5px)] h-[109px] w-[275px] tablet:top-[124px] desktop:top-[96px] desktop:right-[25px] desktop:left-auto desktop:w-[274px]",
    sizes: "275px",
  },
  {
    // News
    card: "h-[279px] tablet:h-[258px] desktop:h-[234px]",
    text: "t-small desktop:max-w-[176px]",
    image:
      "top-[124px] left-[calc(50%-139px)] h-[129px] w-[278px] tablet:top-[110px] desktop:top-[69px] desktop:right-[25px] desktop:left-auto desktop:h-[133px] desktop:w-[300px]",
    sizes: "(min-width: 1200px) 300px, 278px",
  },
];

function ToolCard({ tool, layout }: { tool: TradingTool; layout: ToolLayout }) {
  return (
    <article className={cn("tool-card reveal", layout.card)}>
      <div className="tool-card-inner p-5 desktop:p-9">
        {/* Glow rising from below (Framer "bg-light" inside the card) */}
        <div
          aria-hidden
          className="glow-radial pointer-events-none absolute top-[36px] left-1/2 h-[655px] w-[1037px] -translate-x-1/2"
        />
        <div className="relative z-10">
          <h3 className="t-card text-white">{tool.title}</h3>
          <p className={cn("mt-4 text-ink-400", layout.text)}>{tool.description}</p>
        </div>
        <div className={cn("absolute z-10", layout.image)}>
          <Image
            src={tool.image}
            alt={`Tampilan fitur ${tool.title} di aplikasi MIFX`}
            fill
            sizes={layout.sizes}
            className="object-contain"
          />
        </div>
      </div>
    </article>
  );
}

export function TradingTools() {
  return (
    <section
      aria-labelledby="tools-title"
      className="bg-navy-950 pt-[57px] pb-[57px] tablet:pt-[81px] tablet:pb-[101px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 tablet:px-9 desktop:px-20">
        <SectionHeading
          id="tools-title"
          title={tradingTools.title}
          accent={tradingTools.titleAccent}
          subtitle={tradingTools.subtitle}
        />

        <div className="mt-[41px] grid gap-5 tablet:mt-[61px] tablet:grid-cols-2 tablet:gap-8">
          {tradingTools.items.map((tool, i) => (
            <ToolCard key={tool.title} tool={tool} layout={layouts[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
