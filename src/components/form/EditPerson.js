import React from "react";
import PageLayout from "../layout/PageLayout";
import FormBlank from "./formBlank";
import { useLocation } from "react-router-dom";


export default function EditPerson() {
    const location = useLocation();
    const data = location.state;
    console.log({data})
	return (
		<PageLayout>
			<div>
				<h2>Edit person</h2>
				<FormBlank initialValues={retrievePersonData(data)} onFormSubmit={onFormSubmit}/>
                <div>{}</div>
			</div>
		</PageLayout>
	);
}

const retrievePersonData = (personId) => {
	const rawData = localStorage.getItem("site-data");
    const currentData = JSON.parse(rawData);
    const currentPerson = currentData.find(element => element.uniqueId === personId)

    console.log({personId})
    console.log({currentData})
    console.log({currentPerson})
    return currentPerson
}

const addEditedPerson = (person) => {
	// const rawData = localStorage.getItem("site-data");
	// const currentData = rawData ? JSON.parse(rawData) : [];
	// currentData.push(person);
	// localStorage.setItem("site-data", JSON.stringify(currentData));
};

const onFormSubmit = (person) => {
	addEditedPerson(person)
}
