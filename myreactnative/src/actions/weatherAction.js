import axios from 'axios';
import { FETCH_WEATHER } from './constans';

export const fetchWeatherDone = weathers => ({ type: FETCH_WEATHER, payload: weathers });

export const fetchWeather = city => dispatch => (axios.get('https://api.apixu.com/v1/forecast.json?key=146af849a55b4551877173858170205&q=' + city + '&days=2', {})
.then(response => (dispatch(fetchWeatherDone(response.data))))
.catch(err => console.log(err))
);
