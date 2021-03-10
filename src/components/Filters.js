import "../styleSheets/layout/Filter.scss";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
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
        <FilterByStatus
          handleFilter={props.handleFilter}
          status={props.status}
        />
        <button className="reset" type="reset" onClick={props.handleReset}>
          <i className="far fa-trash-alt card__reset--icon"></i>
          Reset
        </button>
      </form>
    </section>
  );
};

Filters.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Filters;
