import React from 'react'
import styles from '../styles/main'
const PropTypes = React.PropTypes;
import CityFormContainer from './CityForm';



const defaultProps = {
    header: 'Clever Title',
};

const propTypes = {
    header: PropTypes.string,
    color: PropTypes.string,
    fontColor: PropTypes.string
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
    )
}

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;