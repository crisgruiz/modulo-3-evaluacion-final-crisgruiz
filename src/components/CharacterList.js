import React from "react";
import CharacterCard from "./CharacterCard";
// import PropTypes from "prop-types";
// import "../StyleSheets/PokemonList.scss";

class CharacterList extends React.Component {
  render() {
    const characterElements = this.props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section>
        <ul className="cards">{characterElements}</ul>
      </section>
    );
  }
}

export default CharacterList;
