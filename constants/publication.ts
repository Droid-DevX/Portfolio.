import type { PublicationItem } from "./constantTtypes";

const publicationData: PublicationItem[] = [
  {
    period: "2026",
    title:
      "Actuator Fault-Tolerant Hover Control of Crazyflie Quadrotor: Benchmarking PID, SAC and Domain-Randomized SAC",
    subtitle: "Under Review",
    venue: "IEEE ICC 2027",
    type: "Conference",
    details: [
      "Developed a <strong>goal-conditioned SAC framework</strong> for fault-tolerant hover control of the Crazyflie V2.1 across a continuous altitude range of 0.2–2.5 m.",
      "Designed a <strong>PyBullet + Gymnasium</strong> environment with per-motor fault injection, goal conditioning, integral-error state augmentation, reward shaping, and automated evaluation.",
      "Domain-Randomized SAC completed the severe <strong>74.5% adjacent-motor degradation</strong> scenario with a <strong>0.0598 m mean hover error</strong>, while Nominal SAC and PID failed.",
    ],
    links: {
      arxiv: "",
      github: "",
    },
  },

  {
    period: "2026",
    title:
      "A ROS 2 Framework for Resilient Quadrotor Swarms: Firmware-Level Fault Injection and Dynamic Topology Reconfiguration",
    subtitle: "Accepted",
    venue: "ACODS 2026",
    type: "Conference",
    details: [
      "Co-developed an <strong>end-to-end ROS 2 framework</strong> for fault-isolation-based consensus control and dynamic topology reconfiguration on a physical swarm of three Crazyflie 2.1+ quadrotors.",
      "Implemented <strong>firmware-level actuator fault injection</strong> at 1 kHz and real-time fault detection with dynamic removal of faulty agents from the swarm communication topology.",
      "Hardware experiments restored <strong>100% healthy-sub-swarm stability</strong> under severe actuator faults and achieved up to <strong>99.7% reduction in neighbor tracking error</strong> compared with unmitigated baselines.",
    ],
    links: {
      arxiv: "",
      github: "",
    },
  },
];

export default publicationData;