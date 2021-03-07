import React from "react";
import { Link } from "react-router-dom";
import death from "../images/death.png";
import PropTypes from "prop-types";
import "../styleSheets/layout/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const statusIcon = () => {
    if (props.character.status !== "Dead") {
      return "";
    } else {
      return <img className="detailCard__state--icon" src={death} alt="dead" />;
    }
  };
  return (
    <section className="detailContainer">
      <Link to={"/"} className="returnBtn">
        Back
      </Link>
      <section className="detailCard">
        <img
          className="detailCard__image"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="detailCard__text">
          <div className="Cardtitle">
            <h2 className="detailCard__text--name">{props.character.name}</h2>
            <p className="detailCard__state">{statusIcon()}</p>
          </div>
          <h3 className="detailCard__text--info">
            Specie: {props.character.specie}
          </h3>
          <h3 className="detailCard__text--info">
            Planet: {props.character.origin}
          </h3>

          <h3 className="detailCard__text--info">
            State: {props.character.status}
          </h3>

          <h3 className="detailCard__text--info">
            Episodes: {props.character.episodes}
          </h3>
        </div>
      </section>
    </section>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  specie: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
};

export default CharacterDetail;
