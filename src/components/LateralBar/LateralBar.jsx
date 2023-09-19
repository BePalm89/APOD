import React from "react";
import "./LateralBar.css";
import LateralText from "../shared/LateralText/LateralText";
import SocialNetwrok from "../shared/SocialNetwork/SocialNetwrok";

const LateralBar = () => {
  return (
    <div className="lateral-nav-container">
      <LateralText></LateralText>
      <SocialNetwrok></SocialNetwrok>
    </div>
  );
};

export default LateralBar;
