import React from 'react';
import DayIcon from '../components/DayIcon';
import styles from '../styles/ForeCast';

const PropTypes = React.PropTypes;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function formatHeaderFromDate(time_sec) {
    let date = new Date(time_sec*1000),
        day = days[date.getDay()],
        month = date.toString().split(' ')[1],
        day_of_month = date.getDate();
    return `${day}, ${month} ${day_of_month}`;
}

const propTypes = {
    city: PropTypes.string.isRequired,
    dayList: PropTypes.array,
    isLoading: PropTypes.bool.isRequired
};//TODO add validation to the array item

function ForeCast(props) {
    return props.isLoading
        ? <div>Loading!</div>
        :<div style={styles.mainDiv}>
            <h1 style={styles.header}>{props.city}</h1>
            <p style={styles.p}>Select a day</p>
            <div style={styles.div}>
                {props.dayList.map( (day,i) =>  <DayIcon header={formatHeaderFromDate(day.dt) } icon={day.weather[0].icon} key={i}/>) }
            </div>
        </div>

}

ForeCast.propTypes = propTypes;

export default ForeCast;