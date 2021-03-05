import "../styleSheets/layout/FilterByName.scss";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterByName;
