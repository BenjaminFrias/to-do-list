import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";

const newTodoBtn = document.querySelector("#new-to-do-btn");
const toDoPopUpContainer = document.querySelector("#to-do-pop-up-container");
const closePopUpBtn = document.querySelector("#close-pop-up");

const toDoTitle = document.querySelector("#to-do-title");
const toDoDescription = document.querySelector("#to-do-description");
const toDoDueDate = document.querySelector("#to-do-date");
const saveNewTodoBtn = document.querySelector("#save-to-do");

let currentProject = "Inbox";
const todoItems = [];

// POP UP

// Save new todo function
function addTodo() {
	const newTodo = createTodoFactory(
		toDoTitle.value,
		toDoDescription.value,
		toDoDueDate.value
	);

	todoItems.push(newTodo);
}

// Save new todo button
saveNewTodoBtn.addEventListener("click", () => {
	if (toDoTitle.value) {
		toDoPopUpContainer.classList.remove("active");
		addTodo();
	}
});

// Toggle to do pop up div
newTodoBtn.addEventListener("click", () => {
	toDoPopUpContainer.classList.add("active");
});

// Close pop up button
closePopUpBtn.addEventListener("click", () => {
	toDoPopUpContainer.classList.remove("active");
});

// Date picker - flatpickr
const datePicker = document.querySelector("#date-container");
flatpickr(datePicker, { wrap: true });
