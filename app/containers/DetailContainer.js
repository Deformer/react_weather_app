import React from "react";
import Detail from "../components/Detail";

class DetailContainer extends React.Component{
	constructor(props){
		super(props);
		this.weather = JSON.parse(this.props.location.query.weatherAtDay);
	}
	render(){
		return <Detail weather={this.weather} city={this.props.location.query.city}/>;
	}
}

export default DetailContainer;