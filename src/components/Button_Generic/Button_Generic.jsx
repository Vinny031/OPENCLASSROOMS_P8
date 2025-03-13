import React from "react";
import PropTypes from "prop-types";
import "./Button_Generic.scss";

const Button_Generic = ({ children, onClick, className }) => {
  return (
    <button className={`button_generic ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button_Generic.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button_Generic.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button_Generic;
