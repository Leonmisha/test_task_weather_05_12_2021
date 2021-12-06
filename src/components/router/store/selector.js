import { createSelector } from "reselect";
import * as R from 'ramda';

const domain = (_) => _.router;

export const currentPage = createSelector(
    domain, R.prop('page')
);