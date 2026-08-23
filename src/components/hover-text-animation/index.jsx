import React from "react";
import "./styles.css";
import Text from "../typography";
import ShinyText from "../shiny-text";
import { useScreen } from "../../hooks/index.jsx";

const HoverTextAnimation = ({ text }) => {
  const isPhone = !useScreen("md");
  var fontSize = isPhone ? 35 : 62;

  return (
    <Text variant="poller-one" fontSize={fontSize} className="coolors-text">
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="coolors-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Text>
  );
};

export default HoverTextAnimation;
