import { Link } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import styled from "styled-components";

export default function Home() {
	return (
		<body styles={{ margin: "6em" }}>
			<Header />
			<HomeWrapper>
				<Link to="/form">
					<Button>Create Person</Button>
				</Link>
				<Link to="/tree">
					<Button>Tree</Button>
				</Link>
			</HomeWrapper>

			<Footer />
		</body>
	);
}

const HomeWrapper = styled.div`
	display: flex;
	margin: 2em;
	justify-content: space-around;
`;

const Button = styled.button`
	background: #dfebec;
	border: solid 0.3px;
	border-radius: 5px;
	padding: 0.5rem;
`;
