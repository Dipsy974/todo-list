// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Create toDo div
  if (todoInput.value != "") {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append div to ul List
    todoList.appendChild(todoDiv);
    //Clear input value
    todoInput.value = "";
    todoInput.placeholder = "";
  } else {
    todoInput.placeholder = "Add something";
  }
}

function deleteCheck(event) {
  const item = event.target;

  //Delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("deleting");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //Check mark item
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todoList.children;
  for (todo of todos) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  }
}
