const CharacterCard = (props) => {
  return (
    <article>
      <h2 className="name">{props.character.name}</h2>
      <img
        src={props.character.image}
        alt={props.character.image}
        className="image"
      />
      <p className="specie">{props.character.specie}</p>
    </article>
  );
};
export default CharacterCard;
