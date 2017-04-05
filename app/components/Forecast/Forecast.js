import React from "react";
import DayIcon from "../DayIcon/DayIcon";
import styles from "./Forecast.styles";
import Loading from "../Loading/Loading";
import helpers from "../../utils/helpers";
import { connect } from 'react-redux';

const PropTypes = React.PropTypes;

const mapStateToProps = (state) => {
    return {
        isLoading: state.weather.isLoading,
		weather: state.weather.weather,
		city: state.city
    }
};

let Forecast = ({
	isLoading,
 	weather,
 	city
}) =>{
	return (
		isLoading
			? <Loading />
			:<div style={styles.mainDiv}>
			<h1 style={styles.header}>{city}</h1>
			<p style={styles.p}>Select a day</p>
			<div style={styles.div}>
				{weather.list.map( (day,i) =>
					<div key={i}>
						<DayIcon
							header={helpers.formatHeaderFromDate(day.dt)}
							icon={day.weather[0].icon}
						/>
					</div>)}
			</div>
		</div>
	);
};

Forecast.contextTypes = {
	router: PropTypes.object.isRequired
};

Forecast = connect(
	mapStateToProps,
	null
)(Forecast);

export default Forecast;