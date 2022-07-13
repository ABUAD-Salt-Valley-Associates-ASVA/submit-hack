import React from "react";
import Countdown from "react-countdown";
import "./Card.css";
import Timer from "./Timer";

const disp = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Timer />;
  } else {
    return (
      <>
        <div
          className="card-container"
          style={{
            color: "white",
            background: "rgb(9 229 188 / 44%)",
          }}
        >
          <div className="card-header">
            <h1>
              <Countdown date="2022-07-16" />
            </h1>
          </div>
          <div className="card-body" sty>
            Why your Blood dey Hot!!! Calm Down e never start.
          </div>
        </div>
      </>
    );
  }
};

const First = () => {
  return <Countdown date="2022-07-16" renderer={disp} />;
};

export default First;
