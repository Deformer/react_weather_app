import React from "react";
import DayIcon from "../components/DayIcon";
import helpers from "../utils/helpers";
import DetailProps from "./DetailProps";
const PropTypes = React.PropTypes;

const propTypes = {
	weather : PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.arrayOf( PropTypes.shape({
			icon: PropTypes.string.isRequired
		})
        ).isRequired
	}).isRequired,
	city: PropTypes.string.isRequired
};

function Detail(props){
	return(
        <div>
            <DayIcon
                icon={props.weather.weather[0].icon}
                header={helpers.formatHeaderFromDate(props.weather.dt)}
            />
            <DetailProps
                city={props.city}
                weather={props.weather}
            />
        </div>
	);
}

Detail.propTypes = propTypes;

export default Detail;