import { useDispatch, useSelector } from 'react-redux';

import { setQueryString, startSearch } from './store/actions';
import styles from './Search.module.css';
import { isSearching, queryString } from './store/selector';
import SearchList from './SearchList';

const Search = () => {
    const dispatch = useDispatch()

    const searchline = useSelector(queryString)
    const isSearch = useSelector(isSearching)

    const search = () => {
        !isSearch && searchline && dispatch(startSearch())
    }

    return (
        <div className = { styles.container } >
            <div className = { styles.title }>Weather in your city</div>
            <div className = { styles.search }>
                <input
                    className = {  styles.searchInput }
                    value = { searchline }
                    onChange = { (e) => dispatch(setQueryString(e.target.value)) }
                    onKeyDown = { (e) => e.key === 'Enter' && search() } />
                <button disabled = { isSearch } className = { styles.searchButton } onClick = { search }>Search</button>
            </div>
            <SearchList />
        </div>
    );
}

export default Search;
