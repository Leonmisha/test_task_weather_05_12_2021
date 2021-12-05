import { all } from 'redux-saga/effects';
import { take } from 'redux-saga/effects';

import { initializeApp } from './rootReducer';

function* defaultSaga () {
    yield take(initializeApp);
    console.log('initialized')
}

export function* rootSaga () {
    yield all([
        defaultSaga()
    ]);
}
