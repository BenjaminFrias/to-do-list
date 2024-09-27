import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";
import { createProject } from "./createProject";

const newTodoBtn = document.querySelector("#new-to-do-btn");
const toDoPopUpContainer = document.querySelector("#to-do-pop-up-container");
const closePopUpBtn = document.querySelector("#close-pop-up");
const saveNewTodoBtn = document.querySelector("#save-to-do");
const toDoTitle = document.querySelector("#to-do-title");
const toDoDescription = document.querySelector("#to-do-description");
const toDoProject = document.querySelector("#to-do-project");
const toDoDueDate = document.querySelector("#to-do-date");
const toDoPriority = document.querySelector("#to-do-priority");
const toDoList = document.querySelector("#to-do-list");
const newProjectPopUp = document.querySelector("#new-project-pop-up-container");
const newProjectBtn = document.querySelector("#add-new-project-btn");
const saveNewProjectBtn = document.querySelector("#save-project-pop-up");
const closeProjectPopUp = document.querySelector("#close-project-pop-up");
const newProjectInput = document.querySelector("#new-project-title");
const projectSidebarList = document.querySelector(".projects-sidebar-list");
const mainPageTitle = document.querySelector("#project-name");

let currentProject = "Inbox";
const todoItems = [];
export const userProjects = [];

loadMainPage(currentProject);

// Save new todo button
saveNewTodoBtn.addEventListener("click", () => {
	if (toDoTitle.value.trim() == "") {
		alert("Please enter a task name");
	} else {
		toDoPopUpContainer.classList.remove("active");
		addTodo(getTodoValues());
		loadTask(currentProject);
		clearInputFields();
		updateNumberOfTasks();
	}
});

// Toggle to do pop up div
newTodoBtn.addEventListener("click", () => {
	// Select option for current project
	const options = toDoProject.querySelectorAll("option");
	for (let i = 0; i < options.length; i++) {
		if (options[i].value === currentProject) {
			options[i].selected = true;
		} else {
			options[i].selected = false;
		}
	}

	toDoPopUpContainer.classList.add("active");
});

// Close pop up
closePopUpBtn.addEventListener("click", () => {
	toDoPopUpContainer.classList.remove("active");
});

// Date picker - flatpickr
const datePicker = document.querySelector("#date-container");
flatpickr(datePicker, { wrap: true });

// Save new todo function
function addTodo() {
	const newTodo = createTodoFactory(
		toDoTitle.value,
		toDoDescription.value,
		toDoDueDate.value,
		toDoPriority.value,
		toDoProject.value
	);

	todoItems.push(newTodo);
}

// Create new todo pop up

function updateNumberOfTasks() {
	const numberOfTasks = document.querySelector("#to-dos-length");
	const todoLength = todoItems.length;

	numberOfTasks.textContent = `${todoLength} Tasks`;
}

// Create new project

newProjectBtn.addEventListener("click", () => {
	newProjectPopUp.classList.add("active");
});

saveNewProjectBtn.addEventListener("click", () => {
	const projectName = newProjectInput.value;
	if (projectName == "") {
		alert("Please enter a project name");
	} else {
		newProjectPopUp.classList.remove("active");
		userProjects.push(projectName);

		// Create the option for new todo
		const option = document.createElement("option");
		option.value = projectName;
		option.textContent = projectName;
		toDoProject.appendChild(option);

		// Update sidebar projects
		loadProjects();
		newProjectInput.value = "";
	}
});

closeProjectPopUp.addEventListener("click", () => {
	newProjectInput.value = "";
	newProjectPopUp.classList.remove("active");
});

function loadProjects() {
	projectSidebarList.innerHTML = "";

	for (let i = 0; i < userProjects.length; i++) {
		const projectItem = document.createElement("li");

		const button = document.createElement("button");
		button.type = "button";
		button.className = "project-btn";

		const icon = document.createElement("i");
		icon.className = "material-symbols-rounded icon";
		icon.textContent = "stat_0";
		button.appendChild(icon);

		const span = document.createElement("span");
		span.textContent = userProjects[i];
		button.appendChild(span);

		button.addEventListener("click", () => {
			currentProject = userProjects[i];
			loadMainPage(currentProject);
		});

		projectItem.appendChild(button);
		projectSidebarList.appendChild(projectItem);
	}
}

function loadMainPage(project) {
	mainPageTitle.textContent = project;
	updateNumberOfTasks();

	loadTask(project);
}

// Load tasks

function loadTask(project) {
	toDoList.innerHTML = "";

	if (project == "Inbox") {
		todoItems.forEach((item, i) => {
			const toDoItem = document.createElement("li");
			toDoItem.classList.add("to-do-item");

			const completeInput = document.createElement("input");
			completeInput.type = "checkbox";
			completeInput.name = "to-do-complete";

			completeInput.addEventListener("click", () => {
				toDoItem.classList.add("completed");

				setTimeout(() => {
					todoItems.splice(i, 1);
					toDoList.removeChild(toDoItem);
					updateNumberOfTasks();
				}, 300);
			});

			const toDoTitle = document.createElement("p");
			toDoTitle.classList.add("to-do-title");
			toDoTitle.textContent = item.title;

			const priorityBtn = document.createElement("button");
			priorityBtn.classList.add("to-do-priority");

			const icon = document.createElement("i");
			icon.classList.add(
				"material-symbols-rounded",
				"icon",
				item.priority
			);
			icon.textContent = "radio_button_checked";

			priorityBtn.appendChild(icon);

			toDoItem.appendChild(completeInput);
			toDoItem.appendChild(toDoTitle);
			toDoItem.appendChild(priorityBtn);

			toDoList.appendChild(toDoItem);
		});
	}
}

function getTodoValues() {
	return [
		toDoTitle.value,
		toDoDescription.value,
		toDoDueDate.value,
		toDoPriority.value,
		toDoProject.value,
	];
}

function clearInputFields() {
	toDoTitle.value = "";
	toDoDescription.value = "";
	toDoDueDate.value = "";
	toDoPriority.selectedIndex = 0;
	toDoProject.selectedIndex = 0;
}
