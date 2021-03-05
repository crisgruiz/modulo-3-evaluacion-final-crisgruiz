import "../styleSheets/layout/Filter.scss";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} value={props.value} />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          specie={props.specie}
        />
      </form>
    </section>
  );
};

Filters.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default Filters;
