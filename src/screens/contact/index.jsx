import React, { useState } from "react";
import "./styles.css";
import HoverTextAnimation from "../../components/hover-text-animation";
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Text from "../../components/typography";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+971501533767");
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <HoverTextAnimation text="LET'S CONNECT" />
        <motion.div
          className="column-contact-body-container"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.25 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="row-contact-body-container">
            <div className="contact-item">
              <FaLinkedin className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/saima-ansari-66a99b188",
                      "_blank",
                    )
                  }
                >
                  Connect with me
                </Text>
              </motion.div>
            </div>

            <div className="contact-item">
              <BiLogoGmail className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={() =>
                    window.open("mailto:sam.ansari2002@gmail.com", "_blank")
                  }
                >
                  Email me
                </Text>
              </motion.div>
            </div>
            <div className="contact-item">
              <IoIosCall className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Give a call"}
                </Text>
              </motion.div>
            </div>
          </div>
          <div className="row-contact-body-container">
            <div className="contact-item">
              <FaInstagram className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/sam_ukiyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                      "_blank",
                    )
                  }
                >
                  Check my instagram
                </Text>
              </motion.div>
            </div>
            <div className="contact-item">
              <FaBehance className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={() =>
                    window.open(
                      "https://www.behance.net/saimaansari2",
                      "_blank",
                    )
                  }
                >
                  Check my designs
                </Text>
              </motion.div>
            </div>
            <div className="contact-item">
              <FaGithub className="content-icon" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Text
                  variant="raleway"
                  fontSize={18}
                  clickable
                  onClick={() =>
                    window.open("https://github.com/SAIMA10", "_blank")
                  }
                >
                  Check my projects
                </Text>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
