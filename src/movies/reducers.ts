import { AnyAction, combineReducers } from "redux";
import {
  SearchResponseState,
  QueryState,
  PaginationState,
  MovieActionTypes
} from "./types";

export const searchResponseReducer = (
  state: SearchResponseState = {
    isLoading: false,
    movies: {},
    error: "",
    currentPage: 1
  },
  action: AnyAction
) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_REQUEST:
      return { ...state, isLoading: true };
    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      const newMovies = action.payload.map(
        (movieObject: { id: number; title: string; release_date: string }) => {
          const movie = {
            id: movieObject.id,
            title: movieObject.title,
            releaseDate: movieObject.release_date
          };
          return { [action.meta.page]: movie };
        }
      );
      return { ...state, movies: newMovies, isLoading: false };
    case MovieActionTypes.FETCH_MOVIES_ERROR:
      const error = action.payload;
      return {
        ...state,
        movies: {},
        isLoading: false,
        error
      };
    case MovieActionTypes.SET_MOVIE_QUERY:
      const query = action.payload;
      return {
        ...state,
        query
      };
    case MovieActionTypes.CLEAR_MOVIE_QUERY:
      return { ...state, query: "" };
    case MovieActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export const queryReducer = (
  state: QueryState = { query: "" },
  action: AnyAction
) => {
  switch (action.type) {
    case MovieActionTypes.SET_MOVIE_QUERY:
      const query = action.payload;
      return { ...state, query };
    case MovieActionTypes.CLEAR_MOVIE_QUERY:
      return { ...state, query: "" };
    default:
      return state;
  }
};

const pageReducer = (
  state: PaginationState = { currentPage: 1 },
  action: AnyAction
) => {
  switch (action.type) {
    case MovieActionTypes.SET_CURRENT_PAGE:
      const pageNumber = action.payload;
      return { ...state, currentPage: pageNumber };
    default:
      return state;
  }
};

const movieReducer = combineReducers({
  movies: searchResponseReducer,
  query: queryReducer,
  page: pageReducer
});
export default movieReducer;
