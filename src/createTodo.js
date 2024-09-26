export function createTodoFactory(
	title,
	description = "Add a description",
	dueDate,
	priority = "Low",
	project = "Inbox"
) {
	return {
		title,
		description,
		dueDate,
		priority,
		project,
	};
}
