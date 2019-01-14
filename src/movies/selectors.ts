import { createSelector } from "reselect";
import { GlobalState } from "../store/rootReducer";
import { keys } from "lodash";
/*
type MovieSearchResponseSelectorType = (
  state: GlobalState
) => SearchResponseState;
type QuerySelectorType = (state: GlobalState) => QueryState;
type PageSelectorType = (state: GlobalState) => PaginationState;

export const movieSearchResponseSelector: MovieSearchResponseSelectorType = (
  state: GlobalState
) => state.movieReducer.movies;
export const querySelector: QuerySelectorType = (state: GlobalState) =>
  state.movieReducer.query;
export const pageSelector: PageSelectorType = (state: GlobalState) =>
  state.movieReducer.page;

export const getSortedMovies = createSelector(
  [movieSearchResponseSelector, pageSelector],
  (movieResponse, pageData) => {
    const { movies } = movieResponse;
    const { currentPage } = pageData;
    return movies.filter((movie) => movie.)
  }
)
*/
type MovieSearchResponseSelectorType = (state: GlobalState) => any[];
const movieSearchResponseSelector: MovieSearchResponseSelectorType = (
  state: GlobalState
) => state.movieReducer.searchResponse.response.results;

const currentSearchResponse = (state: GlobalState) =>
  state.movieReducer.searchResponse.response;

export const pageSelector = (state: GlobalState) => state.movieReducer.page;

export const getMoviesById = createSelector(
  [movieSearchResponseSelector],
  (moviesById) => {
    return keys(moviesById).map((key: any) => moviesById[key]);
  }
);

export const paginationInfo = createSelector(
  [currentSearchResponse, pageSelector],
  (res, page) => {
    const canNext = page + 1 > res.total_pages;
    const canPrevious = page - 1 <= 0;
    return {
      page,
      maxPage: res.total_pages,
      totalResults: res.total_results,
      canNext,
      canPrevious
    };
  }
);

export const isLoadingMovies = (state: GlobalState) =>
  state.movieReducer.searchResponse.isLoading;
