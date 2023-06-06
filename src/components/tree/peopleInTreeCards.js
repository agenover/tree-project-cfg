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
			localStorage.removeItem(JSON.stringify(updatedPeople));
			localStorage.setItem("site-data", JSON.stringify(updatedPeople));
			return updatedPeople;
		});
	};

	return (
		<PersonCardContainer>
			{people.map((person) => (
				<PersonCard key={person.uniqueId}>
					<p>
						<b>First Name: </b>
						{person.firstName}
					</p>
					<p>
						<b>Last Name: </b>
						{person.lastName}
					</p>
					<p>
						<b>Year of Birth: </b>
						{person.yearOfBirth}
					</p>
					<p>
						<b>Gender: </b>
						{person.gender}
					</p>
					<p>
						<b>Living Status: </b>
						{person.livingStatus}
					</p>
					<p>
						<b>Parent of: </b>
						{person.parentOf}
					</p>
					<p>
						<b>Description: </b>
						{person.description}
					</p>
					<DeleteButton onClick={() => handleDelete(person)}>Delete</DeleteButton>
				</PersonCard>
			))}
		</PersonCardContainer>
	);
}

const PersonCardContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const PersonCard = styled.div`
	margin: 1rem;
	padding: 1rem;
	border: 1px solid;
	border-radius: 5px;
	background: #dbcafc;
	width: 12rem;
`;

const DeleteButton = styled.button`
	background: #d6d930;
	border-radius: 5px;
	border: 1px solid;
	padding: 0.5rem;
	justify-content: flex-end;
`;
