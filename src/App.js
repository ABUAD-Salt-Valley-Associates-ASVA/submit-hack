import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";
import Timer from "./Components/Timer";
import Leaderboard from "./Components/Leaderboard";
import TimesUp from "./Components/TimesUp";
import First from "./Components/First";

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
        {/*
          Abeg help me fix the logo issue and also the centerring of the h1 tag in the card header component
          when you're done comment the <Timer /> and uncomment the <First />.
        */}
        {/* <First /> */}

        {/* <TimesUp /> */}
        {/* <Leaderboard /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
