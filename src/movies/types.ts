export interface SearchResponseState {
  isLoading: boolean;
  movies: Movie | object;
  error: string | "";
  currentPage: number | 1;
}

export interface MovieState {
  movies: SearchResponseState;
  query: QueryState;
  page: PaginationState;
}
interface Movie {
  [key: string]: string;
}

export interface QueryState {
  query: string;
}
export interface PaginationState {
  currentPage: number;
}

export enum MovieActionTypes {
  FETCH_MOVIES_REQUEST = "@@MOVIE/FETCH_MOVIES_REQUEST",
  FETCH_MOVIES_SUCCESS = "@@MOVIE/FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR = "@@MOVIE/FETCH_MOVIES_ERROR",
  SET_MOVIE_QUERY = "@@MOVIE/SET_MOVIE_QUERY",
  CLEAR_MOVIE_QUERY = "@@MOVIE/CLEAR_MOVIE_QUERY",
  SET_CURRENT_PAGE = "@@MOVIE/SET_CURRENT_PAGE"
}
