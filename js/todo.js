const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function handleTodolist(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
}

function paintTodo(addtodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = addtodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}
todoForm.addEventListener("submit", handleTodolist);
