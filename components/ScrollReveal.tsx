"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

// Blocks that fade/slide in as they enter the viewport.
const SELECTOR = ".section, .cta-band, .dual-cta";

// Run before paint on the client (avoids a flash on client navigation), but
// fall back to useEffect on the server to silence the SSR warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Tiny IntersectionObserver-based scroll-reveal — no library, no layout shift.
 * The CSS gate (`html[data-reveal-active]`, scoped to
 * `prefers-reduced-motion: no-preference`) means content is always visible
 * without JS or when the visitor prefers reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion or no observer support: reveal everything immediately.
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      root.setAttribute("data-reveal-active", "");
      return;
    }

    // Reveal anything already on screen BEFORE enabling the gate, so visible
    // content never flashes hidden (on first load or client navigation).
    const triggerLine = window.innerHeight * 0.9;
    const pending: HTMLElement[] = [];
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < triggerLine) {
        el.classList.add("is-in");
      } else {
        el.classList.remove("is-in");
        pending.push(el);
      }
    });
    root.setAttribute("data-reveal-active", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    pending.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
