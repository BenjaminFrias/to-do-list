import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";
import { createProject } from "./createProject";
import { startOfDay, endOfDay } from "date-fns";
import {
	getTodosFromLocalStorage,
	saveTodosToLocalStorage,
	getProjectsFromLocalStorage,
	saveProjectsToLocalStorage,
} from "./localStorage";

const mainContainer = document.querySelector(".container");
const newTodoBtn = document.querySelector("#new-to-do-btn");
const toDoPopUpContainer = document.querySelector("#to-do-pop-up-container");
const toDoPopUp = document.querySelector("#to-do-pop-up");
const closePopUpBtn = document.querySelector("#close-pop-up");
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
const inboxBtn = document.querySelector("#inbox-btn");
const todayBtn = document.querySelector("#today-btn");
const upcomingBtn = document.querySelector("#upcoming-btn");
const toggleSidebarBtn = document.querySelector("#sidebar-toggle-btn");
const contentListContainer = document.querySelector(
	".main-to-do-list-container"
);
const sidebar = document.querySelector(".sidebar");

let currentProject = "inbox";
const todoItems = getTodosFromLocalStorage();

export const userProjects = getProjectsFromLocalStorage();

loadMainPage(currentProject);

// Save new todo button

// Toggle to do pop up div
newTodoBtn.addEventListener("click", () => {
	toggleProjectInput();

	// Create save button
	const saveBtn = document.querySelector("#save-to-do");
	if (saveBtn) {
		toDoPopUp.removeChild(saveBtn);
	}

	const editedBtnsContainer = document.querySelector("#buttons-container");
	if (editedBtnsContainer) {
		toDoPopUp.removeChild(editedBtnsContainer);
	}

	const saveNewTodoBtn = document.createElement("button");
	saveNewTodoBtn.textContent = "Save task";
	saveNewTodoBtn.id = "save-to-do";
	toDoPopUp.appendChild(saveNewTodoBtn);

	saveNewTodoBtn.addEventListener("click", () => {
		if (toDoTitle.value.trim() == "") {
			alert("Please enter a task name");
		} else {
			toDoPopUpContainer.classList.remove("active");

			addTodo(getTodoValues());
			loadTask(currentProject);
			clearInputFields();
			toDoPopUp.removeChild(saveNewTodoBtn);
		}
	});

	// Show pop up
	toDoPopUpContainer.classList.add("active");
});

// Close pop up
closePopUpBtn.addEventListener("click", () => {
	const saveBtn = document.querySelector("#save-to-do");
	if (saveBtn) {
		toDoPopUp.removeChild(saveBtn);
	}
	clearInputFields();
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
		toDoProject.value.toLowerCase()
	);

	todoItems.push(newTodo);
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
		createProject(projectName);

		// Update sidebar projects

		currentProject = projectName;
		loadProjects();
		newProjectInput.value = "";
	}
});

closeProjectPopUp.addEventListener("click", () => {
	newProjectInput.value = "";
	newProjectPopUp.classList.remove("active");
});

// inbox btn event listener
inboxBtn.addEventListener("click", () => {
	currentProject = "inbox";
	loadMainPage("inbox");
	toggleProjectInput();
});

// Today section

todayBtn.addEventListener("click", () => {
	currentProject = "today";
	loadMainPage(currentProject);
});

// Today section

upcomingBtn.addEventListener("click", () => {
	currentProject = "upcoming";
	loadMainPage(currentProject);
});

// Toggle sidebar

toggleSidebarBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	toggleSidebarBtn.classList.toggle("closed");
	contentListContainer.classList.toggle("closed");
});

function loadProjects() {
	projectSidebarList.innerHTML = "";

	saveProjectsToLocalStorage(userProjects);

	for (let i = 0; i < userProjects.length; i++) {
		// Create project item
		const projectItem = document.createElement("li");

		const projectBtn = document.createElement("button");
		projectBtn.type = "button";
		projectBtn.className = "project-btn";

		projectBtn.addEventListener("click", () => {
			currentProject = userProjects[i];
			loadMainPage(currentProject);
			toggleProjectInput();
		});

		// Create icon
		const icon = document.createElement("i");
		icon.className = "material-symbols-rounded icon";
		icon.textContent = "stat_0";
		projectBtn.appendChild(icon);

		const span = document.createElement("span");
		span.textContent = userProjects[i];
		projectBtn.appendChild(span);

		// Create delete and project name
		const deleteBtn = document.createElement("button");
		deleteBtn.type = "button";
		deleteBtn.className = "delete-project-btn";

		const deleteIcon = document.createElement("i");
		deleteIcon.className = "material-symbols-rounded icon";
		deleteIcon.textContent = "delete";
		deleteBtn.appendChild(deleteIcon);

		deleteBtn.addEventListener("click", (e) => {
			const confirmation = confirm(
				"Are you sure you want to delete this?"
			);

			if (confirmation) {
				const indexOfWord = userProjects.indexOf(userProjects[i]);
				if (indexOfWord !== -1) {
					userProjects.splice(indexOfWord, 1);
				}

				currentProject = "inbox";
				loadMainPage("inbox");
				toggleProjectInput();
				loadProjects();
				loadTask(currentProject);
				e.stopPropagation();
			}
		});

		projectBtn.appendChild(deleteBtn);
		projectItem.appendChild(projectBtn);
		projectSidebarList.appendChild(projectItem);
	}

	loadProjectOptions();
}

