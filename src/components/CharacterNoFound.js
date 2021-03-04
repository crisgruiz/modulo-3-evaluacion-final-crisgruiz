import { Link } from "react-router-dom";
const CharacterNoFound = () => {
  return (
    <>
      <Link to={"/"} className="returnBtn">
        Volver
      </Link>
      <p className="noFound">Página no encontrada</p>
    </>
  );
};
export default CharacterNoFound;
