export interface SearchResponseState {
  isLoading: boolean;
  error: string | "";
  response: any;
}

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
}
export interface MovieState {
  searchResponse: SearchResponseState;
  query: QueryState;
  page: PaginationState;
}

export type QueryState = string;
export type PaginationState = number;

export enum MovieActionTypes {
  FETCH_MOVIES_REQUEST = "@@MOVIE/FETCH_MOVIES_REQUEST",
  FETCH_MOVIES_SUCCESS = "@@MOVIE/FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR = "@@MOVIE/FETCH_MOVIES_ERROR",
  SET_MOVIE_QUERY = "@@MOVIE/SET_MOVIE_QUERY",
  CLEAR_MOVIE_QUERY = "@@MOVIE/CLEAR_MOVIE_QUERY",
  SET_CURRENT_PAGE = "@@MOVIE/SET_CURRENT_PAGE",
  GET_NEW_PAGE = "@@MOVIE/GET_NEW_PAGE"
}
