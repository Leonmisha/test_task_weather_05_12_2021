import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';
import * as R from 'ramda';

export const { initializeApp } = createActions({
    initializeApp: () => void 0
})


export const rootReducer = combineReducers({
  default: handleActions({
    [initializeApp]: (state) => R.set(
        R.lensProp('init'),
        true,
        state
    )
  }, {init: false})
});
