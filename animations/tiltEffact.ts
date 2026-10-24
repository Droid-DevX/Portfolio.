// hooks/useTiltEffect.ts
import { useEffect, useRef } from "react";
import gsap from "gsap";

type TiltOptions = {
  maxTilt?: number;   // max tilt in degrees
  duration?: number;  // gsap animation duration
  ease?: string;      // gsap easing
};

export function useTiltEffect({
  maxTilt = 5,
  duration = 0.3,
  ease = "power2.out",
}: TiltOptions = {}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number; top: number } | null>(null);

  useEffect(() => {
    return () => {
      if (cardRef.current) {
        gsap.killTweensOf(cardRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rectRef.current = {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    if (!rectRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      rectRef.current = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      };
    }

    const { left, top } = rectRef.current;
    const width = cardRef.current.offsetWidth;
    const height = cardRef.current.offsetHeight;

    if (width === 0 || height === 0) return;

    const x = e.pageX - left;
    const y = e.pageY - top;

    const midX = width / 2;
    const midY = height / 2;

    const normalizedX = Math.max(-1, Math.min(1, (x - midX) / midX));
    const normalizedY = Math.max(-1, Math.min(1, (y - midY) / midY));

    const rotateX = normalizedY * maxTilt;
    const rotateY = normalizedX * -maxTilt;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration,
      ease,
      overwrite: "auto",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: duration * 1.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return {
    cardRef,
    eventHandlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
