import { useState } from "react";
import { projectsList } from "../../../constants";
import type {
  ProjectType,
  ProjectSubComponent,
} from "../../../constants/constantTtypes";
import { track } from "@vercel/analytics/react";
import DetailItem from "./DetailItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { useTiltEffect } from "../../../animations";

/* ─────────────────────────────────────────────
   FILTER CATEGORIES
───────────────────────────────────────────── */

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Robotics", label: "Robotics" },
  { id: "LLM", label: "LLM" },
  { id: "Computer Vision", label: "Computer Vision" },
];

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

/* ─────────────────────────────────────────────
   ARCHITECTURE FLOW
───────────────────────────────────────────── */

const ArchitectureFlow = ({ steps }: { steps: string[] }) => (
  <div className="my-3 p-3.5 bg-slate-50/90 rounded-lg border border-slate-200/80 text-xs sm:text-sm">
    <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-2">
      System Architecture
    </span>

    <div className="flex flex-wrap items-center gap-1.5 leading-normal">
      {steps.map((step, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <span className="bg-white text-slate-800 border border-slate-200/90 px-2.5 py-1 rounded-md text-xs sm:text-sm font-semibold shadow-2xs">
            {step}
          </span>

          {idx < steps.length - 1 && (
            <span className="text-indigo-500 font-bold text-xs sm:text-sm select-none">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   FLAGSHIP SUB-CARD
───────────────────────────────────────────── */

const FlagshipSubCard = ({
  component,
  typeLabel,
}: {
  component: ProjectSubComponent;
  typeLabel: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const details = component.technicalDetails || component.details;

  return (
    <div className="flex-1 bg-slate-50/70 rounded-xl p-5 sm:p-6 border border-slate-200 flex flex-col justify-between">
      <div>
        {/* Label + Title */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block mb-1">
            {typeLabel}
          </span>

          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
            {component.title}
          </h3>

          {component.subtitle && (
            <p className="text-xs sm:text-sm font-medium text-indigo-600 mt-1">
              {component.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 mb-3 leading-relaxed">
          {component.description}
        </p>

        {/* Architecture */}
        {component.architecture && (
          <ArchitectureFlow steps={component.architecture} />
        )}

        {/* Tech Stack */}
        {component.techStack && (
          <div className="my-2.5 text-sm text-slate-700">
            <strong className="text-slate-900 font-bold">Tech:</strong>{" "}
            <span className="text-slate-700">
              {component.techStack}
            </span>
          </div>
        )}

        {/* Technical Details */}
        {details && (
          <div className="mt-3 pt-2 border-t border-slate-200/60">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
            >
              <span>
                {expanded
                  ? "Technical Details ↑"
                  : "Technical Details →"}
              </span>
            </button>

            {expanded && (
              <div className="mt-3 p-3.5 bg-white rounded-lg border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-1">
                  Technical Details
                </span>

                {details.problem && (
                  <DetailItem
                    label="Problem"
                    text={details.problem}
                  />
                )}

                {details.solution && (
                  <DetailItem
                    label="Solution"
                    text={details.solution}
                  />
                )}

                {details.result && (
                  <DetailItem
                    label="Result"
                    text={details.result}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-200/60">
        {component.githubLink && (
          <a
            href={component.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github text-xs sm:text-sm py-2 px-3.5"
            onClick={() =>
              track("project_opened", {
                project: component.title,
                type: "github",
              })
            }
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        )}

        {component.demoLink && (
          <a
            href={component.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo text-xs sm:text-sm py-2 px-3.5"
            onClick={() =>
              track("project_opened", {
                project: component.title,
                type: "demo",
              })
            }
          >
            <PlayIcon />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   FLAGSHIP PROJECT CARD
───────────────────────────────────────────── */

const FlagshipCard = ({ project }: { project: ProjectType }) => {
  const { cardRef, eventHandlers } = useTiltEffect();

  return (
    <div
      ref={cardRef}
      {...eventHandlers}
      id={project.id}
      className="project-card-item col-span-1 md:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm md:hover:shadow-md overflow-hidden"
    >
      {/* Banner */}
      <div className="project-card-image max-h-56" aria-hidden="true">
        <img
          src={project.backgroundImg || project.img}
          alt={`${project.title} project preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="project-card-image-overlay" />

        <span className="project-card-badge bg-slate-900 text-slate-100 border border-slate-700">
          Flagship Project
        </span>
      </div>

      {/* Main Content */}
      <div className="project-card-content p-5 sm:p-6">
        <div className="mb-4">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            {project.subtitle}
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            {project.title}
          </h2>

          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>

        <div className="my-4 border-t border-slate-100" />

        {/* LEFT + RIGHT */}
        {project.components && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* LEFT — DRL */}
            {project.components.recognition && (
              <FlagshipSubCard
                component={project.components.recognition}
                typeLabel="DEEP REINFORCEMENT LEARNING"
              />
            )}

            {/* RIGHT — FIRMWARE + ROS 2 */}
            {project.components.production && (
              <FlagshipSubCard
                component={project.components.production}
                typeLabel="FIRMWARE + ROS 2"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   STANDARD PROJECT CARD
───────────────────────────────────────────── */

const StandardProjectCard = ({
  project,
}: {
  project: ProjectType;
}) => {
  const { cardRef, eventHandlers } = useTiltEffect();
  const [showDetails, setShowDetails] = useState(false);

  const details =
    project.technicalDetails || project.projectDetails;

  return (
    <div
      ref={cardRef}
      {...eventHandlers}
      id={project.id}
      className="project-card-item bg-white border border-slate-200 rounded-xl shadow-sm md:hover:shadow-md"
    >
      {/* Image */}
      <div className="project-card-image" aria-hidden="true">
        <img
          src={project.backgroundImg || project.img}
          alt={`${project.title} project preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="project-card-image-overlay" />

        {project.subtitle && (
          <span className="project-card-badge">
            {project.subtitle}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="project-card-content">
        {project.category && (
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 block">
            {project.category}
          </span>
        )}

        <div className="mb-2">
          <h2 className="project-card-title">
            {project.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
          {project.description || details?.solution}
        </p>

        {project.architecture && (
          <ArchitectureFlow steps={project.architecture} />
        )}

        <div className="text-sm text-slate-700 mb-3">
          <strong className="text-slate-900 font-bold">
            Tech:
          </strong>{" "}
          {project.techStack || details?.techStack}
        </div>

        {/* Technical Details */}
        {details && (
          <div className="mb-4 pt-2 border-t border-slate-100">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
            >
              <span>
                {showDetails
                  ? "Technical Details ↑"
                  : "Technical Details →"}
              </span>
            </button>

            {showDetails && (
              <div className="mt-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-2.5">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-1">
                  Technical Details
                </span>

                {details.problem && (
                  <DetailItem
                    label="Problem"
                    text={details.problem}
                  />
                )}

                {details.solution && (
                  <DetailItem
                    label="Solution"
                    text={details.solution}
                  />
                )}

                {details.result && (
                  <DetailItem
                    label="Result"
                    text={details.result}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="project-card-actions">
          {(project.githubLink || details?.githubLink) && (
            <a
              href={project.githubLink || details?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
              aria-label={`View ${project.title} on GitHub`}
              onClick={() =>
                track("project_opened", {
                  project: project.title,
                  type: "github",
                })
              }
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          )}

          {(project.liveLink || details?.liveLink) && (
            <a
              href={project.liveLink || details?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
              aria-label={`Open live ${project.title}`}
              onClick={() =>
                track("project_opened", {
                  project: project.title,
                  type: "live",
                })
              }
            >
              <ExternalLinkIcon />
              Try
            </a>
          )}

          {(project.demoLink || details?.demoLink) && (
            <a
              href={project.demoLink || details?.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
              aria-label={`Watch ${project.title} demo`}
              onClick={() =>
                track("project_opened", {
                  project: project.title,
                  type: "demo",
                })
              }
            >
              <PlayIcon />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PROJECT GRID
───────────────────────────────────────────── */

const ShownProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  /* Card entrance animation */
  useGSAP(() => {
    const cards =
      gsap.utils.toArray<HTMLDivElement>(
        ".project-card-item"
      );

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.08,

          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
        }
      );
    });
  }, []);

  const filtered =
    activeFilter === "all"
      ? projectsList
      : projectsList.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div
      id="shownProject-cards"
      className="w-full max-w-7xl mx-auto"
    >
      {/* Filters */}
      <div
        className="project-filters mb-8 flex flex-wrap gap-2 justify-center"
        role="group"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`filter-btn ${
              activeFilter === filter.id
                ? "filter-btn-active"
                : ""
            }`}
            aria-pressed={
              activeFilter === filter.id
            }
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filtered.map((project) =>
          project.isFlagship ? (
            <FlagshipCard
              key={project.id}
              project={project}
            />
          ) : (
            <StandardProjectCard
              key={project.id}
              project={project}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ShownProjects;