import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
// import FilterNoFound from "./FilterNoFound";
import CharacterDetail from "./CharacterDetail";
import CharacterNoFound from "./CharacterNoFound";
import "../styleSheets/App.scss";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //Lo hago con if porque si luego quiero añadir el filtrado por especie, necesito diferenciar en la función sobre qué input estamos haciendo cambios. Si al final sólo hago un filtro no sería necesario
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    }
  };

  const filterCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(name.toUpperCase());
  });

  const renderCharacterList = () => {
    return (
      <>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filterCharacters} />
      </>
    );
  };

  const renderDetail = (props) => {
    const idUrl = props.match.params.id;
    const selectCharacter = characters.find((character) => {
      return character.id === parseInt(idUrl);
    });
    console.log(selectCharacter);
    if (selectCharacter) {
      console.log("Entro en el if");
      return <CharacterDetail character={selectCharacter} />;
    } else {
      return <CharacterNoFound />;
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Rick and Morty" className="logo" />
      {/* <Filters handleFilter={handleFilter} /> */}
      {/* <CharacterList characters={filterCharacters} /> */}
      <Switch>
        <Route exact path="/" render={renderCharacterList} />
        <Route path="/CharacterDetail/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
