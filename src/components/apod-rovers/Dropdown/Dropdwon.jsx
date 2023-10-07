import React from "react";
import Flex from "../../../styled-components/Flex";
import "./Dropdown.css";

const Dropdwon = ({ label, options, value, onChange }) => {
  return (
    <Flex direction="column" gap="0.5rem" basis="20%">
      <label htmlFor="apis">{label}:</label>
      <select value={value} onChange={onChange} id={label.toLowerCase()}>
        <option value="">Choose an {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Flex>
  );
};

export default Dropdwon;
