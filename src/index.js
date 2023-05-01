import { render } from "react-dom";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePersonForm from "./components/form/form";
import Tree from "./components/tree/tree";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="form" element={<CreatePersonForm />} />
				<Route path="/tree" element={<Tree />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	rootElement
);
