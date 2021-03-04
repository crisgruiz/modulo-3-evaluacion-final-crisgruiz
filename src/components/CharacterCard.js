import "../styleSheets/CharacterCard.scss";

import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link
      to={`/CharacterDetail/${props.character.id}`}
      className="characterLink"
    >
      <article className="card">
        <h2 className="card__name">{props.character.name}</h2>
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
