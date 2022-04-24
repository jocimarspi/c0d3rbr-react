import React from "react";
import "./Buttons.css";

const Button = (props) => {
  const getButtonClasses = () => {
    return `button
    ${props.operation ? "operation" : " "}
    ${props.double ? "double" : " "}
    ${props.triple ? "triple" : " "}
  `;
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={() => props.onClick && props.onClick(props.label)}
    >
      {props.label}
    </button>
  );
};

export default Button;
