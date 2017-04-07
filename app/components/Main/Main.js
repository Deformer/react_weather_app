import React from 'react';
import styles from './Main.styles';
import CityForm from '../CityForm/CityForm';

function Main(props){
	return(
        <div>
            <div style={styles.defaultNavStyles}>
                <h2 style={styles.defaultHeaderStyles}>
                    Clever Title
                </h2>
                <CityForm type={CityForm.Types.ROW}/>
            </div>
            {props.children}
        </div>
	);
}

export default Main;