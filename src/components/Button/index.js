import React from "react";

import "./Button.css";

const Button = ({ content, onButtonClick, type }) => {
  return (
    <div
      className={`Button ${content === "=" ? "equal" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
