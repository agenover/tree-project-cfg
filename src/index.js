import { render } from "react-dom";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlankForm from "./components/form/blankForm";
import Tree from "./components/tree/tree";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="form" element={<BlankForm />} />
			<Route path="/tree" element={<Tree />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
