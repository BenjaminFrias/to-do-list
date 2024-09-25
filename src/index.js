import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";

const newTodoBtn = document.querySelector("#new-to-do-btn");
const toDoPopUpContainer = document.querySelector("#to-do-pop-up-container");
const closePopUpBtn = document.querySelector("#close-pop-up");

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
