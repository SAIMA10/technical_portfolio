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

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    id: 1,
    title: "Bajaj Finserv Health, Pune",
    description:
      "Software Developement Engineer (July 2023 - April 2025) & Software Developer Intern (January 2023 - July 2023)",
    longDescription1:
      "Developed lead-generation features with strong testing practices, ensuring timely and high-quality delivery. Improved performance by reducing code complexity and optimizing rendering time from 3s to 1s. Delivered critical business tasks under tight deadlines while effectively communicating progress with stakeholders.",
    longDescription2:
      "Led end-to-end development of key product features, enhancing user experience and system performance. Improved code quality and reliability by optimizing APIs and reducing failures. Built dynamic, CMS-driven solutions enabling faster content updates without app releases. Collaborated closely with cross-functional teams to deliver scalable, efficient technical solutions.",
    longDescription3:
      "Contributed to deployment pipelines, analytics integration, and modern web applications using React and Next.js.",
    bgColor: colors["purple_2"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
  //   {
  //     id: 2,
  //     title: "Bajaj Finserv Health, Pune",
  //     description: "Software Developer Intern (January 2023 - July 2023)",
  //     longDescription1:
  //       "Developed lead-generation features with strong testing practices, ensuring timely and high-quality delivery.",
  //     longDescription2:
  //       "Improved performance by reducing code complexity and optimizing rendering time from 3s to 1s. Delivered critical business tasks under tight deadlines while effectively communicating progress with stakeholders.",
  //     longDescription3:
  //       "Gained deep understanding of backend systems and data flows, enabling efficient and scalable solutions.",
  //     bgColor: colors["orange"],
  //     color: "whiteText",
  //     primaryColor: colors["whiteText"],
  //   },
  {
    id: 2,
    title: "Avon Building Solution Pvt Ltd., Pune",
    description: "Engineering Intern (February 2022 - May 2022)",
    longDescription1: "Implemented ERPNext software on DigitalOcean.",
    longDescription2: "Acquired knowledge on cloud services and domains.",
    longDescription3:
      "Executed JavaScript commands to personalise the application",
    bgColor: colors["purple_1"],
    color: "baseColor",
    primaryColor: colors["baseColor"],
  },
  {
    id: 3,
    title: "REDA Chemicals, Dubai",
    description:
      "Web Developer & Graphic Design Intern (August 2021 - October 2022)",
    longDescription1:
      "Executed changes for a better user interface on the company website. Delivered posters for partner collaborations.",
    longDescription2:
      "Engaged in meetings with senior web developer for brainstorming ideas in terms of UI/UX.",
    longDescription3:
      "Worked with WordPress, PHP, HTML and CSS along with Adobe Photoshop and Adobe Illustrator.",
    bgColor: colors["baseColor"],
    color: "whiteText",
    primaryColor: colors["whiteText"],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [selectedExperience, setSelectedExperience] = useState(null);

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
          pin: ".experience-sticky-frame",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
