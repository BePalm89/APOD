import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <div>
          <h2>404</h2>
          <h3>Wiston we have a problem!!</h3>
        </div>
        <p>
          The image for the selected date is not availble, please selected an
          other day or another rover
        </p>
      </div>
      <img src="/src/assets/images/not-found.svg"></img>
    </div>
  );
};

export default NotFound;
