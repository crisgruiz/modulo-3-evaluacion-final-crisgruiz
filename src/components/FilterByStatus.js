import "../styleSheets/layout/FilterBySpecies.scss";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };

  return (
    <div className="formSpecie">
      <label className="formSpecie__label" htmlFor="status">
        Filter by status:
      </label>
      <select
        className="formSpecie__input-select"
        name="status"
        id="status"
        value={props.status}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

export default FilterByStatus;
