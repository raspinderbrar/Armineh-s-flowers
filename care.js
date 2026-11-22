let tasks = [
    { name: "Trim stems at a 45-degree angle", done: false },
    { name: "Remove leaves below the water line", done: false },
    { name: "Change the water every 2 days", done: false },
    { name: "Keep away from direct sunlight", done: false },
    { name: "Add flower food", done: false },
];

let saved = localStorage.getItem("tasks");
        
if (saved !== null) {
    tasks = JSON.parse(saved);
}

function showTasks() {
    let taskList = document.getElementById("taskList");
    let html = "";

    for (let i = 0; i < tasks.length; i++) {
        let checked = "";
        if (tasks[i].done === true) {
            checked = "checked";
        }

    html = html + "<li><label><input type='checkbox' " + checked + " onclick='toggleTask(" + i + ")'> " + tasks[i].name +"</label></li>";
    }
    taskList.innerHTML = html;
}

function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}



showTasks();
