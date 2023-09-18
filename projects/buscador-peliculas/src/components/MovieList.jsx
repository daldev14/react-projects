import PropTypes from "prop-types";

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ),
};

export default function MovieList({ movies }) {
  return (
    <ul className="movies__container">
      {movies?.map(({ id, title, year, poster }) => {
        return (
          <li key={id} className="movie__item">
            <h2 className="movie__title">{title}</h2>
            <p className="movie_year">{year}</p>
            <img
              src={poster}
              alt={`${title} movie poster`}
              className="movie__poster"
            />
          </li>
        );
      })}
    </ul>
  );
}
