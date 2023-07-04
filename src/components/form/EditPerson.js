import React from "react";
import PageLayout from "../layout/PageLayout";
import FormBlank from "./formBlank";
import { useLocation, useNavigate } from "react-router-dom";


export default function EditPerson() {
    const location = useLocation();

    const data = location.state;

	const retrievePersonData = (personId) => {
		const rawData = localStorage.getItem("site-data");
		const currentData = JSON.parse(rawData);
		const currentPerson = currentData.find(element => element.uniqueId === personId)
		return currentPerson
	}
	
	const addEditedPerson = (editedPerson) => {
		const rawData = localStorage.getItem("site-data");
		const currentData = JSON.parse(rawData);
		const index = currentData.findIndex((element) => element.uniqueId === editedPerson.uniqueId);
		currentData[index] = editedPerson;
		localStorage.setItem("site-data", JSON.stringify(currentData));
	};

	const navigate = useNavigate();

	const navigateToTree = () => {
		navigate("/tree/")
	}
	
	const onFormSubmit = (person) => {
		addEditedPerson(person)
		navigateToTree();
	}
	

	return (
		<PageLayout>
			<div>
				<h2>Edit person</h2>
				<FormBlank initialValues={retrievePersonData(data)} onFormSubmit={onFormSubmit} onCl/>
                <div>{}</div>
			</div>
		</PageLayout>
	);
}

