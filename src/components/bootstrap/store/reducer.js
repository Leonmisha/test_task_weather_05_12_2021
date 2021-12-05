import { handleActions } from 'redux-actions';

import { setInit } from './actions';

const initial = {
    init: false,
}

export default handleActions({
    [setInit]: (state, { payload: init }) => ({ ...state, init })
}, initial)