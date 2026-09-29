import type { ExperienceItem } from "./constantTtypes";

const experienceData: ExperienceItem[] = [
  {
    period: "May 2026 – Jul 2026",
    title: "Robotics & Reinforcement Learning Intern",
    subtitle: "IIT Mandi",
    location: "On-site",
    details: [
      "Developed a goal-conditioned <strong>SAC-based deep RL controller</strong> for fault-tolerant hover control of the <strong>Crazyflie V2.1</strong> nano-quadrotor.",
      "Engineered a <strong>Gymnasium + PyBullet</strong> environment with per-motor fault injection, target-altitude conditioning, reward shaping, and automated evaluation.",
      "Achieved <strong>0.0598 m mean hover error</strong> at 74.5% motor efficiency using Domain-Randomized SAC across evaluated actuator-fault scenarios.",
      "Demonstrated improved fault robustness over <strong>PID and Zero-Shot SAC</strong>, surviving a 26% adjacent-motor degradation where both baseline controllers failed."
    ],
  },
  {
    period: "Jun 2025 – Aug 2025",
    title: "AI & Generative AI Intern",
    subtitle: "YBI Foundation",
    location: "Remote",
    details: [
      "Built an <strong>NLP document Q&A prototype</strong> that retrieves relevant content from uploaded documents and generates context-aware LLM responses.",
      "Implemented preprocessing, text extraction, chunking, and lexical retrieval before generation.",
      "Built a grounded <strong>GenAI workflow</strong> that feeds retrieved context to the LLM, reducing unsupported generations.",
    ],
  },
];

export default experienceData;
