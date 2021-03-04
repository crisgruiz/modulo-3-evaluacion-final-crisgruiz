import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <section>
      <Link to={"/"} className="returnBtn">
        Volver
      </Link>
      <section className="detail-container">
        <img
          className="detail-img"
          src={props.character.image}
          alt={props.character.name}
        />
        <h2 className="detail-name">{props.character.name}</h2>
        <h3>Especie: {props.character.specie}</h3>
        <h3>Planeta: {props.character.origin}</h3>
        <h3>Estado: {props.character.status}</h3>
        <h3>NºEspisodios: {props.character.episodes}</h3>
      </section>
    </section>
  );
};

export default CharacterDetail;
