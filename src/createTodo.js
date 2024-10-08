export function createTodoFactory(
	title,
	description = "",
	dueDate = "No due date",
	priority = "Low",
	project = ""
) {
	return {
		title,
		description,
		dueDate,
		priority,
		project,
	};
}
