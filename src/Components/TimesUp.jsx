import React from "react";
import Confetti from "react-confetti";
import "./Card.css";

const TimesUp = () => {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="card-container">
        <div className="card-header">
          <h1>Time's Up</h1>
        </div>
        <div className="card-body">
          Thank you for your submission. Stay tuned for the results.
        </div>
      </div>
    </>
  );
};

export default TimesUp;
