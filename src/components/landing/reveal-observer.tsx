"use client";

import { useEffect } from "react";

/**
 * One-shot "appear" animation for every `.reveal` element (replaces Framer's
 * appear effects). Content is never hidden without JavaScript: only elements
 * that are below the fold when this runs get `data-reveal="pending"`, and they
 * flip to "done" the first time they enter the viewport.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const fold = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "done";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of elements) {
      if (el.getBoundingClientRect().top < fold) continue; // already visible: leave alone
      el.dataset.reveal = "pending";
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
