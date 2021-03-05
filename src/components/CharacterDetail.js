import React from "react";
import { Link } from "react-router-dom";
import death from "../images/death.png";
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
          <div className="title">
            <h2 className="detailCard__text--name">{props.character.name}</h2>
            <p className="detailCard__state">
              {props.character.status !== "Dead" ? (
                ""
              ) : (
                <img
                  className="detailCard__state--icon"
                  src={death}
                  alt="dead"
                />
              )}
            </p>
          </div>
          <h3>Specie: {props.character.specie}</h3>
          <h3>Planet: {props.character.origin}</h3>

          <h3>State: {props.character.status}</h3>

          <h3>Episodes: {props.character.episodes}</h3>
        </div>
      </section>
    </section>
  );
};

export default CharacterDetail;
