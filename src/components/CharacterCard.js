import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link
      to={`/CharacterDetail/${props.character.id}`}
      className="character__item"
    >
      <article>
        <h2 className="name">{props.character.name}</h2>
        <img
          src={props.character.image}
          alt={props.character.name}
          className="image"
        />
        <p className="specie">{props.character.specie}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
