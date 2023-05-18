import React from "react";
import styled from "styled-components";
import Logo from "./logo";

export default function Header() {
	return (
		<HeaderBox>
			<Logo />
		</HeaderBox>
	);
}

const HeaderBox = styled.div`
	background: black;
	margin: 0 !important;
	padding: 1em;
`;
