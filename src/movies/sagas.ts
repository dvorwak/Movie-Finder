import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import { MovieAPI } from "./api";
import { MovieActionTypes } from "./types";

export function* movieAPIfetchMoviesBySearchString(action: AnyAction) {
  try {
    yield put({
      type: MovieActionTypes.SET_MOVIE_QUERY,
      payload: action.payload.query
    });
    const response = yield call(MovieAPI.searchMovie, action.payload);

    const payload = response ? response.data : {};
    yield put({
      type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
      payload
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

export function* movieAPIFetchNewPage(action: AnyAction) {
  try {
    const response = yield call(MovieAPI.getNewPage, action.payload);
    const payload = response ? response.data : {};
    yield put({ type: MovieActionTypes.FETCH_MOVIES_SUCCESS, payload });
  } catch (error) {
    yield put({ type: MovieActionTypes.FETCH_MOVIES_ERROR, payload: error });
  }
}

export function* movieAPIWatchFetchMovieBySearchString() {
  yield takeLatest(
    MovieActionTypes.FETCH_MOVIES_REQUEST,
    movieAPIfetchMoviesBySearchString
  );
}

export function* watchGetNewPage() {
  yield takeLatest(MovieActionTypes.GET_NEW_PAGE, movieAPIFetchNewPage);
}
