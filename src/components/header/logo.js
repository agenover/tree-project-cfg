import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
	let navigate = useNavigate();

	return (
		<>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Logo
			</button>
		</>
	);
}
