import { put, take } from "@redux-saga/core/effects";
import { call } from "ramda";

import getUserLocation from "../../../geolocation/store/saga";



import { initializeApp, setInit } from "../actions";

const saga = function* () {
    yield take(initializeApp);
    yield call(getUserLocation)
    yield put(setInit(true));
}
export default saga
