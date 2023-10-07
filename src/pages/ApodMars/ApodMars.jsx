import React, { useState, useEffect } from "react";
import { getApodData, getRoverData } from "../../api/apodRover.js";
import Card from "../../components/apod-rovers/Card/Card";
import InputDate from "../../components/apod-rovers/InputData/InputData";
import Title from "../../components/shared/Title/Title";
import "./ApodMars.css";
import { getToday } from "../../utils/helper.js";
import Dropdwon from "../../components/apod-rovers/Dropdown/Dropdwon";
import { apisOptions, roverOptions } from "./selectOptions.js";
import NotFound from "../../components/shared/NotFound/NotFound.jsx";
import Spinner from "../../components/shared/Spinner/Spinner.jsx";

const ApodMars = () => {
  const today = getToday;
  const [title, setTitle] = useState("apod");

  const [date, setDate] = useState(today);
  const [apisSelect, setApisSelect] = useState("apod");
  const [roversSelect, setRoversSelect] = useState("curiosity");

  const [dataApod, setDataApod] = useState({});
  const [dataRover, setDataRover] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (apisSelect === "apod" && date <= today) {
      getApodData(date).then((data) => {
        setIsLoading(false);
        return setDataApod(data);
      });
    } else if (apisSelect === "rover") {
      getRoverData(date, roversSelect).then((data) => {
        setIsLoading(false);
        return setDataRover(data);
      });
    }
  }, [date, roversSelect, apisSelect]);

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeSelect = (event, targetSelect) => {
    if (targetSelect === `apis`) {
      setApisSelect(event.target.value);
      setTitle(event.target.value === "rover" ? "mars rover" : "apod");
    } else if (targetSelect === "rovers") {
      setRoversSelect(event.target.value);
    }
  };

  return (
    <>
      <Title title={title}></Title>
      <div className="form-group">
        <InputDate value={date} onChange={onChangeDate}></InputDate>
        <Dropdwon
          label={apisOptions.label}
          options={apisOptions.options}
          value={apisSelect}
          onChange={(e) => onChangeSelect(e, "apis")}
        ></Dropdwon>
        {apisSelect === "rover" && (
          <Dropdwon
            label={roverOptions.label}
            options={roverOptions.options}
            value={roversSelect}
            onChange={(e) => onChangeSelect(e, "rovers")}
          ></Dropdwon>
        )}
      </div>
      { isLoading ? <Spinner/> : 
      <div className="card-container">
        {(apisSelect === "apod" && dataApod && date <= today) ||
        (apisSelect === "rover" && dataRover) ? (
          <Card
            data={apisSelect === "apod" ? dataApod : dataRover}
            api={apisSelect}
          />
        ) : (
          <NotFound />
        )}
      </div>
      }
    </>
  );
};

export default ApodMars;
