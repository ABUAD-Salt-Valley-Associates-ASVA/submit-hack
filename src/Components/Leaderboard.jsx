import React from "react";
import Confetti from "react-confetti";
import "./Card.css";
import "./LeaderBoard.css";
import { AiFillStar } from "react-icons/ai";

const LeaderBoard = () => {
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
            Leader Board
          </h1>
        </div>
        <div className="card-body">
          <table id="leaderboard">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    color: "#FFD700",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                  }}
                >
                  <AiFillStar /> 1
                </td>
                <td>John Doe</td>
                <td>100</td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "#C0C0C0",
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                  }}
                >
                  <AiFillStar /> 2
                </td>
                <td>Jane Doe</td>
                <td>90</td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "1.2rem",
                    color: "#a52a2a82",
                    fontStyle: "italic",
                  }}
                >
                  <AiFillStar /> 3
                </td>
                <td>John Doe</td>
                <td>100</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jane Doe</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
