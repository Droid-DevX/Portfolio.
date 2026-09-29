import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { publicationData } from "../../../constants";
import { timelineAnimation } from "../../../animations/timelineAnimation";

const Publications = ({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const dummyTitle = document.createElement("div");
        timelineAnimation(containerRef.current, dummyTitle as any);
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 py-16"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight text-center sm:text-left">
          Publications
        </h2>

        <div
          ref={containerRef}
          className="p-6 sm:p-10 rounded-2xl bg-white shadow-xl border border-slate-200/80"
        >
          {/* Timeline container */}
          <div className="relative pl-6 sm:pl-8 space-y-10">
            {/* Vertical line */}
            <div className="timeline-line absolute left-0 top-0 w-1 h-full rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]" />

            {publicationData.map((pub, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <span className="timeline-dot absolute -left-[20px] sm:-left-[22px] top-2 w-2.5 h-2.5 rounded-full border-2 bg-indigo-600 border-white shadow-[0_0_10px_rgba(79,70,229,0.4)]" />

                {/* Content */}
                <div className="space-y-2 timeline-item">
                  {/* Row: year + type badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-xs sm:text-sm uppercase tracking-wide text-indigo-600">
                      {pub.period}
                    </p>
                    <span className="text-xs px-2 py-0.5 rounded-md border text-indigo-700 bg-indigo-50 border-indigo-200">
                      {pub.type}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md border font-medium ${
                        pub.subtitle.toLowerCase().includes("review")
                          ? "text-amber-700 bg-amber-50 border-amber-200"
                          : pub.subtitle.toLowerCase().includes("published")
                          ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                          : "text-slate-600 bg-slate-50 border-slate-200"
                      }`}
                    >
                      {pub.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {pub.title}
                  </p>

                  {/* Venue */}
                  <p className="text-sm sm:text-base font-medium text-slate-600 italic">
                    {pub.venue}
                  </p>

                  {/* Detail bullets */}
                  <ul className="list-disc text-sm sm:text-base space-y-2 pl-5 text-slate-700 mt-1">
                    {pub.details.map((d, i) => (
                      <li
                        key={i}
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: d }}
                      />
                    ))}
                  </ul>

                  {/* Links */}
                  {pub.links && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {pub.links.arxiv && (
                        <a
                          href={pub.links.arxiv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                        >
                          arXiv ↗
                        </a>
                      )}
                      {pub.links.doi && (
                        <a
                          href={pub.links.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          DOI ↗
                        </a>
                      )}
                      {pub.links.github && (
                        <a
                          href={pub.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {pub.links.pdf && (
                        <a
                          href={pub.links.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                        >
                          PDF ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
