import React from "react";
import { Field } from "formik";
import styled from "styled-components";

// CHECKBOX
export const CheckBoxItem = ({ id, label }) => {
	return (
		<Container>
			<label htmlFor={id}> {label} </label>
			<Field id={id} type="checkbox" name={id} />
		</Container>
	);
};

const Container = styled.div`
	margin: 1rem;
`;
