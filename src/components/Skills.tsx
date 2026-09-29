import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { mySkillsList } from "../../constants";

interface SkillFeature {
  id: string;
  title: string;
  description?: string;
  categoryTitle?: string;
}

const Skills = ({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillFeature | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group skills from constants/skills.ts into the 3 tree clusters
  const roboticsCluster: SkillFeature[] =
    mySkillsList
      .find((c) => c.id === "robotics-rl")
      ?.features.map((f) => ({ ...f, categoryTitle: "Robotics & RL" })) || [];

  const mlCluster: SkillFeature[] = [
    ...(mySkillsList
      .find((c) => c.id === "ml-dl")
      ?.features.map((f) => ({ ...f, categoryTitle: "ML / DL" })) || []),
    ...(mySkillsList
      .find((c) => c.id === "data")
      ?.features.map((f) => ({ ...f, categoryTitle: "Data Systems" })) || []),
  ];

  const systemsCluster: SkillFeature[] = [
    ...(mySkillsList
      .find((c) => c.id === "languages")
      ?.features.map((f) => ({ ...f, categoryTitle: "Languages" })) || []),
    ...(mySkillsList
      .find((c) => c.id === "tools")
      ?.features.map((f) => ({ ...f, categoryTitle: "Infrastructure" })) || []),
  ];

  // GSAP subtle entrance animation
  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLDivElement>(".tree-node");
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20 overflow-hidden"
    >
      <div ref={containerRef} className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="w-full max-w-4xl flex flex-col items-center space-y-3 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="text-indigo-600">Architecture</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Connected toolkits across Robotics, Deep RL, Machine Learning, and Systems Engineering.
          </p>
        </div>

        {/* ─────────────────────────────────────────────
            TREE STRUCTURE
        ───────────────────────────────────────────── */}
        <div className="w-full flex flex-col items-center">
          {/* Central Root: MY SKILLS */}
          <div className="tree-node relative z-20">
            <div className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl bg-slate-950 text-white font-extrabold tracking-widest text-base sm:text-lg uppercase border-2 border-indigo-500 shadow-[0_0_24px_rgba(79,70,229,0.35)] select-none">
              MY SKILLS
            </div>
          </div>

          {/* SVG Connector Branch Lines (Visible on md and up) */}
          <div className="hidden md:block w-full max-w-4xl h-16 relative pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 64"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Vertical center stem from MY SKILLS */}
              <line
                x1="400"
                y1="0"
                x2="400"
                y2="32"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Horizontal crossbar */}
              <line
                x1="200"
                y1="32"
                x2="600"
                y2="32"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Left vertical drop into Left Cluster */}
              <line
                x1="200"
                y1="32"
                x2="200"
                y2="64"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Right vertical drop into Right Cluster */}
              <line
                x1="600"
                y1="32"
                x2="600"
                y2="64"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Center vertical trunk down to bottom cluster */}
              <line
                x1="400"
                y1="32"
                x2="400"
                y2="64"
                stroke="#4f46e5"
                strokeWidth="2"
              />

              {/* Junction dots */}
              <circle cx="400" cy="32" r="3.5" fill="#4f46e5" />
              <circle cx="200" cy="64" r="3" fill="#4f46e5" />
              <circle cx="600" cy="64" r="3" fill="#4f46e5" />
            </svg>
          </div>

          {/* Mobile vertical connector */}
          <div className="md:hidden w-0.5 h-8 bg-indigo-500 my-1" />

          {/* Top Two Clusters (Robotics & RL on Left, ML & Data on Right) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Left Cluster: Robotics & RL */}
            <div className="tree-node bg-white/95 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold tracking-wider uppercase text-indigo-600">
                    Robotics &amp; Deep RL
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {roboticsCluster.map((skill) => {
                    const isHovered = hoveredSkill?.id === skill.id;
                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`
                          px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase
                          border transition-all duration-200 cursor-pointer select-none
                          ${
                            isHovered
                              ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105 -translate-y-0.5"
                              : "bg-white text-slate-800 border-slate-300 hover:border-slate-700 hover:bg-slate-50"
                          }
                        `}
                      >
                        {skill.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Cluster: ML & Data */}
            <div className="tree-node bg-white/95 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold tracking-wider uppercase text-purple-600">
                    Machine Learning &amp; Data
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {mlCluster.map((skill) => {
                    const isHovered = hoveredSkill?.id === skill.id;
                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`
                          px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase
                          border transition-all duration-200 cursor-pointer select-none
                          ${
                            isHovered
                              ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105 -translate-y-0.5"
                              : "bg-white text-slate-800 border-slate-300 hover:border-slate-700 hover:bg-slate-50"
                          }
                        `}
                      >
                        {skill.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Central Stem dropping down to Bottom Cluster */}
          <div className="w-0.5 h-10 bg-indigo-500 my-1 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500" />
          </div>

          {/* Bottom Cluster: Languages & Infrastructure */}
          <div className="tree-node w-full max-w-4xl bg-white/95 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600">
                Languages &amp; Systems Infrastructure
              </span>

            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {systemsCluster.map((skill) => {
                const isHovered = hoveredSkill?.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase
                      border transition-all duration-200 cursor-pointer select-none
                      ${
                        isHovered
                          ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105 -translate-y-0.5"
                          : "bg-white text-slate-800 border-slate-300 hover:border-slate-700 hover:bg-slate-50"
                      }
                    `}
                  >
                    {skill.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Info Card on Hover */}
          <div className="mt-8 w-full max-w-xl min-h-[52px] flex items-center justify-center p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center transition-all duration-300">
            {hoveredSkill ? (
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                <span className="font-extrabold text-slate-900">
                  {hoveredSkill.title}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">
                  {hoveredSkill.description}
                </span>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-slate-400 italic">
                Hover over any skill pill to view application details
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
