import { put, call } from "@redux-saga/core/effects";

import { setCoords, setLocationName } from "../actions";

import { setCurrent } from "../../../weather/store/actions";
import { getWeatherLattLong, normalizeWeatherRecord } from './../../../../api/weather';

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject()
        }
    })
}

const getUserLocation = function* () {
    try {
        const { coords: { latitude, longitude } } = yield call(getCurrentPosition)
        yield put(setCoords({ latitude, longitude }))
        const response = yield call(getWeatherLattLong, latitude, longitude)
        if (response.status === 200) {
            const data = normalizeWeatherRecord(response.data)
            yield put(setLocationName(data.name))
            yield put(setCurrent(data))
        }
    } catch(err) {}
}

export default getUserLocation
