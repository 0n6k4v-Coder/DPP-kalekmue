const ft_list = $("#ft_list");
const addNewBTN = $("#new_btn");

function saveTodos() {
    const todos = [];

    // jQuery: ใช้ .find() และ .each() แทน querySelectorAll และ forEach
    ft_list.find(".todo").each(function() {
        const todo = $(this);
        todos.push({
            id: todo.attr("id"), // ดึง id ด้วย .attr()
            text: todo.find(".todo-text").text() // ดึงข้อความด้วย .text()
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

    // jQuery: ใช้ .empty() ล้างข้อมูลข้างในแทนการเขียน .innerHTML = ""
    ft_list.empty();

    todos.forEach(item => {
        // jQuery: สร้าง Element ใหม่สไตล์ jQuery สั้นและกระชับขึ้น
        const newTodo = $("<div></div>", { id: item.id, class: "todo" });
        const text = $("<span></span>", { class: "todo-text", text: item.text });

        newTodo.append(text);
        addDeleteBtn(newTodo);
        
        // jQuery: ใช้ .append() ต่อเข้ากับฟังก์ชันลิสต์หลัก
        ft_list.append(newTodo);
    });
}

function deleteToDo(todo) {
    if (confirm("Are you sure you want to delete this item?")) {
        todo.remove(); // jQuery Object สามารถสั่ง .remove() ได้เลย
        saveTodos();
    }
}

function addDeleteBtn(todo) {
    // jQuery: สร้างปุ่มลบสไตล์ jQuery
    const deleteBtn = $("<button>X</button>");

    todo.append(deleteBtn);

    // jQuery: ใช้ .on("click") แทน addEventListener
    deleteBtn.on("click", () => deleteToDo(todo));
}

function addNewToDo() {
    const text = prompt("Enter your new todo:");

    // jQuery: ใช้ $.trim() จัดการช่องว่างข้อความ
    if (!text || !$.trim(text)) return;

    // jQuery: สร้างชิ้นส่วนข้อมูลใหม่โดยคงไอดีสุ่มด้วย crypto.randomUUID()
    const newTodo = $("<div></div>", { id: crypto.randomUUID(), class: "todo" });
    const todoText = $("<span></span>", { class: "todo-text", text: $.trim(text) });

    newTodo.append(todoText);
    addDeleteBtn(newTodo);

    // jQuery: ใช้ .prepend() เพื่อดันข้อมูลใหม่ขึ้นไปอยู่อันแรกสุดของลิสต์
    ft_list.prepend(newTodo);
    saveTodos();
}

// jQuery: ใช้ .on("click") ดักจับปุ่มกดเพิ่ม To-Do
addNewBTN.on("click", addNewToDo);

loadTodos();
