import PropTypes from "prop-types";

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  sort: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default function SearchForm({
  search,
  sort,
  handleChange,
  handleSort,
  handleSubmit,
}) {
  return (
    <form className="header__form" onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        placeholder="Avengers, Star Wars..."
        onChange={handleChange}
        value={search}
      />
      <input
        type="checkbox"
        name="sort"
        id="sort"
        onClick={handleSort}
        defaultChecked={sort}
        title="Ordernar por nombre"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
