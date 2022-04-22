import React from "react";
import "./Button.scss";
function Button({ children, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted " : ""}custom-botton`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
