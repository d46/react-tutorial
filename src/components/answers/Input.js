import React, { Component } from "react";

class Input extends Component {
	render() {
		const { onHandleChange, value } = this.props;
		return <input value={value} onChange={onHandleChange} />;
	}
}

export default Input;
