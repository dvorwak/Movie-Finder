import axios from "axios";

interface SearchMovieOptions {
  query: string;
  page: number;
}

export const MovieAPI = {
  searchMovie({ query }: SearchMovieOptions) {
    if (!query || query === "") {
      return Promise.reject({
        status: "error",
        message: "Query Required For Movie Search"
      });
    }
    const encodedSearch = encodeURIComponent(query);

    return axios.get(
      `https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&query=${encodedSearch}`
    );
  },
  getNewPage({ query, page }: SearchMovieOptions) {
    if (!query || query === "") {
      return Promise.reject({
        status: "error",
        message: "Query Required For Movie Search"
      });
    }
    const encodedSearch = encodeURIComponent(query);

    return axios.get(
      `https://api.themoviedb.org/3/search/movie?page=${page}&include_adult=false&language=en-US&api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&query=${encodedSearch}`
    );
  }
};
