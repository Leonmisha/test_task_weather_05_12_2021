import { handleActions } from 'redux-actions';

import { setPage } from './actions';
import { PAGES } from './constants';


const initial = {
    page: PAGES.WEATHER
};

export default handleActions({
    [setPage]: (state, { payload: page }) => ({ ...state, page })
}, initial);
