import React from "react";
import styles from "./CityForm.styles";
import {Link} from "react-router";
import {getWeather} from '../../actions/actions'
import {connect} from 'react-redux';
import { setCity } from '../../actions/city.actions';

const PropTypes = React.PropTypes;

const propTypes = {
    flexDirection: PropTypes.string
};

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
			type="text"
		/>
		<Link to={"/forecast/"+city}>
			<button
				className="btn btn-success"
				type="button"
				style={styles.buttonStyles}
				onClick={() =>{
                    dispatch(getWeather(city));
                }}

			>
				Get Weather
			</button>
		</Link>
	</div>
	);
}
CityForm.propTypes = propTypes;
CityForm.contextTypes = {
	store: PropTypes.object
};

CityForm = connect(
	mapStateToProps,
	null
)(CityForm);

export default CityForm;

