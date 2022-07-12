import React from "react";
import Countdown from "react-countdown";
import TimesUp from "./TimesUp";
import Form from "./Form";
import "./Card.css";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <TimesUp />;
  } else {
    // Render a countdown
    return (
      <div className="card-container">
        <div className="card-header">
          <h1>Submit Your Code</h1>
          <div className="t-left">
            TIME LEFT: {days}:{hours}:{minutes}:{seconds}
          </div>
        </div>
        <div className="card-body">
          <Form />
        </div>
      </div>
    );
  }
};

const Timer = () => {
  return <Countdown date="2022-07-16" renderer={renderer} />;
};

export default Timer;
