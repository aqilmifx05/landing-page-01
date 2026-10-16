import Image from "next/image";

import { tradingTools, type TradingTool } from "@/content/forex";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type Variant = "tall" | "wide";

function ToolCard({ tool, variant, className }: { tool: TradingTool; variant: Variant; className?: string }) {
  const tall = variant === "tall";
  return (
    <article className={cn("card-surface reveal flex flex-col p-5 tablet:p-9", className)}>
      {/* bottom glow */}
      <div
        aria-hidden
        className="glow-radial pointer-events-none absolute -bottom-1/2 left-1/2 h-full w-[140%] -translate-x-1/2 opacity-70"
      />

      <div className="relative z-10">
        <h3 className="heading-card text-white">{tool.title}</h3>
        <p
          className={cn(
            "mt-2 text-sm leading-[19.6px] text-ink-400 tablet:mt-4",
            tall
              ? "tablet:text-base tablet:leading-6 desktop:max-w-[232px]"
              : "tablet:text-sm tablet:leading-5 desktop:max-w-[180px]",
          )}
        >
          {tool.description}
        </p>
      </div>

      <Image
        src={tool.image}
        alt={`Tampilan fitur ${tool.title} di aplikasi MIFX`}
        sizes={tall ? "(min-width: 1200px) 339px, 252px" : "(min-width: 1200px) 300px, 278px"}
        className={cn(
          "relative z-10 mx-auto mt-6",
          tall
            ? "w-[252px] tablet:w-[300px] desktop:absolute desktop:top-[59px] desktop:right-[29px] desktop:mt-0 desktop:w-[339px]"
            : "w-[278px] desktop:absolute desktop:top-1/2 desktop:right-[30px] desktop:mt-0 desktop:w-[290px] desktop:-translate-y-1/2",
        )}
      />
    </article>
  );
}

export function TradingTools() {
  const [signal, sentiment, news] = tradingTools.items;
  return (
    <section aria-labelledby="tools-title" className="bg-navy-950 py-16 tablet:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 tablet:px-8 desktop:px-0">
        <SectionHeading
          id="tools-title"
          title={tradingTools.title}
          accent={tradingTools.titleAccent}
          subtitle={tradingTools.subtitle}
        />

        <div className="mt-10 grid gap-4 tablet:mt-[60px] tablet:grid-cols-2 desktop:grid-rows-[233px_233px] desktop:gap-8">
          <ToolCard tool={signal} variant="tall" className="tablet:row-span-2 desktop:min-h-[498px]" />
          <ToolCard tool={sentiment} variant="wide" />
          <ToolCard tool={news} variant="wide" />
        </div>
      </div>
    </section>
  );
}
