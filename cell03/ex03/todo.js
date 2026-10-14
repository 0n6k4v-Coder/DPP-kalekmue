const ft_list = document.getElementById("ft_list");
const addNewBTN = document.getElementById("new_btn");

function saveTodos() {
    const todos = [];

    ft_list.querySelectorAll(".todo").forEach(todo => {
        todos.push({
            id: todo.id,
            text: todo.querySelector(".todo-text").textContent
        });
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos))
        + "; max-age=2592000; path=/; SameSite=Lax";
}

function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find(item => item.startsWith("todos="));

    if (!cookie) return;

    const value = decodeURIComponent(
        cookie.substring("todos=".length)
    );

    if (!value) return;

    let todos;

    try {
        todos = JSON.parse(value);
    } catch (error) {
        console.error("Could not load todos:", error);
        return;
    }

    ft_list.innerHTML = "";

    todos.forEach(item => {
        const newTodo = document.createElement("div");
        const text = document.createElement("span");

        newTodo.id = item.id;
        newTodo.className = "todo";

        text.className = "todo-text";
        text.textContent = item.text;

        newTodo.append(text);
        addDeleteBtn(newTodo);
        ft_list.append(newTodo);
    });
}

function deleteToDo(todo) {
    if (confirm("Are you sure you want to delete this item?")) {
        todo.remove();
        saveTodos();
    }
}

function addDeleteBtn(todo) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    todo.append(deleteBtn);

    deleteBtn.addEventListener("click", () => deleteToDo(todo));
}

function addNewToDo() {
    const text = prompt("Enter your new todo:");

    if (!text || !text.trim()) return;

    const newTodo = document.createElement("div");
    const todoText = document.createElement("span");

    newTodo.id = crypto.randomUUID();
    newTodo.className = "todo";

    todoText.className = "todo-text";
    todoText.textContent = text.trim();

    newTodo.append(todoText);
    addDeleteBtn(newTodo);

    ft_list.prepend(newTodo);
    saveTodos();
}

addNewBTN.addEventListener("click", addNewToDo);

loadTodos();
