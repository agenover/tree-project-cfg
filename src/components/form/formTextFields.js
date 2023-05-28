import React from "react";
import { Field } from "formik";
import styled from "styled-components";

export const TextFieldGroup = ({ id, label, error }) => {
	return (
		<FieldContainer>
			<label htmlFor={id} className="p-2">
				{" "}
				{label}{" "}
			</label>
			<Field name={id} type="text" id={id} label={label}></Field>
			<ErrorField>{error}</ErrorField>
		</FieldContainer>
	);
};

export const FieldContainer = styled.div`
	margin: 1rem;
`;

export const ErrorField = styled.div`
	margin-left: 1rem;
	margin-top: 0.5rem;
	color: red;
	font-size: 12px;
`;
