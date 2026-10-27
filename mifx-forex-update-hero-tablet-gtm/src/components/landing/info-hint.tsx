"use client";

import * as React from "react";
import { Info } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { track, type TrackTarget } from "@/content/tracking-ids";

type InfoHintProps = {
  /** id + aria-label for the ⓘ trigger button (from src/content/tracking-ids.ts) */
  tracking: TrackTarget;
  title: string;
  body: string;
};

/**
 * The ⓘ explainer next to spread-table headers.
 * Framer behaviour: hover card on desktop, tap-to-open on touch.
 * A Radix Popover covers both — it opens on hover for mouse pointers and on
 * click/tap everywhere, with keyboard + screen-reader support built in.
 */
export function InfoHint({ tracking, title, body }: InfoHintProps) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  // Hover only applies to real mouse pointers; touch/pen use tap (Radix click handling).
  const hovering = React.useRef(false);
  const openSoon = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    hovering.current = true;
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    hovering.current = false;
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  // A click while the mouse is already hovering shouldn't toggle the hint shut.
  const handleOpenChange = (next: boolean) => {
    if (!next && hovering.current) return;
    setOpen(next);
  };

  React.useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger
        {...track(tracking)}
        onPointerEnter={openSoon}
        onPointerLeave={closeSoon}
        className="inline-flex size-5 items-center justify-center rounded-full text-white/90 transition-colors hover:text-brand-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <Info className="pointer-events-none size-4" strokeWidth={1.75} />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={10}
        collisionPadding={16}
        onPointerEnter={openSoon}
        onPointerLeave={closeSoon}
        onEscapeKeyDown={() => {
          hovering.current = false; // let Escape close even while hovering
        }}
        className="w-[min(340px,calc(100vw-32px))] rounded-2xl border border-white/15 bg-[#04253a]/95 px-6 py-5 text-center text-white shadow-2xl backdrop-blur-md"
      >
        <p className="text-base font-semibold">{title}</p>
        <p className="mt-3 text-sm leading-5 text-ink-300">{body}</p>
      </PopoverContent>
    </Popover>
  );
}
