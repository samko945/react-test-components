import React from "react";
import "./Nav.css";
import Button from "../UI/Button";
import PageMargin from "../UI/PageMargin";

export default function Nav() {
	return (
		<nav>
			<PageMargin style={{ alignItems: "flex-end" }}>
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
					<li>
						<Button style={{ margin: "0 0.25rem" }}>Sign up</Button>
					</li>
					<li>
						<Button style={{ margin: "0 0.25rem" }}>Login</Button>
					</li>
				</ul>
			</PageMargin>
		</nav>
	);
}
