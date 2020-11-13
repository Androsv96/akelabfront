import { API_URL, METHOD_GET } from "../Utils/constants";
import { put, call, takeLatest } from "redux-saga/effects";
import { GET_ALL_MOVIES_INIT, GET_All_MOVIES_SUCCESS, SET_NEW_ERROR, } from "../Redux/Actions";

/* Api */
import apiCall from "../Api";

export function* getMovies({ payload }) {
    try {

        const response = yield call(apiCall, API_URL, METHOD_GET, payload);

        if (response.error) {
            yield put({ type: SET_NEW_ERROR, errorMsg: response.errorMsg });
        } else {
            yield put({ type: GET_All_MOVIES_SUCCESS, response });
        }
    } catch (error) {
        yield put({
            type: SET_NEW_ERROR,
            errorMsg: "Hubo un problema al realizar la petición."
        });
    }
}


//Watchers
export default function* movies() {
    yield takeLatest(GET_ALL_MOVIES_INIT, getMovies);
}