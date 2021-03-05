// import "../styleSheets/layout/FilterBySpecies.scss";
import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <div className="formSpecie">
      <label className="formSpecie__label" htmlFor="species">
        Filtrar por especie:
      </label>
      <select
        className="formSpecie__input-select"
        name="species"
        id="species"
        value={props.species}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
};

FilterBySpecies.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
export default FilterBySpecies;
