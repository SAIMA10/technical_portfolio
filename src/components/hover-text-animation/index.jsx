import React from "react";
import "./styles.css";
import Text from "../typography";

const HoverTextAnimation = ({ text }) => {
  return (
    <Text variant="poller-one" fontSize={58} className="coolors-text">
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="coolors-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Text>
  );
};

export default HoverTextAnimation;
