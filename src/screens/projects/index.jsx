import React, { useLayoutEffect, useRef, useState } from "react";
import "./styles.css";
import Text from "../../components/typography";
import HoverTextAnimation from "../../components/hover-text-animation";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { colors } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalView from "../../components/modal";
import aiProjectImg from "../../assets/images/AI_project_img.png";
import dsProjectImg from "../../assets/images/DS_project_img.png";
import ruyaProjectImg from "../../assets/images/Ruya_project_img.png";
import notesProjectImg from "../../assets/images/notes_app.png";
import weatherProjectImg from "../../assets/images/weather_proj.png";
import expensesProjectImg from "../../assets/images/expenses_proj.png";
import portfolioProjectImg from "../../assets/images/portoflio.png";
import { FaGithub } from "react-icons/fa";
import { LuFileVideo } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrGamepad } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Smart Traffic Light Management System in Abu Dhabi using RL",
    description:
      "RL-based traffic signal control system that optimizes urban traffic flow using simulation-driven AI agents.",
    longDescription1: `Instead of relying on fixed-timing or rule-based systems, the model learns optimal traffic light policies through interaction with a simulated environment.`,
    longDescription2:
      "The system is built on top of the CityFlow traffic simulator and models real-world traffic scenarios (e.g., Abu Dhabi intersections). Multiple RL approaches are explored, including Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO), to train agents that minimize congestion, waiting time, and inefficient signal switching.",
    longDescription3:
      "Overall, the project demonstrates how reinforcement learning can be applied to real-world urban challenges, improving traffic efficiency through adaptive, data-driven decision-making.",
    images: [aiProjectImg],
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
    skills: ["Python", "RL", "PyTorch", "SB3", "NumPy", "Matplotlib", "Conda"],
    icon: (
      <FaGithub className="project-icon-link" color={colors["baseColor"]} />
    ),
    icon2: (
      <LuFileVideo className="project-icon-link" color={colors["baseColor"]} />
    ),
    link: "https://github.com/safaminhaj/rl-traffic-control",
    link2:
      "https://drive.google.com/file/d/1_bPI527K2FTiH6m7vf_r8RWQRNTH4Sa2/view?usp=sharing",
  },
  {
    id: 2,
    title: "Parallel Game of Life Using MPI",
    description:
      "Parallel implementation of Conway’s Game of Life using MPI with 1D and 2D domain decomposition to improve scalability and performance on large grids.",
    longDescription1:
      "This project implements a high-performance parallel version of Conway’s Game of Life on large grids using MPI. The simulation distributes the computation across multiple processes and uses halo-cell exchange between neighboring processes at every generation to preserve correctness in the cellular automaton update rules.",
    longDescription2:
      "The project was executed on an HPC environment using mpi4py. The performance study showed that 2D decomposition scaled better than 1D.",
    longDescription3:
      "Overall, this project demonstrates practical experience in parallel computing, distributed grid-based simulation, process communication, and performance evaluation on HPC systems.",
    images: [dsProjectImg],
    bgColor: colors["orange"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    icon: (
      <FaGithub className="project-icon-link" color={colors["whiteText"]} />
    ),
    link: "https://github.com/SAIMA10/Game_Of_Life_MPI",
    icon2: "",
    link2: "",
    skills: ["Python", "mpi4py", "MPI", "SLURM", "HPC", "Conda"],
  },
  {
    id: 3,
    title: "AITutor: A self-improving multi-agent tutor",
    description:
      "Built an AI-driven solution during the Ruya AI Hackathon focused on developing self-improving agent systems capable of learning, adapting, and optimizing their behavior.",
    longDescription1:
      "This project is a multi-agent personalized learning system built to deliver adaptive Python education. At its core, an orchestrator coordinates four specialized AI agents in a sequential pipeline for every student interaction.",
    longDescription2:
      "We have four specialized AI agents: Perception, Memory, Planning, and Evaluation. The Perception Agent uses Gemini to extract intent and emotional state from student input, while SentenceTransformers generate embeddings that the Memory Agent uses to retrieve relevant history from ChromaDB and maintain persistent skill profiles. The Planning Agent dynamically selects content and difficulty based on the student's progress, and the Evaluation Agent assesses answers using Gemini, computing a reinforcement-style learning signal to continuously refine personalization.",
    longDescription3:
      "After each interaction, skill levels are updated incrementally using a configurable learning rate, closing the feedback loop and making the system progressively more personalized over time.",
    images: [ruyaProjectImg],
    bgColor: colors["purple_1"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
    icon: (
      <FaGithub className="project-icon-link" color={colors["baseColor"]} />
    ),
    link: "https://github.com/SAIMA10/Ruya_AI_Hackathon",
    icon2: "",
    link2: "",
    skills: ["Python", "LLM", "RL", "ChromaDB", "RAG", "SentenceTransformers"],
  },
  //   {
  //     id: 4,
  //     title: "NL2TCTL: Extending Temporal Logic Translation",
  //     description: "Content",
  //     longDescription1: "bleh",
  //     longDescription2: "bleh",
  //     longDescription3: "bleh",
  //     images: [],
  //     bgColor: colors["baseColor"],
  //     color: "whiteText",
  //     primaryColor: colors["whiteText"],
  //     icon: <FaGithub className="content-icon" />,
  //     // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  //     icon2: "text",
  //     link2: "text",
  //     skills: ["PyTorch", "SB3", "NumPy", "Matplotlib", "Conda"],
  //   },
  {
    id: 4,
    title: "MERN-Stack Notes Application",
    description:
      "Built a full-stack notes application using the MERN stack that supports full CRUD operations. Implemented user authentication and login management on the backend using Express and Node.js.",
    longDescription1: "",
    longDescription2:
      "On the frontend, the app uses React with libraries such as Axios, React Router, Material UI, and React Toastify to build the user interface and handle API communication, routing, and user feedback. On the backend, it uses Express, MongoDB with Mongoose, JWT, and bcrypt for API development, database interaction, authentication, and password security.",
    longDescription3:
      "The backend exposes routes for both authentication and note management. The project demonstrates practical experience in full-stack development, REST API integration, database connectivity, and auth-protected application flows.",
    images: [notesProjectImg],
    bgColor: colors["baseColor"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    icon: (
      <FaGithub className="project-icon-link" color={colors["whiteText"]} />
    ),
    link: "https://github.com/SAIMA10/notes-app/tree/master",
    icon2: "",
    link2: "",
    skills: ["JavaScript", "ReactJS", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "Frontend Development Applications",
    description:
      "Developed interactive frontend applications including an expense tracker and a weather app, focusing on API integration, state management, and responsive UI design.",
    longDescription1:
      "The Expenses App allows users to track and manage their financial transactions. It focuses on handling dynamic state updates and creating an intuitive user experience for managing personal data.",
    longDescription2:
      "The Weather App integrates with external weather APIs to fetch real-time weather data. It demonstrates the ability to work with asynchronous data, handle API responses, and present dynamic information such as temperature, conditions, and forecasts.",
    longDescription3: "",
    images: [weatherProjectImg, expensesProjectImg],
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
    icon: (
      <TbReportMoney
        className="project-icon-link"
        color={colors["baseColor"]}
      />
    ),
    link: "https://github.com/SAIMA10/expenses-app",
    icon2: (
      <TiWeatherCloudy
        className="project-icon-link"
        color={colors["baseColor"]}
      />
    ),
    link2: "https://github.com/SAIMA10/weather-app",
    skills: ["JavaScript", "ReactJS", "HTML", "CSS", "Axios"],
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "Designed and developed an developer portfolio with game-inspired UI, leveraging GSAP, Framer Motion, and Spline to create immersive and engaging user experiences.",
    longDescription1:
      "I built my personal developer portfolio to showcase both technical skills and creativity through a game-inspired user interface. Instead of a traditional static portfolio, the design focuses on creating a fun, engaging, and visually dynamic experience for users.",
    longDescription2:
      "The application incorporates advanced animation libraries such as GSAP and Framer Motion to build smooth transitions, interactive elements, and motion-driven storytelling across the site. Additionally, Spline was explored and integrated to add 3D elements, enhancing visual depth and making the portfolio more immersive.",
    longDescription3: "Click the game console to see my portfolio!",
    images: [portfolioProjectImg],
    bgColor: colors["orange"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    icon: (
      <FaGithub className="project-icon-link" color={colors["whiteText"]} />
    ),
    link: "https://github.com/SAIMA10/portfolio",
    icon2: (
      <GrGamepad className="project-icon-link" color={colors["whiteText"]} />
    ),
    link2: "https://saima-ansari.netlify.app/",
    skills: ["JavaScript", "ReactJS", "gsap", "framer-motion", "Spline"],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 20);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 20}`,
          scrub: 1,
          pin: ".projects-sticky-frame",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="projects-parent-container" ref={sectionRef}>
        <div className="projects-sticky-frame">
          <div className="projects-header">
            <HoverTextAnimation text="PROJECTS" />
          </div>
          <div className="projects-wrapper" ref={trackRef}>
            {/* <div className="projects-container"> */}
            {projectsData?.map((project) => {
              return (
                <motion.div
                  className="project-card-container"
                  style={{ backgroundColor: project?.bgColor }}
                >
                  <motion.div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                      flex: 1,
                    }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.2,
                          staggerChildren: 0.25,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <Text
                        variant="poller-one"
                        fontSize={48}
                        color={project?.color}
                        className="project-card-id-container"
                      >
                        {project?.id}
                      </Text>
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <Text
                        variant="unbounded"
                        fontSize={26}
                        color={project?.color}
                      >
                        {project?.title}
                      </Text>
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <Text
                        variant="manrope"
                        fontSize={16}
                        color={project?.color}
                      >
                        {project?.description}
                      </Text>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Text
                      variant="unbounded"
                      fontSize={12}
                      color={project?.color}
                      // onClick={() => setIsModalOpen(true)}
                      onClick={() => setSelectedProject(project)}
                      className="project-card-footer-container"
                    >
                      Read more!
                    </Text>
                  </motion.div>
                </motion.div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
      </section>
      <ModalView
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
