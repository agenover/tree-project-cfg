import React from "react";
import PageLayout from "../layout/PageLayout";
import BlankForm from "./blankForm";

export default function Form({ onSubmit = () => {} }) {
	return (
		<PageLayout>
			<div>
				<h2>Create a new person</h2>
				<BlankForm onSubmit={onSubmit} />
			</div>
		</PageLayout>
	);
}
