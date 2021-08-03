import React from "react";

export default function CardList(props) {
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		flexGrow: "1",
	};
	return <div style={{ ...styles, ...props.style }}>{props.children}</div>;
}
