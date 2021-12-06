import { handleActions } from 'redux-actions';

import { setIsSearching, setResults, setQueryString } from './actions';

const initial = {
    queryString: '',
    isSearching: false,
    results: null
};

export default handleActions({
    [setIsSearching]: (state, { payload: isSearching }) => ({ ...state, isSearching }),
    [setResults]: (state, { payload: results }) => ({ ...state, results }),
    [setQueryString]: (state, { payload: queryString }) => ({ ...state, queryString })
}, initial);
