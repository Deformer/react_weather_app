/**
 * Created by sbelan on 4/5/2017.
 */
import openWeatherMapAPI from '../services/openWeatherMapAPI';

const requestWeather = () => {
	return {
		type: 'REQUEST_WEATHER'
	};
};

const receiveWeather = (weather) => {
	return {
		type: 'RECEIVE_WEATHER',
		weather
	};
};

const  getWeather = (city) => {
	return (dispatch) => {
		dispatch(requestWeather());
		return openWeatherMapAPI.getWeatherForCity(city)
            .then(weather => {
	dispatch(receiveWeather(weather));
});
	};
};

export { getWeather };