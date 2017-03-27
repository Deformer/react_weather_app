import React from "react";
import styles from "../styles/pickCityForm";
import CityFormContainer from "./CityForm";

const PropTypes = React.PropTypes;

const defaultProps = {
	header: "Enter a City and State"
};

const propTypes = {
	header: PropTypes.string
};

function PickCityForm(props) {
	return (
        <div className="container" style={styles.body}>
            <h1 style={styles.header}>{props.header}</h1>
            <CityFormContainer flexDirection="column"/>
        </div>
	);
}

PickCityForm.defaultProps = defaultProps;
PickCityForm.propTypes = propTypes;

export default PickCityForm;