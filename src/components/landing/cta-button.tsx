import { Button } from "@/components/ui/button";
import { links } from "@/content/forex";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

/** Primary green CTA used throughout the page (264×48 in Framer). */
export function CtaButton({ children, href = links.openAccount, className }: CtaButtonProps) {
  return (
    <Button asChild size="cta" className={cn("hover:bg-brand-600", className)}>
      <a href={href}>{children}</a>
    </Button>
  );
}
