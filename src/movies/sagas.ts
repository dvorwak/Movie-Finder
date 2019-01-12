import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import { MovieAPI } from "./api";
import { MovieActionTypes } from "./types";

export function* movieAPIfetchMoviesBySearchString(action: AnyAction) {
  try {
    const response = yield call(MovieAPI.searchMovie, action.payload);

    const payload = response ? response.data : {};
    yield put({
      type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
      payload: payload.results,
      meta: { page: payload.page }
    });
    yield put({
      type: MovieActionTypes.SET_CURRENT_PAGE,
      payload: payload.page
    });
  } catch (error) {
    yield put({
      type: MovieActionTypes.FETCH_MOVIES_ERROR,
      payload: error
    });
  }
}

export function* movieAPIWatchFetchMovieBySearchString() {
  yield takeLatest(
    MovieActionTypes.FETCH_MOVIES_REQUEST,
    movieAPIfetchMoviesBySearchString
  );
}
