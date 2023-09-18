const API_URL = import.meta.env.VITE_API_URL;
const API_key = import.meta.env.VITE_API_KEY;

export default async function getMovies({ search = "" } = {}) {
  if (search === "") return [];

  try {
    const API_TO_USE = `${API_URL}/?apikey=${API_key}&s=${search}`;
    const response = await fetch(API_TO_USE);
    const data = await response.json();

    if (!data.Search) return [];

    const movies = data.Search;

    return movies.map((movie) => {
      const { Title, Year, imdbID, Poster } = movie;
      return {
        id: imdbID,
        title: Title,
        year: Year,
        poster: Poster,
      };
    });
  } catch (error) {
    throw new Error("Error searching movies");
  }
}
