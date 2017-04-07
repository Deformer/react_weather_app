import React from 'react';
import DayIcon from '../DayIcon/DayIcon';
import styles from './Forecast.styles';
import Loading from '../Loading/Loading';
import helpers from '../../utils/helpers';
import { connect } from 'react-redux';
import {getWeather} from '../../actions/weather.actions';
import { setCity } from '../../actions/city.actions';
import {Link} from 'react-router';

const PropTypes = React.PropTypes;

const mapStateToProps = (state) => {
	return {
		isLoading: state.weather.isLoading,
		weather: state.weather.weather,
	};
};

class Forecast extends React.Component {
	constructor(props){
		super(props);
	}
	initDispatch(){
		const {weather, dispatch, params } = this.props;
		if(!Object.keys(weather).length) {
			dispatch(setCity(params.city));
			dispatch(getWeather(params.city));
		}
	}
	componentDidMount(){
		this.initDispatch();
	}
	render(){
		let { isLoading, weather, params } = this.props;
		return (
			isLoading
				? <Loading />
				:<div style={styles.mainDiv}>
				<h1 style={styles.header}>{params.city}</h1>
				<p style={styles.p}>Select a day</p>
				<div style={styles.div}>
					{weather.list.map( (day,i) =>
						<Link to={`/detail/${params.city}/${i}`} key={i}>
							<DayIcon
								header={helpers.formatHeaderFromDate(day.dt)}
								icon={day.weather[0].icon}
							/>
						</Link>)}
				</div>
			</div>
		);
	}
}

Forecast.contextTypes = {
	router: PropTypes.object.isRequired
};

Forecast = connect(
	mapStateToProps,
	null
)(Forecast);

export default Forecast;