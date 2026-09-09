import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Text from "../../components/typography";
import linkedinIcon from "../../assets/images/linkedin.svg";
import githubIcon from "../../assets/images/github.svg";
import gmailIcon from "../../assets/images/google.svg";
import profilePicture from "../../assets/images/SAIMA_PIC.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import arrowRight from "../../assets/images/union-1.svg";
import { colors } from "../../constants";
import HoverTextAnimation from "../../components/hover-text-animation/index.jsx";
import { FaLinkedin, FaGithub, FaBehance, FaCat } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Projects from "../projects/index.jsx";
import Education from "../education/index.jsx";
import Experience from "../experience/index.jsx";
import Contact from "../contact/index.jsx";
import Research from "../research/index.jsx";
import ShinyText from "../../components/shiny-text/index.jsx";
import { useScreen } from "../../hooks/index.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const contentSlides = [
  {
    id: 1,
    text: "A passionate software engineer driven by creativity, collaboration, and problem-solving.",
    icon: <FaLinkedin className="content-icon" />,
    link: "https://www.linkedin.com/in/saima-ansari-66a99b188",
  },
  {
    id: 2,
    text: "A collaborative team player with an enthusiasm to build applications that are not only seamless but also engaging to use",
    icon: <FaGithub className="content-icon" />,
    link: "https://github.com/SAIMA10",
  },
  {
    id: 3,
    text: "Alongside development, I have a strong interest in graphic design, which helps me bring a creative edge to my work.",
    icon: <FaBehance className="content-icon" />,
    link: "https://www.behance.net/saimaansari2",
  },
  {
    id: 4,
    text: "I take keen interest in researching emerging areas like Agentic AI, and how these technologies can shape intelligent systems.",
    icon: <BiLogoGmail className="content-icon" />,
    link: "mailto:sam.ansari2002@gmail.com",
  },
];

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const researchRef = useRef(null);
  const contactRef = useRef(null);

  const isPhone = !useScreen("md");

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % contentSlides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {!isPhone ? (
        <div className="container-background">
          <div className="dashboard-container">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { delayChildren: 0.2, staggerChildren: 0.25 },
                },
              }}
              initial="hidden"
              animate="show"
              className="top-bar-container"
            >
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(researchRef)}
                >
                  Research
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(experienceRef)}
                >
                  Experience
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(projectsRef)}
                >
                  Projects
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(educationRef)}
                >
                  Education
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope-underline"
                  color="orange"
                  fontSize={16}
                  clickable
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1EvYyYGXdB5TUpLy9NsG-ABwOnrxZwSQF/view?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  Resume
                </Text>
              </motion.div>
            </motion.div>
          </div>
          {/* body */}
          <div className="dashboard-container">
            <div className="dashboard-body-container">
              <div className="dashboard-left-container">
                <motion.div
                  className="image-container"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                  <div className="card-inner">
                    <img
                      src={profilePicture}
                      alt="Saima"
                      className="profile-image"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="dashboard-right-container">
                <motion.div
                  style={{
                    marginBottom: "30px",
                    width: "100%",
                    textAlign: "right",
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <ShinyText
                    text="SAIMA ANSARI"
                    speed={2}
                    delay={0}
                    color={colors["purple_2"]}
                    shineColor={colors["whiteText"]}
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </motion.div>
                <div className="content-slider-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={contentSlides[activeIndex].id}
                      className="content-slide"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <Text
                        variant="unbounded"
                        fontSize={20}
                        className="content-slide-text"
                        color="purple1"
                      >
                        {contentSlides[activeIndex].text}
                      </Text>
                      <div
                        className="content-slide-action-footer"
                        style={{
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <a
                          href={contentSlides[activeIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contentSlides[activeIndex].icon}
                        </a>
                        <div
                          className="content-slider-arrow"
                          onClick={handleNext}
                        >
                          <img
                            src={arrowRight}
                            alt="arrow"
                            className="arrow-styles"
                          ></img>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <div ref={researchRef}>
            <Research />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "140px",
            }}
          >
            <Text variant="unbounded" fontSize={20} color="purple2">
              Designed and built by
              <Text
                variant="unbounded"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                Saima Ansari
              </Text>
              <FaCat className="cat-icon" />
            </Text>
          </motion.div>
        </div>
      ) : (
        <>
          <div className="phone-container-background">
            <div className="phone-dashboard-body-container">
              <motion.div
                className="phone-image-container"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <div>
                  <img
                    src={profilePicture}
                    alt="Saima"
                    className="profile-image"
                  />
                </div>
              </motion.div>

              <div className="phone-content-container">
                <motion.div
                  // style={{
                  //   marginBottom: "30px",
                  //   width: "100%",
                  //   textAlign: "right",
                  // }}
                  className="phone-name-wrap"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <ShinyText
                    text="SAIMA ANSARI"
                    speed={2}
                    delay={0}
                    color={colors["purple_2"]}
                    shineColor={colors["whiteText"]}
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    fontSize={32}
                  />
                </motion.div>

                <div className="phone-content-slider-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={contentSlides[activeIndex].id}
                      className="phone-content-slide"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <Text
                        variant="unbounded"
                        fontSize={14}
                        className="phone-content-slide-text"
                        color="purple1"
                      >
                        {contentSlides[activeIndex].text}
                      </Text>
                      <div
                        className="phone-content-slide-action-footer"
                        style={{
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <a
                          href={contentSlides[activeIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contentSlides[activeIndex].icon}
                        </a>
                        <div
                          className="phone-content-slider-arrow"
                          onClick={handleNext}
                        >
                          <img
                            src={arrowRight}
                            alt="arrow"
                            className="arrow-styles"
                          ></img>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-snap-scroll-container">
            <div className="phone-snap-section" ref={researchRef}>
              <Research />
            </div>
            <div className="phone-snap-section" ref={experienceRef}>
              <Experience />
            </div>
            <div className="phone-snap-section" ref={projectsRef}>
              <Projects />
            </div>
            <div className="phone-snap-section" ref={educationRef}>
              <Education />
            </div>
            <div className="phone-snap-section" ref={contactRef}>
              <Contact />
            </div>
          </div>
        </>
      )}
      {/* {isPhone && isOpenSidebar && (
        <>
          <div
            className="phone-sidebar-right-icon-container"
            onClick={() => setIsOpenSidebar((prev) => !prev)}
          >
            <FiX className="content-icon-small" />
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { delayChildren: 0.2, staggerChildren: 0.25 },
              },
            }}
            initial="hidden"
            animate="show"
            className="phone-sidebar-container"
          >
            <motion.div
              className="phone-sidebar-child-container"
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.25,
                    duration: 0.4,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(experienceRef)}
                >
                  Experience
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(projectsRef)}
                >
                  Projects
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(educationRef)}
                >
                  Education
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope"
                  fontSize={16}
                  clickable
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact
                </Text>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              >
                <Text
                  variant="manrope-underline"
                  color="orange"
                  fontSize={16}
                  clickable
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1lNqJ6l54z9yM8EXsNs7-Mn9X94MmUiC2/view?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  Resume
                </Text>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )} */}
    </>
  );
};

export default Dashboard;
