import { useSelector } from 'react-redux';
import { currentPage } from './router/store/selector.js';
import { PAGES } from './router/store/constants';
import Weather from './weather/Weather.jsx';
import Search from './search/Search.jsx';

// IN REAL PROJECT IT WILL BE REACT-ROUTER
const Main = () => {
    const page = useSelector(currentPage)
    return (
        <>
        { page === PAGES.WEATHER && <Weather /> }
        { page === PAGES.SEARCH && <Search /> }
        </>
    )
}

export default Main;
