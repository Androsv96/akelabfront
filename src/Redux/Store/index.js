import { createStore, applyMiddleware } from "redux";
import reducers from "../Reducers/";
import reduxSaga from "redux-saga";

const sagaMiddleware = reduxSaga();

export default function configureStore() {
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  };
}