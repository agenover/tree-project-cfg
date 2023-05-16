import { createRoot } from "react-dom/client";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form/formBlank";
import Tree from "./components/tree/tree";

const container = document.getElementById("root");
const root = createRoot(container);

const onSubmit = (values) => {
	console.log(values);
};

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="form" element={<Form onSubmit={onSubmit} />} />
			<Route path="/tree" element={<Tree />} />
		</Routes>
	</BrowserRouter>
);
