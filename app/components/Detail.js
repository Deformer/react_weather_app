import React from "react";
import DayIcon from "../components/DayIcon";
import helpers from "../utils/helpers";
import DetailProps from "./DetailProps";

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

export default Detail;