import React from 'react';
import DayIcon from '../DayIcon/DayIcon';
import helpers from '../../utils/helpers';
import styles from './Detail.styles';
import {connect} from 'react-redux';
import Loading from '../Loading/Loading';
import { getWeather } from '../../actions/weather.actions';
import { setCity } from '../../actions/city.actions';


const mapStateToProps = (state,ownProps) => {
	return {
		isLoading: state.weather.isLoading,
		weather: state.weather.weather.list ? state.weather.weather.list[ownProps.params.index] : undefined ,
		error: ownProps.params.index > 6
	};
};

class Detail extends React.Component {
	constructor(props){
		super(props);
	}
	initDispatch(){
		const {weather, dispatch, params,error } = this.props;
		if(!weather && !error) {
			dispatch(setCity(params.city));
			dispatch(getWeather(params.city));
		}
	}
	componentDidMount(){
		this.initDispatch();
	}
	render() {
		const {isLoading,weather, params,error } = this.props;
		return (
            isLoading || error ?
				<Loading />
                : <div>
				<DayIcon
					icon={weather.weather[0].icon}
					header={helpers.formatHeaderFromDate(weather.dt)}
				/>
				<div style={styles.div}>
					<p>{params.city}</p>
					<p>{weather.weather[0].description}</p>
					<p>min temp: {helpers.formatTemp(weather.temp.min)} C</p>
					<p>max temp: {helpers.formatTemp(weather.temp.max)} С</p>
					<p>humidity: {weather.humidity}</p>
				</div>
			</div>
		);
	}
}


Detail = connect(
	mapStateToProps,
	null
)(Detail);

export default Detail;