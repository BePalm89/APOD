import React from "react";
import Flex from "../../../styled-components/Flex";
import "./ApiDescription.css";

const ApiDescription = ({ title, subtitle, description }) => {
  return (
    <Flex direction="column" gap="0.5">
      <div className="api-descrption-container">
          <h2> {title}</h2>
           {subtitle && <h4>{subtitle}</h4>}
          <p>{description}</p>
      </div>
    </Flex>

  );
};

export default ApiDescription;
