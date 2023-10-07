import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <div className="title-page-container">
      <h1 className="title-page">{title}</h1>
    </div>
  );
};

export default Title;
