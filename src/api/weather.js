import axios from 'axios'

const apiKey = '47c253bb3ccf9c30b586c9c0a4c21f68'
const baseURL = '//api.openweathermap.org/data/2.5'

export const getWeatherLattLong = (lattitude, longitude) => 
    axios.get(`${baseURL}/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
