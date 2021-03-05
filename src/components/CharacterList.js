import "../styleSheets/layout/CharacterList.scss";
import PropTypes from "prop-types";

import React from "react";
import CharacterCard from "./CharacterCard";
// import PropTypes from "prop-types";
// import "../StyleSheets/PokemonList.scss";

class CharacterList extends React.Component {
  render() {
    const characterElements = this.props.characters.map((character) => {
      return (
        <li key={character.id} className="cardsContainer__cards--element">
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section className="cardsContainer">
        <ul className="cardsContainer__cards">{characterElements}</ul>
      </section>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
