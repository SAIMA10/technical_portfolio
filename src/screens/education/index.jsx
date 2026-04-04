import React, { useLayoutEffect, useRef, useState } from "react";
import "./styles.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import ModalView from "../../components/modal";
import { colors } from "../../constants";
import HoverTextAnimation from "../../components/hover-text-animation";
import Text from "../../components/typography";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdSchool } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    title: "Khalifa University",
    place: "Abu Dhabi",
    description: "MSc Computer Science",
    timePeriod: "August 2025 - July 2026",
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
  {
    id: 2,
    title: "Pune Institute of Computer Technology",
    place: "Pune",
    description: "B.E. Computer Science",
    timePeriod: "August 2019 - June 2023",
    bgColor: colors["orange"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    link: "https://github.com/SAIMA10/Game_Of_Life_MPI",
  },
  {
    id: 3,
    title: "Our Own English High School",
    place: "Dubai",
    description: "High Senior Secondary Certificate",
    timePeriod: "August 2019 - June 2023",
    bgColor: colors["purple_1"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
];

const Education = () => {
  //   const sectionRef = useRef(null);
  //   const trackRef = useRef(null);

  //   useLayoutEffect(() => {
  //     const section = sectionRef.current;
  //     const track = trackRef.current;
  //     if (!section || !track) return;

  //     const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 20);

  //     const ctx = gsap.context(() => {
  //       gsap.to(track, {
  //         x: getScrollAmount,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top top",
  //           end: () => `+=${track.scrollWidth - window.innerWidth + 20}`,
  //           scrub: 1,
  //           pin: ".education-sticky-frame",
  //           invalidateOnRefresh: true,
  //           anticipatePin: 1,
  //         },
  //       });
  //     }, section);

  //     return () => ctx.revert();
  //   }, []);

  return (
    <>
      <section className="education-parent-container">
        <div className="education-sticky-frame">
          <div className="education-header">
            <HoverTextAnimation text="EDUCATION" />
          </div>
          <div className="education-wrapper">
            {educationData?.map((edu) => {
              return (
                <motion.div
                  className="education-card-container"
                  style={{ backgroundColor: edu?.bgColor }}
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
                      <IoMdSchool
                        color={edu?.primaryColor}
                        className="card-icon education-card-div"
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
                        color={edu?.color}
                      >
                        {edu?.title}
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
                        color={edu?.color}
                      >
                        {edu?.description}
                      </Text>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
