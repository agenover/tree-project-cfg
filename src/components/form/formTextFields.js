import React from "react";
import { Field } from "formik";
import styled from "styled-components";

export const TextFieldGroup = ({ id, label, error }) => {
	return (
		<Container>
			<label htmlFor={id} className="p-2">
				{" "}
				{label}{" "}
			</label>
			<Field name={id} type="text" id={id} label={label}></Field>
			<div>{error}</div>
		</Container>
	);
};

const Container = styled.div`
	margin: 1rem;
`;
