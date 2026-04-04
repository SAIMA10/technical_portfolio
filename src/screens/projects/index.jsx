import React, { useLayoutEffect, useRef, useState } from "react";
import "./styles.css";
import Text from "../../components/typography";
import HoverTextAnimation from "../../components/hover-text-animation";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { colors } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Smart Traffic Light Management System in Abu Dhabi using RL",
    description: "Content",
    images: [],
    bgColor: colors["purple_2"],
    color: "baseColor",
    // link: "https://github.com/safaminhaj/rl-traffic-control"
  },
  {
    id: 2,
    title: "Parallel Game of Life Using MPI",
    description: "Content",
    images: [],
    bgColor: colors["orange"],
    color: "whiteText",
    link: "https://github.com/SAIMA10/Game_Of_Life_MPI",
  },
  {
    id: 3,
    title: "AITutor: A self-improving multi-agent tutor",
    description: "Content",
    images: [],
    bgColor: colors["purple_1"],
    color: "baseColor",
    link: "https://github.com/SAIMA10/Ruya_AI_Hackathon",
  },
  {
    id: 4,
    title: "NL2TCTL: Extending Temporal Logic Translation",
    description: "Content",
    images: [],
    bgColor: colors["baseColor"],
    color: "whiteText",
    // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  },
  {
    id: 5,
    title: "Frontend Development Applications",
    description: "Content",
    images: [],
    bgColor: colors["purple_2"],
    color: "baseColor",
    // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  },
  {
    id: 5,
    title: "Frontend Development Applications",
    description: "Content",
    images: [],
    bgColor: colors["purple_2"],
    color: "baseColor",
    // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  },
  {
    id: 5,
    title: "Frontend Development Applications",
    description: "Content",
    images: [],
    bgColor: colors["purple_2"],
    color: "baseColor",
    // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  },
  {
    id: 5,
    title: "Frontend Development Applications",
    description: "Content",
    images: [],
    bgColor: colors["purple_2"],
    color: "baseColor",
    // link: "https://github.com/SAIMA10/Ruya_AI_Hackathon"
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

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
                <div
                  className="project-card-container"
                  style={{ backgroundColor: project?.bgColor }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                      flex: 1,
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
                    <Text
                      variant="unbounded"
                      fontSize={26}
                      color={project?.color}
                    >
                      {project?.title}
                    </Text>
                    <Text
                      variant="unbounded"
                      fontSize={14}
                      color={project?.color}
                    >
                      {project?.description}
                    </Text>
                  </div>
                  <Text
                    variant="unbounded"
                    fontSize={12}
                    color={project?.color}
                    className="project-card-footer-container"
                  >
                    Read more!
                  </Text>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
