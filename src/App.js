import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";
import Timer from "./Components/Timer";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
