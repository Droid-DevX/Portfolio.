import { gsap } from "gsap";
import {
  animateHeading,
  animateFeatureBackground,
  animateProjectCards,
} from "./utils";

export const homeAnimations = (scope: HTMLElement | null) => {
  if (!scope) return;

  // ── Hero entry — fade + slide up ─────────────────────────────────────────
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from("#headings h1", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  })
    .from(
      "#headings .hero-sub",
      { opacity: 0, y: 24, duration: 0.7, ease: "power3.out" },
      "-=0.5"
    )
    .from(
      "#hero-cta .hero-btn",
      {
        opacity: 0,
        y: 16,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      "#scroll-hint",
      { opacity: 0, y: 8, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

  // Heading split-text effect
  animateHeading("#headings");

  // Background effect (if present)
  animateFeatureBackground("#f-bg");

  // Project cards animation
  animateProjectCards(
    "#highlight-projects #projectCard-container .project-card"
  );
};
