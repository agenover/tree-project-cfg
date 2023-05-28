import React from "react";
import { Field } from "formik";
import { FieldContainer } from "./formTextFields";

// CHECKBOX
export const CheckBoxItem = ({ id, label }) => {
	return (
		<FieldContainer>
			<label htmlFor={id}> {label} </label>
			<Field id={id} type="checkbox" name={id} />
		</FieldContainer>
	);
};
