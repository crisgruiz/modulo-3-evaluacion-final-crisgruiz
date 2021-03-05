import "../styleSheets/layout/FilterByName.scss";
import FilterByName from "./FilterByName";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} value={props.value} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default Filters;
