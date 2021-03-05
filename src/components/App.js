import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";

import CharacterList from "./CharacterList";
import Filters from "./Filters";
import FilterNoFound from "./FilterNoFound";
import CharacterDetail from "./CharacterDetail";
import CharacterNoFound from "./CharacterNoFound";
import logo from "../images/logo.png";
import "../styleSheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [specie, setSpecies] = useState("All");

  //Llamamos a los datos de la API
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //Filtrado de datos según nombre y/o especie
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    }
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      return specie === "All" ? true : character.specie === specie;
    });

  //Función asociada al botón de volver para limpiar los campos de filtrado
  const handleReturn = () => {
    setName("");
    setSpecies("All");
  };
  //Botón de reset para limpiar los input
  const handleReset = () => {
    setName("");
    setSpecies("All");
  };

  const renderCharacterList = () => {
    if (filterCharacters.length === 0) {
      return <FilterNoFound handleReturn={handleReturn} />;
    } else {
      return (
        <>
          <Filters
            handleFilter={handleFilter}
            handleReset={handleReset}
            value={name}
          />
          <CharacterList characters={filterCharacters} />
        </>
      );
    }
  };

  const renderDetail = (props) => {
    const idUrl = props.match.params.id;
    const selectCharacter = characters.find((character) => {
      return character.id === parseInt(idUrl);
    });
    if (selectCharacter) {
      return <CharacterDetail character={selectCharacter} />;
    } else {
      return <CharacterNoFound handleReset={handleReturn} />;
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Rick and Morty" className="header__logo" />
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" render={renderCharacterList} />
          <Route path="/CharacterDetail/:id" render={renderDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
