import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";
import Timer from "./Components/Timer";
import Leaderboard from "./Components/Leaderboard";
import TimesUp from "./Components/TimesUp";

function App() {
  return (
    <>
      <div className="back-g">
        <Bg />
      </div>
      <div
        className="content"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Timer />

        {/* <TimesUp /> */}
        {/* <Leaderboard /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
