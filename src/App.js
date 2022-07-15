import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";
import Timer from "./Components/Timer";
// import Leaderboard from "./Components/Leaderboard";
// import TimesUp from "./Components/TimesUp";
import First from "./Components/First";
import Title from "./Components/Title";

function App() {
  return (
    <>
      <div className="back-g">
        <Bg />
      </div>
      <Title />
      <div
        className="content"
        style={{
          minHeight: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Timer />
        {/* <First /> */}
        {/* <TimesUp /> */}
        {/* <Leaderboard /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
