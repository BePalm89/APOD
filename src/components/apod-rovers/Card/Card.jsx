import React from "react";
import { Info } from "../../shared/Info/Info";
import "./Card.css";

const Card = ({ data, api }) => {
  const {
    title,
    date,
    explanation,
    url,
    cameraName,
    roverStatus,
    totalPhotos,
  } = data;

  return (
    <div className="card">
      <div className="card-img">
        <img src={url} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-title">
          <div className="position">
            <h2>{title}</h2>
            <p>{date}</p>
          </div>
        </div>
        <div className="card-info">
          {api === "apod" && <p> {explanation}</p>}
          {api === "rover" && (
            <div className="info-rover">
              <Info label={"Name of the camera"} text={cameraName}></Info>
              <Info label={"Rover status"} text={roverStatus}></Info>
              <Info label={"Total photos"} text={totalPhotos}></Info>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
