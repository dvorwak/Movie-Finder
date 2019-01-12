import { all } from "redux-saga/effects";
import { movieAPIWatchFetchMovieBySearchString } from "../movies/sagas";

export default function* rootSaga() {
  yield all([movieAPIWatchFetchMovieBySearchString()]);
}
