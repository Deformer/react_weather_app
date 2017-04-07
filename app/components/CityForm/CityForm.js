import React from 'react';
import styles from './CityForm.styles';
import {Link} from 'react-router';
import {getWeather} from '../../actions/weather.actions';
import {connect} from 'react-redux';
import { setCity, clearCity } from '../../actions/city.actions';

const PropTypes = React.PropTypes;

const propTypes = {
	type: PropTypes.string
};

const mapStateToProps = (state) => {
	return {
		city: state.city
	};
};

class CityForm extends React.Component{

	render(){
		const {type, dispatch, city} = this.props;
		return(
			<div style={styles.formStyles(type)}>
			<input
				className="form-control"
				placeholder="City, Country"
				onChange={e => {
					dispatch(setCity(e.target.value));
				}}
				value={city}
				type="text"
			/>
			<Link to={'/forecast/'+city}>
				<button
					className="btn btn-success"
					type="button"
					style={styles.buttonStyles}
					onClick={() =>{
						if(city) {
							dispatch(getWeather(city));
							dispatch(clearCity());
						}
					}}
				>
					Get Weather
				</button>
			</Link>
		</div>
		);
	}
}
CityForm.Types = {
	ROW:'row',
	COLUMN:'column'
};
CityForm.propTypes = propTypes;

CityForm = connect(
	mapStateToProps,
	null
)(CityForm);

export default CityForm;

