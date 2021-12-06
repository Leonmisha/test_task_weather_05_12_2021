import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames'

import { setCurrent } from '../weather/store/actions';
import { setPage } from '../router/store/actions';
import { PAGES } from '../router/store/constants';

import { results } from './store/selector';
import styles from './Search.module.css';

const SearchList = () => {
    const dispatch = useDispatch()

    const items = useSelector(results)

    if (!items || items.length === 0) {
        return <div className = { classnames(styles.list, styles.list_nothing) }>There is nothing to see</div>
    }

    const handleItemClick = async (e, item) => {
        dispatch(setCurrent(item))
        dispatch(setPage(PAGES.WEATHER))
    }

    return (
        <div className = { styles.list }>
            { items.map((item) => (
            <div className = { styles.listItem } key = { item.id } onClick = { (e) => handleItemClick(e, item) }>
                <div><img className = { styles.itemWeatherIcon } alt="weather-icon" src = { item.weather[0].icon } /></div>
                <div className = { styles.itemMeta }>
                    <div className = { styles.itemRow }>
                        <div className = { styles.itemName }>{ item.name }, { item.sys.country }</div>
                        <div><img className = { styles.itemCountryIcon } alt="country-icon" src = { item.sys.countryIcon } /></div>
                        <div className = { styles.itemDescription }>{ item.weather[0].description }</div>
                    </div>
                    <div className = { styles.itemRow }>
                        <div className = { styles.itemTemparature }>{ item.main.temp } °C</div>
                        <div className = { styles.itemDetailedTemparature }> temperature from {item.main.temp_min} to {item.main.temp_max} °С, wind { item.wind.speed } m/s. clouds { item.clouds.all } %</div>
                    </div>
                    <div className = { styles.itemRow }>
                       <div>Geo coords</div><span className = { styles.itemCoords }> [{ item.coord.lat }, { item.coord.lon }]</span>
                    </div>
                </div>
            </div>)) }
        </div>
    );
}

export default SearchList;
