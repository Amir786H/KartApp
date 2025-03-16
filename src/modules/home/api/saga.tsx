import { fetchApiData } from "./api";
import { GET_HOME_CONTENT } from "./constants";
import { setData, setError, setLoading } from "./slice";
import { put, call, takeEvery } from "redux-saga/effects";


/**
 * A saga that fetches data from the API and updates the home state.
 *
 * Dispatches the following actions:
 *
 * - `home/setLoading` with `true` to set the loading state
 * - `home/setData` with the fetched data
 * - `home/setError` with the error message if the fetch fails
 */
function* fetchApiDataSaga(): any {
    try {
        yield put(setLoading());
        const data = yield call(fetchApiData);
        yield put(setData(data));
    } catch (error: any) {
        yield put(setError(error.message));
    }
}

/**
 * Watches for the `GET_HOME_CONTENT` action and runs the `fetchApiDataSaga`
 * saga when it is dispatched.
 *
 * This saga is the main entry point for the home feature's side effects.
 */
function* homeSaga() {
    yield takeEvery(GET_HOME_CONTENT, fetchApiDataSaga);
}

export default homeSaga;