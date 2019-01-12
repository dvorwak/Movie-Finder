import { combineReducers } from "redux";
import movieReducer from "../movies/reducers";
import { MovieState } from "../movies/types";

export interface GlobalState {
  movieReducer: MovieState;
}

export default () =>
  combineReducers<GlobalState>({
    movieReducer
  });
