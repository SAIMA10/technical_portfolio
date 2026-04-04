import React from "react";
import { colors } from "../../constants";
import "../typography/styles.css";

/* 
variants: 
*/

const Text = ({
  children,
  variant = "",
  fontSize = 13,
  color = "whiteText",
  className,
  onClick,
  clickable = false,
  ...props
}) => {
  const baseClass = "text";
  const variantClass = `text-${variant}`;
  const clickableClass = clickable ? "clickable-text" : "";
  const colorClass = `text-color-${color}`;

  return (
    <span
      className={`${baseClass} ${variantClass} ${colorClass} ${clickableClass} ${className || ""}`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
