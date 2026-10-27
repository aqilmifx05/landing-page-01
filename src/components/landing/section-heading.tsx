import { cn } from "@/lib/utils";

/**
 * Where the white/green parts break onto separate lines (mirrors Framer):
 * - "tablet":  inline on mobile (wraps naturally), separate lines from tablet up
 * - "mobile":  separate lines on mobile, one line from tablet up
 * - "always":  separate lines at every breakpoint
 */
type LineBreak = "tablet" | "mobile" | "always";

const breakClass: Record<LineBreak, string> = {
  tablet: "tablet:block",
  mobile: "block tablet:inline",
  always: "block",
};

type SectionHeadingProps = {
  title: string;
  accent: string;
  /** Put the green part before the white part (final CTA does this). */
  accentFirst?: boolean;
  subtitle?: string;
  tone?: "dark" | "light";
  lineBreak?: LineBreak;
  /** id for the <h2>, so the section can use aria-labelledby */
  id?: string;
  className?: string;
};

/** Two-tone section heading with an optional muted subtitle. */
export function SectionHeading({
  title,
  accent,
  accentFirst = false,
  subtitle,
  tone = "dark",
  lineBreak = "tablet",
  id,
  className,
}: SectionHeadingProps) {
  const line = breakClass[lineBreak];
  const main = <span className={cn(line, tone === "dark" ? "text-white" : "text-ink-900")}>{title}</span>;
  const green = (
    <span className={cn(line, tone === "dark" ? "text-brand-300" : "text-brand-600")}>{accent}</span>
  );

  return (
    <div className={cn("reveal mx-auto max-w-[310px] text-center tablet:max-w-[928px]", className)}>
      <h2 id={id} className="t-h2">
        {accentFirst ? green : main} {accentFirst ? main : green}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "t-body mx-auto mt-4 max-w-[300px] tablet:mt-5 tablet:max-w-none",
            tone === "dark" ? "text-ink-200 tablet:text-ink-400" : "text-ink-700",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
