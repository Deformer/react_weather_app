import React from 'react';
import CityFormPresentation from './CityFormPresentation';

const PropTypes = React.PropTypes;

const defaultProps = {
    flexDirection: 'row'
};

const propTypes = {
    flexDirection: PropTypes.string
};

class CityFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city:''
        };
        this.handleUpdateCity = this.handleUpdateCity.bind(this);
        this.handleSubmitCity = this.handleSubmitCity.bind(this);
    }
    handleUpdateCity(e){
        this.setState({
            city: e.target.value
        })
    }
    handleSubmitCity(){
        console.log(this.state.city);
    }
    render(){
        return(
            <CityFormPresentation
                city={this.state.city}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                flexDirection={this.props.flexDirection}
            />
        )
    }
}
CityFormContainer.defaultProps = defaultProps;
CityFormContainer.propTypes = propTypes;


export default CityFormContainer;