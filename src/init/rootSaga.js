import { all } from 'redux-saga/effects';

import bootstrap from '../components/bootstrap/store/saga'

export function* rootSaga () {
    yield all([
        bootstrap()
    ]);
}
