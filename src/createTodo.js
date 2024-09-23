export function createTodoFactory(
	title,
	description = "Add a description",
	dueDate,
	priority = "Low",
	notes = "Add notes",
	project = "default"
) {
	return {
		title,
		description,
		dueDate,
		priority,
		notes,
		project,
	};
}
