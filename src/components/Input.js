import React from "react";

export default function Input(props) {
	return (
		<div>
			<label>{props.label}</label>
			<input {...props.input}>{props.children}</input>
		</div>
	);
}
