import { createSelector } from "reselect";
import * as R from 'ramda';

const domain = (_) => _.search;

export const queryString = createSelector(
    domain, R.prop('queryString')
);

export const isSearching = createSelector(
    domain, R.prop('isSearching')
);

export const results = createSelector(
    domain, R.prop('results')
);