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

// gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    id: 1,
    title: "Bajaj Finserv Health",
    description: "Content",
    place: "Pune",
    role: "Software Development Engineer",
    timePeriod: "July 2023 - April 2025",
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
  {
    id: 2,
    title: "Bajaj Finserv Health",
    description: "Content",
    place: "Pune",
    role: "Software Development Engineer Intern",
    timePeriod: "Jan 2023 - July 2023",
    bgColor: colors["orange"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
    link: "https://github.com/SAIMA10/Game_Of_Life_MPI",
  },
  {
    id: 3,
    title: "Avon Building Solution Pvt Ltd.",
    description: "Content",
    place: "Pune",
    role: "Engineering Intern",
    timePeriod: "Feb 2022 - May 2022",
    bgColor: colors["purple_1"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
  {
    id: 4,
    title: "REDA Chemicals",
    description: "Content",
    place: "Dubai",
    role: "Web Developer and Graphic Designer Intern",
    timePeriod: "August 2021 - October 2022",
    bgColor: colors["baseColor"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <>
      <section className="experience-parent-container">
        <div className="experience-sticky-frame">
          <div className="experience-header">
            <HoverTextAnimation text="EXPERIENCE" />
          </div>
          <div className="experience-wrapper">
            {experienceData?.map((exp) => {
              return (
                <motion.div
                  className="experience-card-container"
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
                      <MdOutlineWorkOutline
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
                      onClick={() => setSelectedExperience(exp)}
                      className="experience-card-footer-container"
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
      <ModalView
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        project={selectedExperience}
      />
    </>
  );
};

export default Experience;
