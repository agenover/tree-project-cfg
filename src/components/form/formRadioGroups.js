import React from "react";
import { Field } from "formik";
import { FieldContainer, ErrorField } from "./formTextFields";
// RADIO GROUPS
export const RadioGroup = ({ title, name, children, error }) => {
	const id = `${name}-radio-group`;
	return (
		<>
			<FieldContainer>
				<div id={id}>{title}</div>
				<div aria-labelledby={id} role="group">
					{children}
				</div>
				<ErrorField>{error}</ErrorField>
			</FieldContainer>
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
		<label>
			<Field type="radio" name={groupName} value={value} />
			{label}
		</label>
	);
};
