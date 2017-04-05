import axios from "axios";

const key = "65b2710e03be0c98cb6f848898575860";

function makeRequest(city){
	return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${key}`);
}

let openWeatherMapAPI = {
	getWeatherForCity: city =>{
		return makeRequest(city)
            .then(response => response.data)
            .catch( err => {
	console.warn("Error while getting data",err);
});

	}
};

export default openWeatherMapAPI;