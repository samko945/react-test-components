import React from "react";

export default function PageMargin(props) {
	const styles = {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "0 2rem",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	};
	// alignItems: center overides the default value of stretch, making buttons not full width
	return <div style={{ ...styles, ...props.style }}>{props.children}</div>;
}
