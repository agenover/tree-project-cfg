import Header from "./header";
import Footer from "./Footer";
import styled from "styled-components";

const PageLayout = ({ children }) => {
	return (
		<PageContainer>
			<Header />
			<PageContentContainer>{children}</PageContentContainer>
			<Footer />
		</PageContainer>
	);
};

const PageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #ebe1ff;
`;

const PageContentContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	margin: 2rem;
`;

export default PageLayout;
