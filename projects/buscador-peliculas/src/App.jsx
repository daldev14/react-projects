import { useState, useCallback } from "react";
import useMovies from "./hooks/useMovies";
import debounce from "just-debounce-it";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const { movies, searchMovies } = useMovies({ search, sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearchMovie = useCallback(
    debounce((search) => {
      searchMovies({ search });
    }, 300),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies({ search });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    debounceSearchMovie(value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <header>
        <h1 className="header__title">Buscador de Películas</h1>
        <SearchForm
          search={search}
          sort={sort}
          handleChange={handleChange}
          handleSort={handleSort}
          handleSubmit={handleSubmit}
        />
      </header>
      <main>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No se encontraron películas para esta búsqueda</p>
        )}
      </main>
    </>
  );
}
