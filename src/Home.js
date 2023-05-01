import { Link, Outlet } from "react-router-dom";
import Logo from "./components/header/logo";
import Header from "./components/header/header";

export default function Home() {
	return (
		<div>
			<Header></Header>
			<nav>
				<Link to="/form">Create Person</Link>
				<Link to="/tree">Tree</Link>
			</nav>
			<Outlet />
		</div>
	);
}
