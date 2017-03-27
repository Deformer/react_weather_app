import React from 'react';
import {Link} from 'react-router';
import styles from '../styles/DayIcon';
const PropTypes = React.PropTypes;

const propTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
};


function DayIcon(props){
    return (
        <div style={styles.div}>
            <img style={styles.img} src={"http://openweathermap.org/img/w/"+props.icon+".png"} />
            <h2 style={styles.header}>{props.header}</h2>
        </div>
    )
}

DayIcon.propTypes = propTypes;

export default DayIcon;