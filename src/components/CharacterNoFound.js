import "../styleSheets/layout/CharacterNoFound.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterNoFound = (props) => {
  return (
    <section className="noPage">
      <Link to={"/"} className="noPage__returnBtn" onClick={props.handleReturn}>
        Volver
      </Link>
      <p className="noPage__text">Página no encontrada</p>
    </section>
  );
};

CharacterNoFound.propTypes = {
  handleReturn: PropTypes.func,
};

export default CharacterNoFound;
