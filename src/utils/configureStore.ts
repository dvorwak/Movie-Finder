import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./../store/rootReducer";
import rootSaga from "./../store/rootSaga";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== "production"
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
