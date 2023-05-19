import React from "react";
import * as Yup from "yup";
import PageLayout from "../layout/PageLayout";
import { TextFieldGroup } from "./formTextFields";
import { Formik, Form } from "formik";
import { RadioGroup, GenderGroupItem, StateGroupItem } from "./formRadioGroups";
import { CheckBoxItem } from "./formCheckbox";

export default function FormBlank({ onSubmit = () => {} }) {
	return (
		<PageLayout>
			<div>
				<h2>Create a new person</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						onSubmit(values);
						resetForm({ values: "" });
					}}
				>
					{(formik) => (
						<Form onSubmit={formik.handleSubmit} className="container">
							<TextFieldGroup
								id="firstName"
								label="First Name"
								error={formik.errors.firstName}
							/>
							<TextFieldGroup
								id="lastName"
								label="Last Name"
								error={formik.errors.lastName}
							/>
							<TextFieldGroup id="age" label="Age" error={formik.errors.age} />
							<RadioGroup name="gender" title={"Gender"} error={formik.errors.gender}>
								<GenderGroupItem
									groupName="gender"
									value="female"
									label="Female"
								></GenderGroupItem>
								<GenderGroupItem
									groupName="gender"
									value="male"
									label="Male"
								></GenderGroupItem>
								<GenderGroupItem
									groupName="gender"
									value="other"
									label="Other"
								></GenderGroupItem>
							</RadioGroup>
							<RadioGroup
								name="livingStatus"
								title={"Living Status"}
								error={formik.errors.state}
							>
								<StateGroupItem groupName="state" value="living" label="Living" />
								<StateGroupItem groupName="state" value="deceased" label="Deceased" />
							</RadioGroup>
							<CheckBoxItem id="isPrivate" label="Should profile be private?" />
							<CheckBoxItem id="isPreferred" label="Is this the preferred profile?" />
							<TextFieldGroup
								id="description"
								label="Add a description (optional)"
								error={formik.errors.description}
							/>
							<div className="container-fluid m-2">
								<button type="submit">Save</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</PageLayout>
	);
}

const initialValues = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
	gender: "",
	livingStatus: "",
	isPrivate: false,
	isPreferred: false,
	description: "",
};

const validationSchema = Yup.object({
	firstName: Yup.string()
		.required("First Name is required")
		.min(4, "First Name must be longer than 4 characters")
		.max(30, "First Name must be shorter than 30 characters"),
	lastName: Yup.string()
		.required("Last Name is required")
		.min(4, "Last Name must be longer than 4 characters")
		.max(30, "Last Name must be shorter than 30 characters"),
	age: Yup.number()
		.required("Age is required")
		.positive()
		.min(1, "Minimum age 1")
		.max(110, "Maximum age 110"),
	state: Yup.string().required("State is required"),
	gender: Yup.string().required("gender is required"),
});