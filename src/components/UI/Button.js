import React from "react";
import "./Button.css";

export default function Button(props) {
	return <button {...props}>{props.children}</button>;
}
