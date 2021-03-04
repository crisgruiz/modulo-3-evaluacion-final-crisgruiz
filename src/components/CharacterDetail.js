import React from "react";
import { Link } from "react-router-dom";
import "../styleSheets/CharacterDetail.scss";

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <section className="detailContainer">
      <Link to={"/"} className="returnBtn">
        Volver
      </Link>
      <section className="detailCard">
        <img
          className="detailCard__image"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="detailCard__text">
          <h2 className="detailCard__text--name">{props.character.name}</h2>
          <h3>Especie: {props.character.specie}</h3>
          <h3>Planeta: {props.character.origin}</h3>
          <h3>Estado: {props.character.status}</h3>
          <h3>NºEspisodios: {props.character.episodes}</h3>
        </div>
      </section>
    </section>
  );
};

export default CharacterDetail;
