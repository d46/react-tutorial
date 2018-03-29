import React, { Component } from "react";

class Dropdown extends Component {
	render() {
		const { onHandleChange, value, options } = this.props;

		return (
			<select value={value} onChange={onHandleChange} id="dropdown">
				{options.map(option => (
					<option value={option}>{option}</option>
				))}
			</select>
		);
	}
}

export default Dropdown;
