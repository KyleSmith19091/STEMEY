import React from "react";
import PropTypes from "prop-types";

const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick}>
      <span>
        <span>{title}</span>
      </span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button;
