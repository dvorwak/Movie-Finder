import { all, fork } from "redux-saga/effects";
import {
  movieAPIWatchFetchMovieBySearchString,
  watchGetNewPage
} from "../movies/sagas";

export default function* rootSaga() {
  yield all([movieAPIWatchFetchMovieBySearchString, watchGetNewPage].map(fork));
}
