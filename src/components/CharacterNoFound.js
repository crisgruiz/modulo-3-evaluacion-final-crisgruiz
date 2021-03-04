import "../styleSheets/CharacterNoFound.scss";
import { Link } from "react-router-dom";
const CharacterNoFound = () => {
  return (
    <section className="noPage">
      <Link to={"/"} className="noPage__returnBtn">
        Volver
      </Link>
      <p className="noPage__text">Página no encontrada</p>
    </section>
  );
};
export default CharacterNoFound;
