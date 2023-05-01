import { Link, Outlet } from "react-router-dom";
import Header from "./components/header/header";

export default function Home() {
	return (
		<main>
			<Header></Header>
			<nav>
				<Link to="/form">Create Person</Link>
				<Link to="/tree">Tree</Link>
			</nav>
		</main>
	);
}
