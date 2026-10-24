import type { ProjectListType } from "./constantTtypes";

const projectsList: ProjectListType = [
  {
    id: "fault-tolerant-quadrotor-systems",
    href: "#fault-tolerant-quadrotor-systems",
    title: "Fault-Tolerant Quadrotor Systems",
    // subtitle: "Deep RL + Fault-Resilient Robotics",
    description:
      "Two complementary approaches to fault-tolerant quadrotor systems: reinforcement learning for adaptive hover control and ROS 2-based fault isolation for resilient multi-robot coordination.",
    img: "/images/projects/crazyflie-fault-tolerant.avif",
    backgroundImg: "/images/projects/bg-crazyflie.avif",

    category: "Robotics",
    isFlagship: true,

    components: {
      recognition: {
        title: "Fault-Tolerant Hover Control",
        subtitle: "Domain-Randomized SAC",
        label: "Simulation · Single Drone",

        description:
          "Developed a goal-conditioned Soft Actor-Critic controller for the Crazyflie V2.1 to maintain stable hover under severe actuator degradation.",

        architecture: [
          "Target Altitude",
          "State + Fault Condition",
          "SAC Policy",
          "Motor Commands",
          "PyBullet Crazyflie",
        ],

        techStack:
          "Python, PyTorch, Stable-Baselines3, Gymnasium, PyBullet, SAC",

        githubLink: "https://github.com/Droid-DevX/RL-Enhanced-Guidance-Node-for-Actual-Fault-Tolerant-Control-of-Crazyflie-V2.1",
        demoLink: "https://drive.google.com/file/d/19H1_BuyMiUbMCGNdpXDZsEO4YnVo6rg3/view?usp=drive_link",

        technicalDetails: {
          problem:
            "Severe motor degradation can destabilize a quadrotor and cause conventional controllers to lose stable flight as the system dynamics change under actuator faults.",

          solution:
            "Built a custom Gymnasium + PyBullet environment with per-motor fault injection, target-altitude conditioning, integral-error state augmentation, reward shaping, and domain-randomized SAC training.",

          result:
            "Domain-Randomized SAC achieved a 0.0598 m mean hover error under the evaluated 74.5% adjacent-motor degradation scenario, while the evaluated PID and Nominal SAC baselines failed to maintain stable flight.",
        },
      },

      production: {
        title: "Resilient Quadrotor Swarms",
        // subtitle: "Firmware Fault Injection + ROS 2",
        label: "Hardware · Multi-Drone Swarm",

        description:
          "Developed a hardware-validated ROS 2 framework for resilient quadrotor swarms using firmware-level actuator fault injection and dynamic topology reconfiguration.",

        architecture: [
          "Crazyflie Swarm",
          "Firmware Fault Injection",
          "ROS 2",
          "Fault Detection",
          "Topology Reconfiguration",
        ],

        techStack:
          "C, C++, ROS 2, Crazyflie 2.1+, Python, Firmware",

        githubLink: "https://github.com/Droid-DevX/ROS2_Dynamic_Topology_Reconfiguration",
        demoLink: "https://drive.google.com/file/d/1yCbKMukj5H8DGEfMfsBgANOVAxU8d0sH/view?usp=drive_link",

        technicalDetails: {
          problem:
            "Actuator faults can destabilize multi-robot systems and propagate through swarm communication and consensus control.",

          solution:
            "Implemented firmware-level actuator fault injection on a physical Crazyflie swarm with ROS 2-based fault detection, faulty-agent isolation, consensus control, and dynamic topology reconfiguration.",

          result:
            "Hardware experiments on a three-Crazyflie swarm achieved 100% healthy-sub-swarm stability in the reported fault scenarios, with up to 99.7% reduction in neighbor tracking error after topology reconfiguration.",
        },
      },
    },
  },

  {
    id: "quadruped-locomotion",
    href: "#quadruped-locomotion",
    title: "Quadruped Control (Unitree A1)",
    // subtitle: "Deep RL + Legged Locomotion",
    description:
      "Two complementary RL controllers for the Unitree A1 quadruped: a blind sit-to-stand policy that generalises across flat, sloped, rough and stair terrains, and a PPO walking controller with joint-level PD torque control.",
    img: "/images/projects/bg-gallery.avif",
    backgroundImg: "/images/projects/bg-quadruped.png",

    category: "Robotics",
    isFlagship: true,

    components: {
      recognition: {
        title: "Sit-to-Stand Transition",
        subtitle: "MuJoCo · PPO · PD Control",
        label: "Phase 01 · Stand",
        description:
          "Developed a blind PPO controller that lets a Unitree A1 rise from a ground-sitting pose to a stable stand across flat, sloped, rough, and stair terrains using residual joint targets and a low-level PD controller.",

        architecture: [
          "27-D Blind Proprioception",
          "PPO Policy (2×256 Tanh)",
          "Residual Joint Targets",
          "Min-Jerk Nominal Trajectory",
          "PD Torque Control",
          "MuJoCo Unitree A1",
        ],

        techStack:
          "Python, MuJoCo, Stable-Baselines3, Gymnasium, PPO, PD Control",

        githubLink: "https://github.com/Droid-DevX/Quadruped_Sit_To_Stand",
        demoLink: "https://drive.google.com/file/d/1Bqv8Iu6auuXwl6Hs7-Pccv9kC8lY5bDo/view?usp=sharing",

        technicalDetails: {
          problem:
            "Rising from a seated pose requires coordinated hip and knee torques under balance constraints, and a blind policy with no contact sensing, vision, or terrain information must still adapt to slopes, rough ground, and stairs.",

          solution:
            "Trained a PPO policy that outputs residual offsets on a min-jerk sit-to-stand trajectory, tracked by a 500 Hz joint-level PD controller. Used a four-stage terrain curriculum (flat, 10° slope, rough heightfield, 8 cm stairs) followed by unified multi-terrain training, with domain randomization over friction, mass, inertia, torque noise, and action latency.",

          result:
            "Achieved 100% success on flat, 10° slope, and 8 cm stairs, and 80% on rough terrain (5 episodes each), with zero falls. Held-out tests reached 100% with 10 cm stairs, μ = 0.20 low friction, and +30% payload, with rise times of about 2.1–2.8 s.",
        },
      },

      production: {
        title: "Quadruped Walking",
        subtitle: "PyBullet · SB3 · PPO · PD Control",
        label: "Phase 02 · Walk",
        description:
          "PPO locomotion controller with joint-level PD torque control achieving 8.09 m forward traversal and 97.2% velocity-tracking accuracy across 5/5 flat-terrain evaluations.",

        architecture: [
          "Velocity Command",
          "55-D Proprioceptive State",
          "PPO Policy",
          "Joint Position Targets",
          "PD Torque Control",
          "PyBullet Unitree A1",
        ],

        techStack: "PyBullet, Stable-Baselines3, PPO, PD Control",

        githubLink: "https://github.com/Droid-DevX/Quadruped_Walking",
        demoLink: "https://drive.google.com/file/d/1Y69D--LeR8MioIjyvAnC0mOlrrMkvtD5/view?usp=sharing",

        technicalDetails: {
          problem:
            "Legged locomotion requires coordinating 12 joints with continuous proprioceptive feedback while maintaining balance across varied terrains.",

          solution:
            "55-D proprioceptive state, 12-D normalised joint-position action space, action smoothing, torque limiting, and orientation-aware reward shaping. Terrain curriculum: 5/5 successes at 0.50 difficulty.",

          result:
            "8.09 m forward traversal, 97.2% velocity-tracking accuracy, 5/5 flat-terrain evaluations (1000 steps). Terrain curriculum: 8.69 m displacement, bounded roll, pitch, and joint torques.",
        },
      },
    },
  },

  {
    id: "vision-free-manipulation",
    href: "#vision-free-manipulation",
    title: "Vision-Free Robotic Manipulation",
    subtitle: "MuJoCo · Kinematics · SB3 · PPO · PID",
    description:
      "Vision-free pick-and-place with randomised object positions and grasp, lift, transport, and release stages on a 7-DOF Franka Panda arm.",
    img: "/images/projects/bg-manipulation.avif",
    backgroundImg: "/images/projects/bg-manipulation.avif",
    category: "Robotics",
    techStack: "MuJoCo, Kinematics, Stable-Baselines3, PPO, PID",
    githubLink: "https://github.com/Droid-DevX/Robotic_Manipulation_Using_PPO_PID",
    demoLink: "https://drive.google.com/file/d/1K-7k3Ogc-awNc6n-wmC9euFT1gqZKHWw/view?usp=drive_link",

    technicalDetails: {
      problem:
        "Vision-based manipulation is brittle and slow; purely proprioceptive control with hierarchical policies enables generalisation to randomised placements without camera input.",

      solution:
        "Hierarchical PPO + PID for a 7-DOF Franka Panda: PPO outputs joint position targets, PID converts them to torques in MuJoCo. Staged reward shaping covers grasp, lift, transport, and release.",

      result:
        "PPO joint-position planning generalised better to randomised object placements compared to an IK + PID baseline.",
    },
  },

  {
    id: "vectorless-rag",
    href: "#vectorless-rag",
    title: "Vectorless RAG",
    subtitle: "BM25 · FastAPI · React · Groq · PyMuPDF",
    description:
      "Vector-database-free RAG with a custom BM25 inverted-index engine, page/section-aware chunking, query intent routing, and deterministic retrieval, no embeddings required.",
    img: "/images/projects/bg-rag.avif",
    backgroundImg: "/images/projects/bg-rag.avif",
    category: "LLM",
    techStack: "BM25, FastAPI, React, Groq, PyMuPDF",
    githubLink: "https://github.com/Droid-DevX/VectorlessRAG_QA",
    liveLink: "https://vectorless-rag-qa-gamma.vercel.app/",

    technicalDetails: {
      problem:
        "Vector databases add operational complexity and cost; deterministic lexical retrieval can deliver grounded, citation-backed answers without embeddings.",

      solution:
        "Custom BM25 inverted-index engine with page/section-aware chunking, query intent routing, and section-aware reranking. React + FastAPI app with Groq LLM backend.",

      result:
        "Grounded answers with source citations, deployed on Vercel + Render. No vector store required.",
    },
  },
];

export default projectsList;