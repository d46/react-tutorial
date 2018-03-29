import React, { Component } from "react";

class Input extends Component {
	render() {
		const { setAnswer, value } = this.props;
		return <input value={value} onChange={setAnswer} />;
	}
}

export default Input;
