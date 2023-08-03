import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="tinder-button">
      {children}
    </button>
  );
};

export default Button;
