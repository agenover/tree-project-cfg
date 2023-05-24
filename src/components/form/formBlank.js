import React, { useState } from "react";
import * as Yup from "yup";
import PageLayout from "../layout/PageLayout";
import { TextFieldGroup } from "./formTextFields";
import { Formik, Form } from "formik";
import { RadioGroup, GenderGroupItem, StateGroupItem } from "./formRadioGroups";

export default function FormBlank() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [yearOfBirth, setYearOfBirth] = useState("");
	const [gender, setGender] = useState("");
	const [livingStatus, setLivingStatus] = useState("");
	const [description, setDescription] = useState("");

	const handleFormSubmit = (values) => {
		// Update the state with the form values
		setFirstName(values.firstName);
		setLastName(values.lastName);
		setYearOfBirth(values.yearOfBirth);
		setGender(values.gender);
		setLivingStatus(values.livingStatus);
		setDescription(values.description);

		// Object to store the form values
		const formData = {
			firstName: values.firstName,
			lastName: values.lastName,
			yearOfBirth: values.yearOfBirth,
			gender: values.gender,
			livingStatus: values.livingStatus,
			description: values.description,
		};

		// Store the form
		localStorage.setItem("formData", JSON.stringify(formData));
	};

	return (
		<PageLayout>
			<div>
				<h2>Create a new person in your tree</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						handleFormSubmit(values);
						resetForm({ values: "" });
					}}
				>
					{(formik) => (
						<Form>
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
							<TextFieldGroup id="parentOf" label="Parent of" />

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
	yearOfBirth: "",
	gender: "",
	livingStatus: "",
	parentOf: "",
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
