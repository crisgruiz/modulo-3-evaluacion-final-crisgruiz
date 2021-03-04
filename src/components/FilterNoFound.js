import "../styleSheets/FilterNoFound.scss";

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
export default FilterNoFound;
