import React from "react";
import "./CardList.css";

export default function CardList(props) {
	return (
		<div className="CardList" style={{ ...props.style }}>
			{props.children}
		</div>
	);
}
