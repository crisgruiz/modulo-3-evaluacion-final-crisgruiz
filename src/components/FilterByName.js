import "../styleSheets/FilterByName.scss";

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
export default FilterByName;
