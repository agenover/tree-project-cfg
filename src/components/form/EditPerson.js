import React from "react";
import PageLayout from "../layout/PageLayout";
import FormBlank from "./formBlank";


export default function EditPerson() {
	return (
		<PageLayout>
			<div>
				<h2>Edit person</h2>
				<FormBlank/>
			</div>
		</PageLayout>
	);
}

// const addPerson = (person) => {
// 	const rawData = localStorage.getItem("site-data");
// 	const currentData = rawData ? JSON.parse(rawData) : [];
// 	currentData.push(person);
// 	localStorage.setItem("site-data", JSON.stringify(currentData));
// };

// const onFormSubmit = (person) => {
// 	addPerson(person)
// }
