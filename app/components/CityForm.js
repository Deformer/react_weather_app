import React from "react";
import CityFormPresentation from "./CityFormPresentation";

const PropTypes = React.PropTypes;

const defaultProps = {
	flexDirection: "row"
};

const propTypes = {
	flexDirection: PropTypes.string
};

class CityFormContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			city:""
		};
		this.handleUpdateCity = this.handleUpdateCity.bind(this);
	}
	handleUpdateCity(e){
		this.setState({
			city: e.target.value
		});
	}
	render(){
		return(
            <CityFormPresentation
                city={this.state.city}
                onUpdateCity={this.handleUpdateCity}
                flexDirection={this.props.flexDirection}
            />
		);
	}
}
CityFormContainer.defaultProps = defaultProps;
CityFormContainer.propTypes = propTypes;
CityFormContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};


export default CityFormContainer;