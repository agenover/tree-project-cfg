import React from "react";
import { Field } from "formik";

// CHECKBOX
export const CheckBoxItem = ({ id, label }) => {
	return (
		<div className="container-fluid">
			<label htmlFor={id} className="p-2">
				{" "}
				{label}{" "}
			</label>
			<Field id={id} type="checkbox" name={id} />
		</div>
	);
};
