

const styles = {
	FormStyles: function (flexDirection = "row") {
		this.display= "flex";
		this.flexDirection = flexDirection;
		this.justifyContent = "center";
		this.alignItems = "center";
		this.maxWidth = "300px";
	},
	buttonStyles : {
		margin: "10px"
	}
};

export default styles;