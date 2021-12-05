import { handleActions } from 'redux-actions';

import { setCoords, setLocationName } from './actions';

const initial = {
    name: '',
    latitude: 0,
    longitude: 0
};

export default handleActions({
    [setCoords]: (state, { payload: { latitude, longitude } }) => ({ ...state, latitude, longitude }),
    [setLocationName]: (state, { payload: name }) => ({ ...state, name })
}, initial);
