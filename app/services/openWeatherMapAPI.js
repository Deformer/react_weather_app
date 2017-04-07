import axios from 'axios';

const key = '81a09f91016cb1280b4c9870d94ba6ef';

function makeRequest(city){
	return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${key}`);
}

let openWeatherMapAPI = {
	getWeatherForCity: city =>{
		return makeRequest(city)
            .then(response => response.data)
            .catch( err => {
	console.warn('Error while getting data',err);
});

	}
};

export default openWeatherMapAPI;