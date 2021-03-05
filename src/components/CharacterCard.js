import "../styleSheets/layout/CharacterCard.scss";
import death from "../images/death.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const statusIcon = () => {
    if (props.character.status !== "Dead") {
      return "";
    } else {
      return <img className="card__state--icon" src={death} alt="dead" />;
    }
  };

  return (
    <Link
      to={`/CharacterDetail/${props.character.id}`}
      className="characterLink"
    >
      <article className="card">
        <div className="title">
          <p className="card__state">{statusIcon()}</p>
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

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  specie: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
