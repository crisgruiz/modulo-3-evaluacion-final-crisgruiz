import "../styleSheets/layout/FilterNoFound.scss";
import PropTypes from "prop-types";

const FilterNoFound = (props) => {
  return (
    <section className="noFound">
      <button className="noFound__returnBtn" onClick={props.handleReturn}>
        Volver
      </button>
      <p className="noFound__text">
        No hay ningún personaje que coincida con el criterio de búsqueda.
      </p>
    </section>
  );
};

FilterNoFound.propTypes = {
  handleReturn: PropTypes.func,
};
export default FilterNoFound;
