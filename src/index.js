import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";

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

let currentProject = "Inbox";
const todoItems = [];

loadTask(currentProject);

// Save new todo button
saveNewTodoBtn.addEventListener("click", () => {
	if (toDoTitle.value.trim() == "") {
		alert("Please enter a task name");
	} else {
		toDoPopUpContainer.classList.remove("active");
		addTodo(getTodoValues());
		loadTask(currentProject);
	}
});

// Toggle to do pop up div
newTodoBtn.addEventListener("click", () => {
	// Close pop up
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

	clearInputFields();
}

function loadTask(project) {
	toDoList.innerHTML = "";

	if (project == "Inbox") {
		todoItems.forEach((item) => {
			const toDoItem = document.createElement("li");
			toDoItem.classList.add("to-do-item");

			const completeInput = document.createElement("input");
			completeInput.type = "checkbox";
			completeInput.name = "to-do-complete";
			toDoItem.classList.add("to-do-complete-btn");

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
