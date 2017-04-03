import React from "react";
import DayIcon from "../DayIcon/DayIcon";
import helpers from "../../utils/helpers";
import styles from "./Detail.styles";

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.weather = JSON.parse(this.props.location.query.weatherAtDay);
	}
	render(){
		return(
			<div>
				<DayIcon
					icon={this.weather.weather[0].icon}
					header={helpers.formatHeaderFromDate(this.weather.dt)}
				/>
				<div style={styles.div}>
					<p>{this.props.location.query.city}</p>
					<p>{this.weather.weather[0].description}</p>
					<p>min temp: {helpers.formatTemp(this.weather.temp.min)} C</p>
					<p>max temp: {helpers.formatTemp(this.weather.temp.max)} С</p>
					<p>humidity: {this.weather.humidity}</p>
				</div>
			</div>
		);
	}
}

export default Detail;