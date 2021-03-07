import "../styleSheets/layout/FilterNoFound.scss";
import PropTypes from "prop-types";

const FilterNoFound = (props) => {
  return (
    <section className="noFound">
      <button className="noFound__returnBtn" onClick={props.handleReturn}>
        Back
      </button>
      <p className="noFound__text">
        There aren't any character with this filter options.
      </p>
    </section>
  );
};

FilterNoFound.propTypes = {
  handleReturn: PropTypes.func,
};
export default FilterNoFound;
