import React from "react";
import helpers from "../utils/helpers";
import styles from "../styles/DetailProps";
const PropTypes = React.PropTypes;

const propTypes = {
	city: PropTypes.string.isRequired,
	weather : PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.arrayOf( PropTypes.shape({
			description: PropTypes.string.isRequired
		})
        ).isRequired,
		temp: PropTypes.shape({
			min: PropTypes.number.isRequired,
			max: PropTypes.number.isRequired
		}),
		humidity: PropTypes.number.isRequired
	}).isRequired
};


function DetailProps(props) {
	return(
        <div style={styles.div}>
            <p>{props.city}</p>
            <p>{props.weather.weather[0].description}</p>
            <p>min temp: {helpers.formatTemp(props.weather.temp.min)} C</p>
            <p>max temp: {helpers.formatTemp(props.weather.temp.max)}</p>
            <p>humidity: {props.weather.humidity}</p>
        </div>
	);
}

DetailProps.propTypes = propTypes;

export default DetailProps;