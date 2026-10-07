import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { homeAnimations } from "../../animations/homeAnimation";
import SplineHero from "./SplineHero";

const Home = ({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      homeAnimations(scrollRef.current);
    },
    { scope: scrollRef }
  );

  return (
    <section
      ref={scrollRef}
      id="home"
      className="relative w-full overflow-hidden"
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
