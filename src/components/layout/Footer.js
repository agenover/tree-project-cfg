import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterInfo>© Copyright 2023</FooterInfo>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background: Black;
	position: relative;
	justify-content: center;
	padding: 2rem;
	display: flex;
	flex-shrink: 0;
`;

const FooterInfo = styled.div`
	display: flex;
	justify-content: center;
	color: #ebe1ff;
`;

export default Footer;
