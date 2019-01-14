import { AnyAction, combineReducers } from "redux";
import { MovieActionTypes } from "./types";

export const searchResponseReducer = (
  state = { isLoading: false, error: "", response: {} },
  action: AnyAction
) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_REQUEST:
      return { ...state, isLoading: true, response: {} };
    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, isLoading: false, response: action.payload };
    case MovieActionTypes.FETCH_MOVIES_ERROR:
      const error = action.payload;
      return { ...state, isLoading: false, error };
    default:
      return state;
  }
};

export const queryReducer = (state = "", action: AnyAction) => {
  switch (action.type) {
    case MovieActionTypes.SET_MOVIE_QUERY:
      const query = action.payload;
      return query;
    case MovieActionTypes.CLEAR_MOVIE_QUERY:
      return "";
    case MovieActionTypes.FETCH_MOVIES_ERROR:
      return "";
    default:
      return state;
  }
};

const pageReducer = (state = 1, action: AnyAction) => {
  switch (action.type) {
    case MovieActionTypes.SET_CURRENT_PAGE:
      const pageNumber = action.payload;
      return pageNumber;
    case MovieActionTypes.FETCH_MOVIES_ERROR:
      return 1;
    default:
      return state;
  }
};

const movieReducer = combineReducers({
  searchResponse: searchResponseReducer,
  query: queryReducer,
  page: pageReducer
});
export default movieReducer;
