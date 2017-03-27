import React from "react";
import styles from "../styles/cityForm";
import {Link} from "react-router";

const PropTypes = React.PropTypes;

const propTypes = {
	city: PropTypes.string.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	flexDirection: PropTypes.string
};

const defaultProps = {
	flexDirection: "row"
};


function CityFormPresentation(props) {
	return (
        <div style={new styles.FormStyles(props.flexDirection)}>
            <input
                className="form-control"
                placeholder="City, Country"
                onChange={props.onUpdateCity}
                value={props.city}
                type="text"
            />
            <Link to={"/forecast/"+props.city}>
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
CityFormPresentation.propTypes = propTypes;
CityFormPresentation.defaultProps = defaultProps;

export default CityFormPresentation;