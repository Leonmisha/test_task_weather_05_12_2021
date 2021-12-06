import { all } from 'redux-saga/effects';

import bootstrap from '../components/bootstrap/store/saga'
import search from '../components/search/store/saga'

export function* rootSaga () {
    yield all([
        bootstrap(),
        search()
    ]);
}
