import React from "react";
import Flex from "../../../styled-components/Flex";
import { getToday } from "../../../utils/helper";
import "./InputData.css";

const InputDate = ({ value, onChange }) => {
  const today = getToday;
  return (
    <Flex direction="column" gap="0.5rem" basis="20%">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          defaultValue={value}
          onChange={onChange}
          id="date"
          max={today}
        ></input>
    </Flex>
  );
};

export default InputDate;
