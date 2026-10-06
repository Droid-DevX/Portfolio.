import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { homeAnimations } from "../../animations/homeAnimation";
import SplineHero from "./SplineHero";

const Home = ({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useGSAP(
    () => {
      homeAnimations(scrollRef.current);
    },
    { scope: scrollRef }
  );

  // ── Subtle parallax on hero text driven by mouse position ────────────────
  // Sets --mx / --my CSS custom properties on #home so the overlay and text
  // drift slightly, giving depth without touching Spline's own interaction.
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      // Normalised -1 → +1
      const mx = ((e.clientX - left) / width - 0.5) * 2;
      const my = ((e.clientY - top) / height - 0.5) * 2;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const el = scrollRef.current;
    if (!el) return;
    // Ease back to centre
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }, []);

  return (
    <section
      ref={scrollRef}
      id="home"
      className="relative w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--mx": "0",
          "--my": "0",
        } as React.CSSProperties
      }
    >
      {/* ── Full-viewport Spline 3D background ────────────────────────────── */}
      <SplineHero />

      {/* ── Gradient overlay (shifts slightly with mouse for depth) ─────────── */}
      <div id="hero-overlay" aria-hidden="true" />

      {/* ── Hero content ──────────────────────────────────────────────────── */}
      <div
        ref={sectionRef}
        id="hero"
        className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8"
      >
        {/* Headings */}
        <div id="headings" className="w-full flex flex-col items-center max-w-4xl mx-auto">
          <h1>
            Robotics &amp; Reinforcement Learning Engineer{" "}
            <span className="hero-accent">Building Autonomous</span>{" "}
            Systems that learn, adapt, and act.
          </h1>

          <p className="hero-sub">
            Deep RL · Robot Control · ROS 2 · Simulation · Applied AI
          </p>

          {/* CTA Buttons */}
          <div id="hero-cta">
            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a
              href="https://github.com/Droid-DevX"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div id="scroll-hint" aria-label="Scroll down">
          <span id="scroll-hint-dot" />
        </div>
      </div>
    </section>
  );
};

export default Home;