function loadMainPage(project) {
	mainPageTitle.textContent =
		project.charAt(0).toUpperCase() + project.slice(1);

	loadTask(project);
	loadProjects();
}

function loadProjectOptions() {
	toDoProject.innerHTML = "";

	// Create inbox option
	const option = document.createElement("option");
	option.value = "inbox";
	option.textContent = "Inbox";
	toDoProject.appendChild(option);

	// Create projects option
	userProjects.forEach((project) => {
		const option = document.createElement("option");
		option.value = project;
		option.textContent = project;
		toDoProject.appendChild(option);
	});
}

// Load tasks

function loadTask(project) {
	checkWindowWidth();
	toDoList.innerHTML = "";

	const filteredTodoItems = todoItems.filter((todo) => {
		if (project === "inbox") {
			return true;
		} else if (project === "today") {
			return isForToday(todo);
		} else if (project === "upcoming") {
			return isForUpcoming(todo);
		} else {
			return todo.project === project; // Filter items based on the specified project
		}
	});

	// Delete to do's if theirs project is deleted
	todoItems.forEach((item, i) => {
		if (
			!isValidProject(item.project, userProjects) &&
			item.project != "inbox"
		) {
			todoItems.splice(i, 1);
			updateNumberOfTasks(filteredTodoItems.length);
		}
	});

	updateNumberOfTasks(filteredTodoItems ? filteredTodoItems.length : 23);

	filteredTodoItems.forEach((item, i) => {
		const toDoItem = document.createElement("li");
		toDoItem.classList.add("to-do-item");

		// Complete checkbox
		const completeInput = document.createElement("input");
		completeInput.type = "checkbox";
		completeInput.name = "to-do-complete";

		completeInput.addEventListener("click", () => {
			setTimeout(() => {
				toDoItem.classList.add("completed");
			}, 100);

			setTimeout(() => {
				todoItems.splice(i, 1);
				toDoList.removeChild(toDoItem);

				const toDosLength = document.querySelectorAll(".to-do-item");
				loadTask(currentProject);
				updateNumberOfTasks(toDosLength.length);
			}, 500);
		});

		// To do Title
		const toDoTitleText = document.createElement("p");
		toDoTitleText.classList.add("to-do-title");
		toDoTitleText.textContent = item.title;

		// Date text
		const toDoDateText = document.createElement("p");
		toDoDateText.classList.add("to-do-date-text");

		if (!item.dueDate) {
			toDoDateText.textContent = "No date";
		} else if (isForToday(item)) {
			toDoDateText.textContent = "Today";
		} else {
			const date = new Date(item.dueDate);
			const options = { month: "short", day: "numeric" };
			const formmatedDate = date.toLocaleDateString("en-US", options);

			toDoDateText.textContent = formmatedDate;
		}

		// Priority Btn
		const priorityBtn = document.createElement("button");
		priorityBtn.classList.add("to-do-priority");

		let colorPopupActive = false;
		priorityBtn.addEventListener("click", () => {
			colorPopupActive = !colorPopupActive;

			if (colorPopupActive) {
				const colorPopUps = document.querySelectorAll("#color-pop-up");
				if (colorPopUps.length > 0) {
					colorPopUps.forEach((popUp) => {
						mainContainer.removeChild(popUp);
					});
				}

				// Create priorities Pop up
				const colorPopup = document.createElement("div");
				colorPopup.id = "color-pop-up";

				const icons = [
					{ className: "none" },
					{ className: "low" },
					{ className: "medium" },
					{ className: "high" },
				];

				icons.forEach((icon) => {
					const iconElement = document.createElement("i");
					iconElement.className = `material-symbols-rounded icon ${icon.className}`;
					iconElement.textContent = "radio_button_checked";
					colorPopup.appendChild(iconElement);
				});

				mainContainer.appendChild(colorPopup);

				colorPopup.addEventListener("click", (event) => {
					const clickedElement = event.target;
					if (clickedElement.classList.contains("icon")) {
						item.priority = clickedElement.classList[2];
						colorPopup.classList.remove("active");
						loadTask(currentProject);
					}
				});

				colorPopup.classList.add("active");

				// Get the button's position
				const buttonRect = priorityBtn.getBoundingClientRect();

				// Calculate the options div's position
				const optionsLeft = buttonRect.left;
				const optionsTop = buttonRect.top;

				// Set the options div's position
				colorPopup.style.left = optionsLeft + 10 + "px";
				colorPopup.style.top = optionsTop + "px";
			} else {
				const colorPopUps = document.querySelectorAll("#color-pop-up");
				if (colorPopUps.length > 0) {
					colorPopUps.forEach((popUp) => {
						mainContainer.removeChild(popUp);
					});
				}
			}
		});

		const priorityIcon = document.createElement("i");
		priorityIcon.classList.add(
			"material-symbols-rounded",
			"icon",
			item.priority
		);
		priorityIcon.textContent = "radio_button_checked";

		priorityBtn.appendChild(priorityIcon);

		// Append items to To Do
		toDoItem.appendChild(completeInput);
		toDoItem.appendChild(toDoTitleText);
		toDoItem.appendChild(toDoDateText);
		toDoItem.appendChild(priorityBtn);

		// Append To do to List
		toDoList.appendChild(toDoItem);

		// Edit todos
		toDoItem.addEventListener("click", (e) => {
			if (
				e.target.classList.contains("to-do-title") ||
				e.target.classList.contains("to-do-item")
			) {
				// Paste values into pop up
				toDoPopUpContainer.classList.add("active");
				toDoTitle.value = item.title;
				toDoDescription.value = item.description;

				if (project != "inbox") {
					const projectIndex = userProjects.indexOf(item.project);
					toDoProject.selectedIndex = projectIndex + 1;
				} else {
					toDoProject.selectedIndex = 0;
				}

				toDoDueDate.value = item.dueDate;

				const priorityIndex = ["none", "low", "medium", "high"].indexOf(
					item.priority
				);

				toDoPriority.selectedIndex = priorityIndex;

				// Create save edited todo button
				const buttonsContainer = document.createElement("div");
				buttonsContainer.id = "buttons-container";
				toDoPopUp.appendChild(buttonsContainer);

				const checkBtnsContainer =
					document.querySelector("#buttons-container");
				if (checkBtnsContainer) {
					toDoPopUp.removeChild(checkBtnsContainer);
				}

				const saveEditedTaskBtn = document.createElement("button");
				saveEditedTaskBtn.textContent = "Save task";
				saveEditedTaskBtn.id = "save-edited-btn";
				buttonsContainer.appendChild(saveEditedTaskBtn);
				toDoPopUp.appendChild(buttonsContainer);

				// Create delete to do button
				const deleteToDoBtn = document.createElement("button");
				deleteToDoBtn.id = "delete-to-do-btn";
				deleteToDoBtn.textContent = "Delete";
				buttonsContainer.appendChild(deleteToDoBtn);

				deleteToDoBtn.addEventListener("click", () => {
					const confirmation = confirm(
						"Are you sure you want to delete this?"
					);

					if (confirmation) {
						todoItems.splice(i, 1);
						toDoList.removeChild(toDoItem);
						const toDosLength =
							document.querySelectorAll(".to-do-item");
						updateNumberOfTasks(toDosLength.length);

						toDoPopUpContainer.classList.remove("active");
						toDoPopUp.removeChild(buttonsContainer);
						clearInputFields();
						loadTask(currentProject);
					}
				});

				saveEditedTaskBtn.addEventListener("click", () => {
					if (toDoTitle.value.trim() == "") {
						alert("Please enter a task name");
					} else {
						toDoPopUpContainer.classList.remove("active");

						// Set new values for task item
						const [title, description, date, priority, project] =
							getTodoValues();

						item.title = title;
						item.description = description;
						item.dueDate = date;
						item.priority = priority;
						item.project = project.toLowerCase();

						loadTask(currentProject);
						clearInputFields();
						toDoPopUp.removeChild(buttonsContainer);
					}
				});
			}
		});
	});

	saveTodosToLocalStorage(todoItems);
}

