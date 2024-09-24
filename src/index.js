import "./styles.css";
import "./reset.css";
import { createTodoFactory } from "./createTodo";

const datePicker = document.getElementById("date-container");
flatpickr(datePicker, { wrap: true });
