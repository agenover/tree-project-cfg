import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function PeopleInTreeCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const rawData = localStorage.getItem("site-data");
		const currentData = rawData ? JSON.parse(rawData) : [];
		setPeople(currentData);
	}, []);

	const handleDelete = (person) => {
		setPeople((prevPeople) => {
			const updatedPeople = prevPeople.filter(
				(p) => p.uniqueId !== person.uniqueId
			);
			localStorage.setItem("site-data", JSON.stringify(updatedPeople));
			return updatedPeople;
		});
	};

	return (
		<PersonCardContainer>
			{people.map((person) => (
				<PersonCard key={person.firstName}>
					<p>First Name: {person.firstName}</p>
					<p>Last Name: {person.lastName}</p>
					<p>Year of Birth: {person.yearOfBirth}</p>
					<p>Gender: {person.gender}</p>
					<p>Living Status: {person.livingStatus}</p>
					<p>Parent of: {person.parentOf}</p>
					<p>Description: {person.description}</p>
					<DeleteButton onClick={() => handleDelete(person)}>Delete</DeleteButton>
				</PersonCard>
			))}
		</PersonCardContainer>
	);
}

const PersonCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
`;

const PersonCard = styled.div`
	margin: 1rem;
	padding: 1rem;
	border: 1px solid;
	border-radius: 5px;
	background: #dbcafc;
	width: 25%;
`;

const DeleteButton = styled.button`
	background: #d6d930;
	border-radius: 5px;
	border: 1px solid;
	padding: 0.5rem;
	justify-content: flex-end;
`;
