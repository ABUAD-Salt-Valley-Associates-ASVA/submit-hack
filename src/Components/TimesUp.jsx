import React from "react";
import "./Card.css";

const TimesUp = () => {
  return (
    <>
      <div
        className="card-container"
        style={{
          color: "white",
          background: "rgb(229 9 9 / 44%)",
        }}
      >
        <div className="card-header">
          <h1>Time's Up !!!</h1>
        </div>
        <div className="card-body">
          Thank you for participating. Stay tuned for the results.
        </div>
      </div>
    </>
  );
};

export default TimesUp;
