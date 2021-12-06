import { createSelector } from "reselect";
import * as R from 'ramda';

const domain = (_) => _.bootstrap;

export const isInitializedApp = createSelector(
    domain, R.prop('init')
);