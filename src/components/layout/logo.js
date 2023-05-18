import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<>
			<Link to="/">
				<img
					src={require("../../media/logoBOTpurple.png")}
					alt="logo"
					width="10%"
				/>
			</Link>
		</>
	);
}
