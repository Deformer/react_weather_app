const weather = (
    state = {
	isLoading: true,
	weather:{}
},
    action
) =>{
	switch (action.type){
	case 'REQUEST_WEATHER':
		return Object.assign({},state,{
			isLoading:true,
		});
	case 'RECEIVE_WEATHER':
		return Object.assign({},state,{
			isLoading: false,
			weather: action.weather
		});
	default:
		return state;
	}
};

export default weather;