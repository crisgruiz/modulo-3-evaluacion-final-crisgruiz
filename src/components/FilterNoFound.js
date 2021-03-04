const FilterNoFound = (props) => {
  return (
    <>
      <button className="returnBtn" onClick={props.handleReturn}>
        Volver
      </button>
      <p className="noFound">
        No hay ningún personaje que coincida con el criterio de búsqueda.
      </p>
    </>
  );
};
export default FilterNoFound;
