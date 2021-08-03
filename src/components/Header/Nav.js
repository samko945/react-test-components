import React from "react";
import "./Nav.css";
import Button from "../UI/Button";
import PageMargin from "../UI/PageMargin";

export default function Nav() {
	return (
		<nav>
			<PageMargin style={{ alignItems: "space-around" }}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<Button style={{ margin: "0 0.25rem" }}>Register</Button>
					<Button style={{ margin: "0 0.25rem" }}>Sign in</Button>
				</ul>
			</PageMargin>
		</nav>
	);
}
