import "./App.css";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Card from "./Card.js";
import Data from "./Data.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const cardData = Data.map((item, index) => {
    return <Card key={index} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <Main />
        <div className="row section">{cardData}</div>
      </div>
    </div>
  );
}

export default App;
