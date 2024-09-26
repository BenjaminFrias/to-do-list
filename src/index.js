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

let currentProject = "Inbox";
const todoItems = [];

// Save new todo button
saveNewTodoBtn.addEventListener("click", () => {
	if (toDoTitle.value.trim() == "") {
		alert("Please enter a task name");
	} else {
		toDoPopUpContainer.classList.remove("active");
		addTodo(getTodoValues());
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

	console.log(todoItems);
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