function isValidProject(project, validProjects) {
	const projectSet = new Set(validProjects);
	return projectSet.has(project);
}

function toggleProjectInput() {
	// Select option for current project
	const options = toDoProject.querySelectorAll("option");
	for (let i = 0; i < options.length; i++) {
		if (options[i].value === currentProject) {
			options[i].selected = true;
		} else {
			options[i].selected = false;
		}
	}
}

function updateNumberOfTasks(length) {
	const numberOfTasks = document.querySelector("#to-dos-length");
	numberOfTasks.textContent = `${length} Tasks`;
}

function isForToday(todo) {
	const today = new Date();

	if (!todo.dueDate) {
		return false; // Exclude todos without dates
	}
	const [year, month, day] = todo.dueDate.split("-");
	const todoDate = new Date(year, month - 1, day);

	const startOfDayToday = startOfDay(today);
	const endOfDayToday = endOfDay(today);

	const isForToday = todoDate >= startOfDayToday && todoDate <= endOfDayToday;

	return isForToday;
}

function isForUpcoming(todo) {
	const today = new Date();

	if (!todo.dueDate) {
		return false;
	}
	const [year, month, day] = todo.dueDate.split("-");
	const todoDate = new Date(year, month - 1, day);

	const startOfDayToday = startOfDay(today);

	const isForUpcoming = todoDate > startOfDayToday;

	return isForUpcoming;
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

function checkWindowWidth() {
	if (window.innerWidth < 450) {
		sidebar.classList.remove("open");
		toggleSidebarBtn.classList.add("closed");
		contentListContainer.classList.add("closed");
	}
}

window.addEventListener("resize", checkWindowWidth);
