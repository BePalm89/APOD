import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const Button = ({ label }) => {
  return (
    <Link to="/apod-mars">
      <button className="btn">{label}</button>
    </Link>
  );
};

export default Button;
