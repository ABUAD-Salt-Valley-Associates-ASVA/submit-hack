import Card from "./Components/Card";
import Bg from "./Components/Bg";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="back-g">
        <Bg />
      </div>
      <div className="content">
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
