import * as Yup from "yup";
import PageLayout from "../layout/PageLayout";
import { TextFieldGroup } from "./formTextFields";
import { Formik, Form } from "formik";
import { RadioGroup, GenderGroupItem, StateGroupItem } from "./formRadioGroups";
import { v4 as uuidv4 } from "uuid";

export default function FormBlank() {
	const handleFormSubmit = (values) => {
		addPerson(values);
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
							<div>
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
	yearOfBirth: Yup.number()
		.required("Year of Birth is required")
		.positive()
		.min(1, "Minimum year 1"),
	state: Yup.string().required("Living Status is required"),
	gender: Yup.string().required("gender is required"),
});

const addPerson = (person) => {
	const rawData = localStorage.getItem("site-data");
	const currentData = rawData ? JSON.parse(rawData) : [];
	const uniqueId = uuidv4();
	person.uniqueId = uniqueId;
	currentData.push(person);
	localStorage.setItem("site-data", JSON.stringify(currentData));
};
