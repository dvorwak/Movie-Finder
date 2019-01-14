import { MovieActionTypes } from "./types";

export const searchRequestAction = (query: string) => {
  return {
    type: MovieActionTypes.FETCH_MOVIES_REQUEST,
    payload: { query }
  };
};

export const getNewPageAction = (query: string, page: number) => {
  return { type: MovieActionTypes.GET_NEW_PAGE, payload: { query, page } };
};
