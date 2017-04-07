import React from 'react';
import styles from './Loading.styles';

const PropTypes = React.PropTypes;

const propTypes = {
	text: PropTypes.string,
	speed: PropTypes.number
};

const defaultProps = {
	speed: 300,
	text: 'Loading'
};

class Loading extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			text: this.props.text
		};
		this.originalText = this.props.text;
	}
	componentDidMount(){
		let stopper = this.originalText+'...';
		this.interval = setInterval(function(){
			if(this.state.text === stopper) {
				this.setState({
					text: this.originalText
				});
			} else {
				this.setState({
					text: this.state.text + '.'
				});
			}
		}.bind(this),this.props.speed);
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	render(){
		return(
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
		);
	}
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;