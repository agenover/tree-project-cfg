import React from "react";
import PageLayout from "../layout/PageLayout";
import { Formik, Form } from "formik";

export default function BlankForm() {
	return (
		<PageLayout>
			<div>
				<h2>Form</h2>
				<Formik>
					<Form></Form>
				</Formik>
			</div>
		</PageLayout>
	);
}
