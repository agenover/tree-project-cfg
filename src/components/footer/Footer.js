import React from "react";
import { FooterBox, Container, Row, Column } from "./FooterStyles";

const Footer = () => {
	return (
		<FooterBox>
			<Container>
				<Row>
					<Column>
						<p>Copyright</p>
					</Column>
					<Column>
						<p>About Us</p>
					</Column>
				</Row>
			</Container>
		</FooterBox>
	);
};
export default Footer;
