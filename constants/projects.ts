import type { ProjectListType } from "./constantTtypes";

const projectsList: ProjectListType = [
  {
    id: "fault-tolerant-quadrotor-systems",
    href: "#fault-tolerant-quadrotor-systems",
    title: "Fault-Tolerant Quadrotor Systems",
    subtitle: "Deep RL + Fault-Resilient Robotics",
    description:
      "Two complementary approaches to fault-tolerant quadrotor systems: reinforcement learning for adaptive hover control and ROS 2-based fault isolation for resilient multi-robot coordination.",

    // IMPORTANT:
    // Replace these with the exact image filenames you have inside:
    // public/images/projects/
    img: "/images/projects/crazyflie-fault-tolerant.avif",
    backgroundImg: "/images/projects/bg-crazyflie.avif",

    category: "Robotics",
    isFlagship: true,

    components: {
      recognition: {
        title: "Fault-Tolerant Hover Control",
        subtitle: "Domain-Randomized SAC",

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

        githubLink: "",

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
        subtitle: "Firmware Fault Injection + ROS 2",

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

        githubLink: "",

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
    id: "quadruped-locomotion",
    href: "#quadruped-locomotion",
    title: "Quadruped Locomotion (Unitree A1)",
    subtitle: "PyBullet · SB3 · PPO · PD Control",
    description:
      "PPO locomotion controller with joint-level PD torque control achieving 8.09 m forward traversal and 97.2% velocity-tracking accuracy across 5/5 flat-terrain evaluations.",
    img: "/images/projects/bg-gallery.avif",
    backgroundImg: "/images/projects/bg-quadruped.avif",
    category: "Robotics",
    techStack: "PyBullet, Stable-Baselines3, PPO, PD Control",
    githubLink: "https://github.com/Droid-DevX/Quadruped_Walking",

    technicalDetails: {
      problem:
        "Legged locomotion requires coordinating 12 joints with continuous proprioceptive feedback while maintaining balance across varied terrains.",

      solution:
        "55-D proprioceptive state, 12-D normalised joint-position action space, action smoothing, torque limiting, and orientation-aware reward shaping. Terrain curriculum: 5/5 successes at 0.50 difficulty.",

      result:
        "8.09 m forward traversal, 97.2% velocity-tracking accuracy, 5/5 flat-terrain evaluations (1000 steps). Terrain curriculum: 8.69 m displacement, bounded roll, pitch, and joint torques.",
    },
  },

  {
    id: "vectorless-rag",
    href: "#vectorless-rag",
    title: "Vectorless RAG",
    subtitle: "BM25 · FastAPI · React · Groq · PyMuPDF",
    description:
      "Vector-database-free RAG with a custom BM25 inverted-index engine, page/section-aware chunking, query intent routing, and deterministic retrieval — no embeddings required.",
    img: "/images/projects/rag.avif",
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

  {
    id: "sports-image-classification",
    href: "#sports-image-classification",
    title: "Sports Image Classification (100 Classes)",
    subtitle: "Python · CNN · Deep Learning",
    description:
      "Multi-class CNN trained to classify images across 100 sports categories with a large-scale image preprocessing pipeline.",
    img: "/images/projects/bg-clss.avif",
    backgroundImg: "/images/projects/bg-clss.avif",
    category: "Computer Vision",
    techStack: "Python, CNN, Deep Learning",
    githubLink:
      "https://github.com/Droid-DevX/Sports_Image_classification",

    technicalDetails: {
      problem:
        "Fine-grained sports image classification across 100 categories requires robust preprocessing and a well-tuned convolutional architecture.",

      solution:
        "End-to-end deep learning workflow: large-scale image preprocessing pipeline, CNN architecture design, and systematic evaluation.",

      result:
        "Functional multi-class classifier covering 100 sports categories, end-to-end from data preparation to evaluation.",
    },
  },
];

export default projectsList;