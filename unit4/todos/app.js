const inputForm = document.querySelector('#todo-form');
const ul = document.querySelector('ul');
const inputTodo = document.querySelector('#todo-text');

if (localStorage.getItem('todoStorage')) {
    restoreTodos();
}

// function for creating todo elements
function createTodoElement(text) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");
    
    input.type = "checkbox";
    label.textContent = text;
    label.setAttribute("name", "todoItem");
    button.textContent = "X";
    li.append(input, label, button);
    ul.append(li);
}

// store elements in localStorage
function storeTodos() {
    const labels = document.querySelectorAll('label[name="todoItem"]');

    const todoStorage = [];
    for (let label of labels) {
        todoStorage.push(label.textContent);
    }

    const converted = JSON.stringify(todoStorage);
    localStorage.setItem("todoStorage", converted);
}

// read elements in localStorage and restore them from previous session
function restoreTodos() {
    todoItems = JSON.parse(localStorage.getItem("todoStorage"));

    for (let item of todoItems) {
        createTodoElement(item);
    }
}

// stop form from refreshing
inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    createTodoElement(inputTodo.value);
    inputTodo.value = "";  // clear input field after inserting todo
    storeTodos();  // store todo in memory
})

// delegate listener for todo items
ul.addEventListener("click", function(e) {

    // strikeout completed todos
    if (e.target.tagName === "INPUT") {
        e.target.nextElementSibling.classList.toggle("completed");
    }

    // remove friends
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})
