import { useState, useCallback, useRef, useEffect } from "react";

// Check for mobile (pointer: coarse or width < 768px)
const checkIsMobile = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768);

// Lazy-load Spline ONLY on desktop so mobile never downloads the 2.2MB WebGL bundle
let SplineComponent: React.ComponentType<{
  scene: string;
  onLoad?: (app: unknown) => void;
  style?: React.CSSProperties;
}> | null = null;

if (typeof window !== "undefined" && !checkIsMobile()) {
  import("@splinetool/react-spline").then((mod) => {
    SplineComponent = mod.default;
  });
}

// ─────────────────────────────────────────────────────────────────────────────

interface SplineHeroProps {
  onLoaded?: () => void;
}

// ── Lightweight, silky-smooth Mobile Robot Video (Zero WebGL lag) ───────────
const MobileRobot = () => (
  <div id="spline-bg" aria-hidden="true" className="mobile-robot-bg">
    <video
      src="/videos/shape_mobile_bg.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="mobile-hero-robot-video"
    />
  </div>
);

// ── Desktop 3D Scene ───────────────────────────────────────────────────────
const DesktopSpline = ({ onLoaded }: SplineHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [SplineReady, setSplineReady] = useState<typeof SplineComponent>(SplineComponent);
  const appRef = useRef<unknown>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Wait for the dynamic import if it hasn't resolved yet
  useEffect(() => {
    if (SplineReady) return;
    let cancelled = false;
    import("@splinetool/react-spline").then((mod) => {
      if (!cancelled) {
        SplineComponent = mod.default;
        setSplineReady(() => mod.default);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [SplineReady]);

  const handleLoad = useCallback(
    (app: unknown) => {
      appRef.current = app;
      setIsLoaded(true);
      onLoaded?.();
    },
    [onLoaded]
  );

  // Pause render loop when hero is off-screen → eliminates scroll-back jank & saves battery
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = appRef.current as Record<string, unknown> | null;
        if (!app) return;
        if (entry.isIntersecting) {
          (app.play as (() => void) | undefined)?.();
        } else {
          (app.stop as (() => void) | undefined)?.();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} id="spline-bg" aria-hidden="true">
      {/* Skeleton shown until Spline scene is ready */}
      {!isLoaded && (
        <div className="spline-skeleton" role="status" aria-label="Loading 3D scene…">
          <span className="spline-skeleton-pulse" />
        </div>
      )}

      {SplineReady && (
        <SplineReady
          scene="/scene.splinecode"
          onLoad={handleLoad}
          style={{
            width: "100%",
            height: "100%",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />
      )}
    </div>
  );
};

// ── Public component ──────────────────────────────────────────────────────────
export const SplineHero = ({ onLoaded }: SplineHeroProps) => {
  const [isMobile, setIsMobile] = useState(checkIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return <MobileRobot />;
  return <DesktopSpline onLoaded={onLoaded} />;
};

export default SplineHero;