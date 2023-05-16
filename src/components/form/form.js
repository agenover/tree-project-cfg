import React from "react";
import PageLayout from "../layout/PageLayout";
import FormBlank from "./formBlank";

export default function Form({ onSubmit = () => {} }) {
	return (
		<PageLayout>
			<div>
				<h2>Create a new person</h2>
				<FormBlank onSubmit={onSubmit} />
			</div>
		</PageLayout>
	);
}
