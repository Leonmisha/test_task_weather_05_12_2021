import { handleActions } from 'redux-actions';

import { setCurrent, setCustomTemparature, setIsCustom } from './actions';

const customWeather =  {
    main: {
        temp: -10
    },
    name: "Custom(testing)",
    weather: [{
        description: "snow",
        icon: "https://openweathermap.org/img/wn/13n@2x.png"
    }]
}

const initial = {
    current: null,
    currentCustom: customWeather,
    isCustom: false
};

export default handleActions({
    [setCurrent]: (state, { payload }) => ({ ...state, current: payload }),
    [setCustomTemparature]: (state, { payload: temp }) => {
        return { ...state,
            currentCustom: {
                ...state.currentCustom,
                main: { temp }
            }
        }
    },
    [setIsCustom]: (state, { payload: isCustom }) => ({ ...state, isCustom })
}, initial);
