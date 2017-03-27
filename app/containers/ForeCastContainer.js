import React from "react";
import ForeCast from "../components/ForeCast";
import openWeatherMapHelper from "../utils/openWeatherMapHelper";

const PropTypes = React.PropTypes;

function initState(city) {
	openWeatherMapHelper.getWeatherForCity(city).then(weatherInfo => {
		this.setState({
			weather: weatherInfo,
			isLoading:false
		});
	});
}

class ForeCastContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading:true,
			weather: {}
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentWillMount(){
		var city = this.props.params.city;
		initState.call(this, city);
	}

	componentWillReceiveProps(){
		var city = this.props.params.city;
		initState.call(this, city);
	}
	handleClick(index){
		if(this.state.weather.list && index < this.state.weather.list.length) {
			this.context.router.push({
				pathname: "/detail",
				query: {
					weatherAtDay: JSON.stringify(this.state.weather.list[index]),
					city: this.props.params.city
				}
			});
		}
	}
	render(){
		return (
            <ForeCast
                isLoading={this.state.isLoading}
                dayList={this.state.weather.list}
                city={this.props.params.city}
                onUserClick={this.handleClick}
            />
		);
	}
}

ForeCastContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default ForeCastContainer;