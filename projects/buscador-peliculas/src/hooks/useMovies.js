import { useState, useRef, useCallback } from "react";
import getMovies from "../services/getMovies";
import { useMemo } from "react";

export default function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search);

  const searchMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    previousSearch.current = search;
    const dataMovies = await getMovies({ search });
    setMovies(dataMovies);
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, searchMovies };
}
