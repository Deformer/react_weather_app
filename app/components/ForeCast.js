import React from "react";
import DayIcon from "../components/DayIcon";
import styles from "../styles/ForeCast";
import Loading from "./Loading";
import helpers from "../utils/helpers";

const PropTypes = React.PropTypes;

function fixArg(func,arg) {
	return function (){
		func(arg);
	};
}

const propTypes = {
	city: PropTypes.string.isRequired,
	dayList: PropTypes.arrayOf(PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.arrayOf(PropTypes.shape({
			icon: PropTypes.string.isRequired
		})).isRequired
	})),
	isLoading: PropTypes.bool.isRequired,
	onUserClick: PropTypes.func.isRequired
};

const defaultProps = {
	dayList:[{
		dt: 0,
		weather:[{
			icon:"01d"
		}]
	}]
};

function ForeCast(props) {
	return props.isLoading
        ? <Loading/>
        :<div style={styles.mainDiv}>
            <h1 style={styles.header}>{props.city}</h1>
            <p style={styles.p}>Select a day</p>
            <div onClick={props.handleClick} style={styles.div}>
                {props.dayList.map( (day,i) =>
                    <div key={i}
                         onClick={fixArg(props.onUserClick,i)} >
                    <DayIcon
                        header={helpers.formatHeaderFromDate(day.dt)}
                        icon={day.weather[0].icon}
                    />
                </div>) }
            </div>
        </div>;
}
ForeCast.propTypes = propTypes;
ForeCast.defaultProps = defaultProps;

export default ForeCast;