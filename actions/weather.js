const API_KEY  = '57fd7afaca6dffce51442abf3cbb604c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?ua&appid=${API_KEY}`;
import axios from 'axios';

export const WEATHER_ACTION = 'WEATHER_ACTION';

export function searchCity(city) {
    const url = `${ROOT_URL}&q=${city},ua`;
    const weather = axios.get(url);

    return {
        type: WEATHER_ACTION,
        payload: weather
    }

}