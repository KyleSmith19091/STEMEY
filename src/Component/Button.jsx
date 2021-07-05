import React from "react";

const Button = (props) => {
  return (
    <button>
      <span>
        <span>{props.title}</span>
      </span>
    </button>
  );
};

export default Button;
