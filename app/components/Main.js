import React from "react";
import styles from "../styles/main";
const PropTypes = React.PropTypes;
import CityFormContainer from "./CityForm";

const propTypes = {
	header: PropTypes.string
};

const defaultProps = {
	header: "Clever Title",
};

function Main(props){
	return(
        <div>
            <div style={styles.defaultNavStyles}>
                <h2 style={styles.defaultHeaderStyles}>
                    {props.header}
                </h2>
                <CityFormContainer />
            </div>
            {props.children}
        </div>
	);
}

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;