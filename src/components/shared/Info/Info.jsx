import React from "react";
import "./Info.css";

export const Info = ({ label, text }) => {
  return (
    <div className="info-container">
      <p>
        <span> {label}: </span>
        {text}
      </p>
    </div>
  );
};
