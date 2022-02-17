const form = document.querySelector("#add_todo_form");

const todoList = document.querySelector("#todo_output");
const todoInput = document.querySelector("#input_todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoItem = document.createElement("div");
  todoItem.innerText = todoInput.value;
  todoItem.classList.add("todo_item");

  todoList.appendChild(todoItem);

  todoInput.value = "";

  todoItem.addEventListener("click", function () {
    todoItem.remove();
  });
});

