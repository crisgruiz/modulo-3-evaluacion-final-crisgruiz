import "../styleSheets/CharacterCard.scss";
import death from "../images/death.png";

import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link
      to={`/CharacterDetail/${props.character.id}`}
      className="characterLink"
    >
      <article className="card">
        <div className="title">
          <p className="card__state">
            {props.character.status !== "Dead" ? (
              ""
            ) : (
              <img className="card__state--icon" src={death} alt="dead" />
            )}
          </p>
          <h2 className="card__name">{props.character.name}</h2>
        </div>
        <img
          src={props.character.image}
          alt={props.character.name}
          className="card__image"
        />
        <p className="card__specie">{props.character.specie}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
