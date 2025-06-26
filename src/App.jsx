import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <div className="index main-content">
        <Banner />
        <div className="gallery">
          {logements.map((appart) => (
            <Card key={appart.id} logement={appart} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
