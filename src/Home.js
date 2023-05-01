import { Link } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";

export default function Home() {
	return (
		<main>
			<Header></Header>
			<nav>
				<Link to="/form">Create Person</Link>
				<Link to="/tree">Tree</Link>
			</nav>
			<Footer></Footer>
		</main>
	);
}
