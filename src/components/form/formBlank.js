import React from "react";
import * as Yup from "yup";
import { TextFieldGroup } from "./formTextFields";
import { Formik, Form } from "formik";
import { RadioGroup, GenderGroupItem, StateGroupItem } from "./formRadioGroups";

export default function FormBlank({onFormSubmit = () => {}, initialValues=blankInitialValues }) {
	return (
			<div>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(person, { resetForm }) => {
						onFormSubmit(person);
						resetForm({ person: "" });
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
							<TextFieldGroup
								id="yearOfBirth"
								label="Year of Birth"
								error={formik.errors.yearOfBirth}
							/>
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
								error={formik.errors.livingStatus}
							>
								<StateGroupItem
									groupName="livingStatus"
									value="living"
									label="Living"
								/>
								<StateGroupItem
									groupName="livingStatus"
									value="deceased"
									label="Deceased"
								/>
							</RadioGroup>
							<TextFieldGroup id="parentOf" label="Parent of" />

							<TextFieldGroup
								id="description"
								label="Add a description (optional)"
								error={formik.errors.description}
							/>
							<div>
								<button type="submit">Save</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
	);
}

const blankInitialValues = {
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
	yearOfBirth: Yup.number()
		.required("Year of Birth is required")
		.positive()
		.min(1, "Minimum year 1"),
	livingStatus: Yup.string().required("Living Status is required"),
	gender: Yup.string().required("gender is required"),
});
