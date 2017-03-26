import React from 'react';
import styles from '../styles/cityForm';
const PropTypes = React.PropTypes;

const propTypes = {
    city: PropTypes.string.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    onSubmitCity: PropTypes.func.isRequired,
    flexDirection: PropTypes.string
};

const defaultProps = {
    flexDirection: 'row'
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
            <button
                className="btn btn-success"
                type="button"
                style={styles.buttonStyles}
                onClick={props.onSubmitCity}
            >
                Get Weather
            </button>
        </div>

    )
};
CityFormPresentation.propTypes = propTypes;
CityFormPresentation.defaultProps = defaultProps;

export default CityFormPresentation;