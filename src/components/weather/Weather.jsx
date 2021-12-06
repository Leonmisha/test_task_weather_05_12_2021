import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { currentWeather, customWeather, isCustomWeather } from './store/selector';
import { setCustomTemparature, setIsCustom } from './store/actions';
import { calcColorByTemperature } from './helper';
import styles from './Weather.module.css';

const minTemparature = -20
const maxTemparature = 40

const Weather = () => {
    const current = useSelector(currentWeather)
    const custom = useSelector(customWeather)
    const isCustom = useSelector(isCustomWeather)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!current) {
            dispatch(setIsCustom(true))
        } 
    }, [dispatch, current])

    const viewWeather = isCustom || !current ? custom : current

    return (
        <div className = { styles.container } style = { { backgroundColor: calcColorByTemperature(viewWeather.main.temp), backgroundImage: `url(${viewWeather.weather[0].icon})` } }>
            <div className = { styles.sign }>{ viewWeather.name }: { viewWeather.main.temp } °C</div>
            <div className = { styles.bottomPanel }>
                { isCustom &&
                    <div className = { styles.sliderContainer }>
                        <input
                            className = { styles.slider }
                            type = "range"
                            min = { minTemparature }
                            max = { maxTemparature }
                            value = { viewWeather.main.temp }
                            onInput = { (e) => dispatch(setCustomTemparature(e.target.value)) }  />
                    </div>
                }
                { current && <button className = { styles.customMode } onClick = { () => dispatch(setIsCustom(!isCustom)) }>{ isCustom ? 'Go to real mode' : 'Go to custom mode' }</button> }
            </div>
            
        </div>
    );
}

export default Weather;
