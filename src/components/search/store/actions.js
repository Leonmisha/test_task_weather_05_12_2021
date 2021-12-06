import { createActions } from 'redux-actions'

export const { startSearch, setResults, setQueryString, setIsSearching } = createActions({
    startSearch: () => void 0,
    setResults: (results) => results,
    setQueryString: (queryString) => queryString,
    setIsSearching: (isSearching) => isSearching
})
