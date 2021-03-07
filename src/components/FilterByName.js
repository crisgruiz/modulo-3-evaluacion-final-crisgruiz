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
    <div className="formName">
      <label className="formName__label" htmlFor="name">
        Filter by name: 
      </label>
      <input
        className="formName__input-text"
        type="text"
        name="name"
        id="name"
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

FilterByName.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default FilterByName;
