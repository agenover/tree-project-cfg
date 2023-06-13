import { createRoot } from "react-dom/client";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePerson from "./components/form/CreatePerson";
import Tree from "./components/tree/tree";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/create-person" element={<CreatePerson />} />
			<Route path="/tree" element={<Tree />} />
		</Routes>
	</BrowserRouter>
);
