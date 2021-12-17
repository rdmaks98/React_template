import React from "react";

const FeatureCard = (props) => {
  return (
    <>
      <div data-tilt>
        <div className="features-item">
          <div className="icon">
            <i className={props.icon}></i>
          </div>
          <h3>{props.heading}</h3>
          <p>{props.data}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;