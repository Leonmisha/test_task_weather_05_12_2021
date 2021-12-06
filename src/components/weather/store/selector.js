import { createSelector } from "reselect";
import * as R from 'ramda';

const domain = (_) => _.weather;

export const currentWeather = createSelector(
    domain, R.prop('current')
);

export const customWeather = createSelector(
    domain, R.prop('currentCustom')
);

export const isCustomWeather = createSelector(
    domain, R.prop('isCustom')
);