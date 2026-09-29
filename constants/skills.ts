import type { SkillsListType } from "./constantTtypes";

const mySkillsList: SkillsListType = [

  {
    id: "robotics-rl",
    title: "Robotics / RL",
    summary: "Deep reinforcement learning and robotic simulation frameworks.",
    features: [
      {
        id: "deep-rl",
        title: "Deep RL",
        description: "Policy learning for continuous control and locomotion tasks.",
      },
      {
        id: "ppo",
        title: "PPO",
        description: "Proximal Policy Optimization for locomotion and manipulation.",
      },
      {
        id: "sac",
        title: "SAC",
        description: "Soft Actor-Critic for fault-tolerant quadrotor hover control.",
      },
      {
        id: "kinematics",
        title: "Kinematics",
        description: "Forward and inverse kinematics for robotic arm control.",
      },
      {
        id: "pybullet",
        title: "PyBullet",
        description: "Physics simulation for quadruped and quadrotor environments.",
      },
      {
        id: "mujoco",
        title: "MuJoCo",
        description: "High-fidelity simulation for manipulation tasks.",
      },
      {
        id: "gymnasium",
        title: "Gymnasium",
        description: "Custom environment design with fault injection and reward shaping.",
      },
      {
        id: "ros2",
        title: "ROS 2",
        description: "Robot middleware for swarm fault injection and topology reconfiguration.",
      },
    ],
  },

  {
    id: "ml-dl",
    title: "ML / DL",
    summary: "Machine learning and deep learning libraries for model development.",
    features: [
      {
        id: "pytorch",
        title: "PyTorch",
        description: "Model development, training loops, and RL policy networks.",
      },
      {
        id: "tensorflow",
        title: "TensorFlow",
        description: "Deep learning model training and evaluation.",
      },
      {
        id: "scikit-learn",
        title: "Scikit-Learn",
        description: "Classical ML pipelines and feature engineering.",
      },
      {
        id: "opencv",
        title: "OpenCV",
        description: "Image processing and computer vision pipelines.",
      },
    ],
  },

  {
    id: "data",
    title: "Data",
    summary: "Data manipulation, numerical computing, and visualization.",
    features: [
      {
        id: "numpy",
        title: "NumPy",
        description: "Numerical arrays and mathematical operations.",
      },
      {
        id: "pandas",
        title: "Pandas",
        description: "Data manipulation and analysis.",
      },
      {
        id: "matplotlib",
        title: "Matplotlib",
        description: "Plotting training curves and evaluation results.",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools & Infrastructure",
    summary: "Development, deployment, and backend tooling.",
    features: [
      {
        id: "git",
        title: "Git",
        description: "Version control and collaborative development.",
      },
      {
        id: "streamlit",
        title: "Streamlit",
        description: "Rapid AI-focused web interfaces.",
      },
      {
        id: "fastapi",
        title: "FastAPI",
        description: "High-performance Python API backend.",
      },
      {
        id: "react",
        title: "React",
        description: "Frontend for full-stack AI application deployment.",
      },
      {
        id: "vercel",
        title: "Vercel",
        description: "Frontend hosting and deployment.",
      },
      {
        id: "render",
        title: "Render",
        description: "Backend service deployment.",
      },
    ],
  },

  {
    id: "languages",
    title: "Languages",
    summary: "Core programming languages used across all projects.",
    features: [
      {
        id: "python",
        title: "Python",
        description: "Primary language for RL, ML, data pipelines, and backend services.",
      },
      {
        id: "cpp",
        title: "C++",
        description: "Performance-critical and algorithmic programming.",
      },
      {
        id: "typescript",
        title: "TypeScript",
        description: "Typed JavaScript for frontend and full-stack projects.",
      },
    ],
  },

];

export default mySkillsList;