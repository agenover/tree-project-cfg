import React from "react";
import { Field } from "formik";

export const TextFieldGroup = ({ id, label, error }) => {
	return (
		<div className="container-fluid">
			<label htmlFor={id} className="p-2">
				{" "}
				{label}{" "}
			</label>
			<Field name={id} type="text" id={id} label={label}></Field>
			<div>{error}</div>
		</div>
	);
};
