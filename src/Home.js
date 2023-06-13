import { Link } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import styled from "styled-components";

export default function Home() {
	return (
		<PageLayout>
			<Link to="/create-person">
				<Button>Create Person</Button>
			</Link>
			<Link to="/tree">
				<Button>Tree</Button>
			</Link>
		</PageLayout>
	);
}

const Button = styled.button`
	background: #3c4152;
	color: #ebe1ff;
	border: none;
	border-radius: 5px;
	margin: 4rem;
	padding: 1rem;
	width: 10rem;
`;
