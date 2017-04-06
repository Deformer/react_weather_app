import React from "react";
import styles from "./CityForm.styles";
import {Link} from "react-router";
import {getWeather} from '../../actions/weather.actions'
import {connect} from 'react-redux';
import { setCity, clearCity } from '../../actions/city.actions';

const PropTypes = React.PropTypes;

const propTypes = {
    flexDirection: PropTypes.string
};//TODO сделать flexDirection через static поле

const mapStateToProps = (state) => {
	return {
		city: state.city
	}
};

let CityForm = ({
		flexDirection,
		dispatch,
		city
}) => {
	return(
		<div style={styles.formStyles(flexDirection)}>
		<input
			className="form-control"
			placeholder="City, Country"
			onChange={e => {
				dispatch(setCity(e.target.value))
			}}
			value={city}
			type="text"
		/>
		<Link to={"/forecast/"+city}>
			<button
				className="btn btn-success"
				type="button"
				style={styles.buttonStyles}
				onClick={() =>{
					if(city) {
                        dispatch(getWeather(city));
                        dispatch(clearCity())
                    }
                }}
			>
				Get Weather
			</button>
		</Link>
	</div>
	);
}
CityForm.propTypes = propTypes;

CityForm = connect(
	mapStateToProps,
	null
)(CityForm);

export default CityForm;

