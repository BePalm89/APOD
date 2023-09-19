import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./LateralText.css";

const LateralText = () => {
  const path = useLocation().pathname;
  const [text, setText] = useState("Beautiful pictures");

  const setTextToDisplay = () => {
    switch (path) {
      case "/about":
        return setText("About apod and mars rover apis");
      case "/apod-mars":
        return setText("Astronomy picture of the day");
      default:
        return setText("Beautiful pictures");
    }
  };

  useEffect(() => {
    setTextToDisplay();
  }, [path]);

  return <p className="rotated-text">{text}</p>;
};

export default LateralText;
