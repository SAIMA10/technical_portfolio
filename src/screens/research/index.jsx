import React, { useLayoutEffect, useRef, useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalView from "../../components/modal";
import HoverTextAnimation from "../../components/hover-text-animation";
import { colors } from "../../constants";
import Text from "../../components/typography";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { useScreen } from "../../hooks/index.jsx";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import thesisLatency from "../../assets/images/msc_thesis_latency.png";
import beImage from "../../assets/images/be_final_image.png";

gsap.registerPlugin(ScrollTrigger);

const researchData = [
  {
    id: 1,
    title:
      "Edge-Assisted Agentic Control for UAV Swarms: Structured Guidance, Mission-State Consensus, and Decentralized Coordination",
    shortDescription: "MSc Thesis (2026)",
    description: "MSc Thesis (2026)",
    longDescription1:
      "Designed and evaluated an edge-assisted agentic control framework for UAV swarms that transforms high-level operator intent into verified mission guidance, maintains decentralized mission-state consensus, and enables graph-aware local execution.",
    longDescription2:
      "The system separates slow semantic reasoning from fast control: an edge-based Generator–Verifier–Updater pipeline converts operator intent into structured, machine-readable guidance, while Cognitive Mission Consensus aligns mission priorities and coverage information across the swarm. A topology-aware reinforcement-learning policy then allows each UAV to make lightweight decentralized decisions using local observations, verified guidance, and neighbor information.",
    longDescription3:
      "The framework reduced mean planning latency by approximately 25% compared with naive LLM guidance, while maintaining comparable guidance effectiveness.",
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
    images: [thesisLatency],
    icon: (
      <FaGithub className="project-icon-link" color={colors["baseColor"]} />
    ),
    phoneIcon: (
      <FaFileAlt
        className="project-icon-phone-link"
        color={colors["baseColor"]}
      />
    ),
    link: "https://github.com/ayeps2000/agentic_auv",
    icon2: (
      <FaFileAlt
        className="project-icon-phone-link"
        color={colors["baseColor"]}
      />
    ),
    link2: "https://github.com/ayeps2000/agentic_auv",
    skills: ["Python", "MARL", "Agentic AI", "HPC", "ADMM", "LLMs"],
  },
  {
    id: 2,
    title: "Evaluation of an Individual’s Creditworthiness",
    shortDescription: "IEEE ASIANCON Research Paper (2023)",
    description:
      "A peer-to-peer lending framework that evaluates borrower creditworthiness using repayment behavior, SMS-derived information, and social-network relationships.",
    longDescription1:
      "Proposed a creditworthiness evaluation framework for peer-to-peer lending that aims to supplement traditional credit scoring with behavioral and relationship-based information. The system assigns borrowers a dynamic credit score and uses it to support lending recommendations.",
    longDescription2:
      "The approach incorporates SMS analysis using Natural Language Processing to understand transactional, promotional, and verification messages, while social-network analysis uses contact relationships and graph-based measures to model trust and connectivity between borrowers and potential lenders.",
    longDescription3:
      "Implemented the proposed approach as an Android peer-to-peer lending application with features for real-time borrower–lender handshakes, repayment tracking, credit-score updates, and recommendation-driven lending decisions. The application was developed using Java and Android Studio with Firebase Cloud Datastore.",
    bgColor: colors["orange"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    images: [beImage],
    imagesStyle: true,
    icon: (
      <FaGithub className="project-icon-link" color={colors["whiteText"]} />
    ),
    link: "https://ieeexplore.ieee.org/document/10269950",
    phoneIcon: (
      <FaFileAlt
        className="project-icon-phone-link"
        color={colors["baseColor"]}
      />
    ),
    icon2: (
      <FaFileAlt
        className="project-icon-phone-link"
        color={colors["baseColor"]}
      />
    ),
    skills: [
      "Java",
      "Android Studio",
      "Firebase",
      "NLP",
      "Social Network Analysis",
      "Credit Scoring",
      "P2P Lending",
    ],
  },
];

const Research = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isPhone = !useScreen("md");

  const [selectedResearch, setSelectedResearch] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 50);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 50}`,
          scrub: 1,
          pin: ".research-sticky-frame",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {!isPhone ? (
        <section className="research-parent-container">
          <div className="research-sticky-frame">
            <div className="research-header">
              <HoverTextAnimation text="RESEARCH" />
            </div>
            <div className="research-wrapper">
              {researchData?.map((exp) => {
                return (
                  <motion.div
                    className="research-card-container"
                    style={{ backgroundColor: exp?.bgColor }}
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
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "end",
                        }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                          },
                        }}
                      >
                        <GiArchiveResearch
                          color={exp?.primaryColor}
                          className="card-icon"
                        />
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
                          color={exp?.color}
                        >
                          {exp?.title}
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
                          fontSize={14}
                          color={exp?.color}
                        >
                          {exp?.description}
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
                        color={exp?.color}
                        // onClick={() => setIsModalOpen(true)}
                        onClick={() => setSelectedResearch(exp)}
                        className="research-card-footer-container"
                      >
                        Read more!
                      </Text>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="research-phone-section">
          <div className="research-phone-header">
            <HoverTextAnimation text="RESEARCH" />
          </div>
          <div className="research-phone-content">
            <div className="research-phone-wrapper">
              {researchData?.map((exp) => {
                return (
                  <motion.div
                    className="research-card-phone-container"
                    style={{ backgroundColor: exp?.bgColor }}
                  >
                    <motion.div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
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
                      viewport={{ once: true, amount: 0.3 }}
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
                          variant="unbounded"
                          fontSize={20}
                          color={exp?.color}
                        >
                          {exp?.title}
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
                          fontSize={14}
                          color={exp?.color}
                        >
                          {isPhone ? exp?.shortDescription : exp?.description}
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
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                          }}
                        >
                          <a
                            href={exp?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {isPhone ? exp?.phoneIcon : exp?.icon}
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <ModalView
        isOpen={!!selectedResearch}
        onClose={() => setSelectedResearch(null)}
        project={selectedResearch}
      />
    </>
  );
};

export default Research;
