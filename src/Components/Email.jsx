import React from "react";
import Confetti from "react-confetti";
import "./Card.css";
import "./LeaderBoard.css";
import { AiFillStar } from "react-icons/ai";

const Email = () => {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="card-container">
        <div className="card-header">
          <h1
            style={{
              display: "block",
            }}
          >
            Congratulations!
          </h1>
        </div>
        <div className="card-body">
          <b>Hi,</b>
          <br />
          <p>
            Thank you for your interest in our ASVA Monthly Hackathon! We were
            happy to see so many entries and hope you enjoyed partaking in it as
            much as we did. For those who didn’t win, don’t worry! There are
            plenty of other hackathons in the near future. Thank you again for
            your participation.
          </p>
          <b>
            Cheers,
            <br />
            ASVA
          </b>
        </div>
      </div>
    </>
  );
};

export default Email;
