import React from "react";
import helpers from "../utils/helpers";
import styles from "../styles/DetailProps";

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

export default DetailProps;