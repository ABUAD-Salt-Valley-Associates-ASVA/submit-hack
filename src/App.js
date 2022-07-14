import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";
import Timer from "./Components/Timer";
import Leaderboard from "./Components/Leaderboard";
import TimesUp from "./Components/TimesUp";
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
          minHeight: "calc(100vh - 224px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Timer />
        {/*
          Abeg help me fix the Footer issue like its not on the bottom and also the centering of the h1 tag in the card header component
          when you're done comment the <Timer /> and uncomment the <First />.
        */}
        {/* <First /> */}

        {/* <TimesUp /> */}
        {/* <Leaderboard /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
