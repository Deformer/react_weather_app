import React from "react";
import styles from "./CityForm.styles";
import {Link} from "react-router";


const PropTypes = React.PropTypes;

const propTypes = {
    flexDirection: PropTypes.string
};

class CityForm extends React.Component{
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
            <div style={styles.formStyles(this.props.flexDirection)}>
			<input
				className="form-control"
				placeholder="City, Country"
				onChange={this.handleUpdateCity}
				value={this.state.city}
				type="text"
			/>
			<Link to={"/forecast/"+this.state.city}>
				<button
					className="btn btn-success"
					type="button"
					style={styles.buttonStyles}
				>
					Get Weather
				</button>
			</Link>
		</div>
		);
	}
}
CityForm.propTypes = propTypes;


export default CityForm;

