import styled from "styled-components";

export const FooterBox = styled.div`
	background: #9fc5c6;
	position: relative;
	width: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 60px;
`;
