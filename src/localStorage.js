export function getTodosFromLocalStorage() {
	const storedTodos = localStorage.getItem("todos");
	return storedTodos ? JSON.parse(storedTodos) : [];
}

export function saveTodosToLocalStorage(todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
}

export function getProjectsFromLocalStorage() {
	const storedProjects = localStorage.getItem("projects");
	return storedProjects ? JSON.parse(storedProjects) : [];
}

export function saveProjectsToLocalStorage(projects) {
	localStorage.setItem("projects", JSON.stringify(projects));
}
