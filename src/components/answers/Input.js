import React from "react";

const Input = props => {
	return <input value={props.value} onChange={props.onHandleChange} />;
};

export default Input;
