import React from "react";
import { Field } from "formik";
import styled from "styled-components";

// RADIO GROUPS
export const RadioGroup = ({ title, name, children, error }) => {
	const id = `${name}-radio-group`;
	return (
		<>
			<Container>
				<div id={id}>{title}</div>
				<div aria-labelledby={id} role="group">
					{children}
				</div>
				<div>{error}</div>
			</Container>
		</>
	);
};

// ITEMS INSIDE RADIO GROUPS
export const GenderGroupItem = ({ groupName, value, label }) => {
	return (
		<label>
			<Field type="radio" name={groupName} value={value} />
			{label}
		</label>
	);
};

export const StateGroupItem = ({ groupName, value, label }) => {
	return (
		<label className="p-2">
			<Field type="radio" name={groupName} value={value} />
			{label}
		</label>
	);
};

const Container = styled.div`
	margin: 1rem;
`;
