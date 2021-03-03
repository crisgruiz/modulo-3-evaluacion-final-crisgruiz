import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import "../styleSheets/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  return (
    <div className="App">
      <h1 className="title">rick and morty</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
