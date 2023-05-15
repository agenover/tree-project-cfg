import React from "react";
import { Field } from "formik";

// RADIO GROUPS
export const RadioGroup = ({ title, name, children, error }) => {
	const id = `${name}-radio-group`;
	return (
		<>
			<div className="container-fluid m-2">
				<div id={id}>{title}</div>
				<div aria-labelledby={id} role="group">
					{children}
				</div>
				<div>{error}</div>
			</div>
		</>
	);
};

// ITEMS INSIDE RADIO GROUPS
export const GenderGroupItem = ({ groupName, value, label }) => {
	return (
		<label className="p-2">
			<Field type="radio" name={groupName} value={value} className="m-1" />
			{label}
		</label>
	);
};

export const StateGroupItem = ({ groupName, value, label }) => {
	return (
		<label className="p-2">
			<Field type="radio" name={groupName} value={value} className="p-2" />
			{label}
		</label>
	);
};
