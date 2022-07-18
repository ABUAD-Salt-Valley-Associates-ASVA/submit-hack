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
        {alert("CONGRATULATIONS TO OUR WINNERS!!!")}
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
                <th>Score(%)</th>
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
                <td>James Winner</td>
                <td>82</td>
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
                <td>Amaino Samuel O</td>
                <td>78</td>
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
                <td>Chukwuneke Michelle</td>
                <td>78</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Omorodion Osarogie Yoma</td>
                <td>76</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Diri Ibinabo Daniel</td>
                <td>74</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Iyeuma Godfrey (obfuscated)</td>
                <td>66</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Rodrick Kamsiyonna Eniofor</td>
                <td>64</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Ibrahim Noah</td>
                <td>54</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Bassey</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
