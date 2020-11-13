import { all } from 'redux-saga/effects';

/* Sagas */
import movies from './movies';

export default function* rootSaga() {
    yield all([movies(),]);
}
