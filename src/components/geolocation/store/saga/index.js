import { put, call } from "@redux-saga/core/effects";

import { setCoords, setLocationName } from "../actions";

import { setCurrent } from "../../../weather/store/actions";
import { getWeatherLattLong } from './../../../../api/weather';

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject()
        }
    })
}

const normalizeWeatherData = (data) => ({
    ...data,
    weather: data.weather.map(w => ({ ...w, icon: `https://openweathermap.org/img/wn/${w.icon}@2x.png` }))
})

const getUserLocation = function* () {
    try {
        const { coords: { latitude, longitude } } = yield call(getCurrentPosition)
        yield put(setCoords({ latitude, longitude }))
        const response = yield call(getWeatherLattLong, latitude, longitude)
        if (response.status === 200) {
            const data = normalizeWeatherData(response.data)
            yield put(setLocationName(data.name))
            yield put(setCurrent(data))
        }
    } catch(err) {}
}

export default getUserLocation
