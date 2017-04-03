import React from "react";
import openWeatherMapHelper from "../../services/openWeatherMapAPI";
import DayIcon from "../DayIcon/DayIcon";
import styles from "./Forecast.styles";
import Loading from "../Loading/Loading";
import helpers from "../../utils/helpers";

const PropTypes = React.PropTypes;

class Forecast extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading:true,
			weather: {}
		};
		this.initState = this.initState.bind(this);
	}

    initState(city){
        openWeatherMapHelper.getWeatherForCity(city).then(weatherInfo => {
            this.setState({
                weather: weatherInfo,
                isLoading:false
            });
        });
	}
	componentWillMount(){
		var city = this.props.params.city;
		this.initState(city);
	}

	componentWillReceiveProps(nextProps){
		var city = nextProps.params.city;
        this.initState(city);
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
            this.state.isLoading
                ? <Loading />
                :<div style={styles.mainDiv}>
				<h1 style={styles.header}>{this.props.params.city}</h1>
				<p style={styles.p}>Select a day</p>
				<div style={styles.div}>
                    {this.state.weather.list.map( (day,i) =>
						<div key={i}
							 onClick={this.handleClick.bind(this,i)} >
							<DayIcon
								header={helpers.formatHeaderFromDate(day.dt)}
								icon={day.weather[0].icon}
							/>
						</div>)}
				</div>
			</div>
		);
	}
}

Forecast.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Forecast;