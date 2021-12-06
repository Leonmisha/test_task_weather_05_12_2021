import { put, select, take, call } from "@redux-saga/core/effects";

import { getWeatherCity, normalizeWeatherRecord } from "../../../../api/weather";

import { setIsSearching, setResults, startSearch } from "../actions";
import { queryString } from '../selector';

const saga = function* () {
    while (true) {
        yield take(startSearch);
        yield put(setIsSearching(true));
        const query = yield select(queryString)
        try {
            const response = yield call(getWeatherCity, query)
            if (response.status === 200) {
                const results = response.data.list.map(normalizeWeatherRecord)
                yield put(setResults(results))
            } else {
                yield put(setResults(null))
            }
        } catch(err) {
            yield put(setResults(null))
        }
        yield put(setIsSearching(false));
    }
}

export default saga
