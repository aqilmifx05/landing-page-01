import { Button } from "@/components/ui/button";
import { links } from "@/content/forex";
import { track, type TrackTarget } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children: React.ReactNode;
  /** id + aria-label for GTM — take it from `tracking` in src/content/tracking-ids.ts */
  tracking: TrackTarget;
  href?: string;
  className?: string;
};

/** Primary green CTA used throughout the page (264×48 in Framer). */
export function CtaButton({ children, tracking, href = links.openAccount, className }: CtaButtonProps) {
  return (
    <Button asChild size="cta" className={cn("hover:bg-brand-600", className)}>
      <a {...track(tracking)} href={href}>
        {children}
      </a>
    </Button>
  );
}
