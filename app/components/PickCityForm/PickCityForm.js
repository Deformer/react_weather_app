import React from "react";
import styles from "./PickCityForm.styles";
import CityFormContainer from "../CityForm/CityForm";

class PickCityForm extends React.Component{
	render(){
		return (
			<div className="container" style={styles.body}>
				<h1 style={styles.header}>Enter a City and State</h1>
				<CityFormContainer flexDirection="column"/>
			</div>
		)
	}
}

export default PickCityForm;