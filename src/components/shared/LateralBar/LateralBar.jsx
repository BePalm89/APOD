import React from "react";
import "./LateralBar.css";
import LateralText from "../LateralText/LateralText";
import SocialNetwrok from "../SocialNetwork/SocialNetwrok";
import Flex from "../../../styled-components/Flex";

const LateralBar = () => {
  return (
    <div className="lateral-nav-container">
      <LateralText></LateralText>
      <SocialNetwrok></SocialNetwrok>
    </div>
  );
};

export default LateralBar;
