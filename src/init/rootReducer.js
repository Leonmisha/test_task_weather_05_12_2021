import { combineReducers } from 'redux';

import bootstrap from '../components/bootstrap/store/reducer'
import geolocation from '../components/geolocation/store/reducer'
import weather from '../components/weather/store/reducer'

export const rootReducer = combineReducers({
  bootstrap,
  geolocation,
  weather
});
