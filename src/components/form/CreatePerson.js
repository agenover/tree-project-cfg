import React from "react";
import PageLayout from "../layout/PageLayout";
import FormBlank from "./formBlank";
import { v4 as uuidv4 } from "uuid";


export default function CreatePerson() {
	return (
		<PageLayout>
			<div>
				<FormBlank onFormSubmit={onFormSubmit}/>
			</div>
		</PageLayout>
	);
}

const addPerson = (person) => {
	const rawData = localStorage.getItem("site-data");
	const currentData = rawData ? JSON.parse(rawData) : [];
	const uniqueId = uuidv4();
	person.uniqueId = uniqueId;
	currentData.push(person);
	localStorage.setItem("site-data", JSON.stringify(currentData));
};

const onFormSubmit = (person) => {
	addPerson(person)
}
