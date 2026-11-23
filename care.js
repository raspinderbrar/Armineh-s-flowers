let freshTasks = [
    { name: "Trim stems at a 45-degree angle", done: false, link:"https://www.google.com/search?q=how+to+trim+flower+stems" },
    { name: "Remove leaves below the water line", done: false },
    { name: "Change the water every 2 days", done: false },
    { name: "Keep away from direct sunlight", done: false },
    { name: "Add flower food", done: false, link:"https://www.google.com/search?q=homemade+flower+food" },
];

let driedTasks = [
    { name: "Keep away from water and humidity", done: false },
    { name: "Dust gently with a soft brush", done: false },
    { name: "Keep out of direct sunlight to stop fading", done: false },
    { name: "Avoid touching the petals", done: false },
]

let savedFresh = localStorage.getItem("fresh");
        
if (savedFresh !== null) {
    tasks = JSON.parse(savedFresh);
}

let savedDried = localStorage.getItem("dried");
        
if (savedDried !== null) {
    tasks = JSON.parse(savedDried);
}

let currentList = "fresh";
let tasks = freshTasks;

function chooseList(name) {
    currentList = name;

    if (name === "fresh") {
        tasks = freshTasks;
    } else {
        tasks = driedTasks;
    }
    
    showTasks();
}    

function showTasks() {
    let taskList = document.getElementById("taskList");
    let html = "";
    let doneCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        let checked = "";
        if (tasks[i].done === true) {
            checked = "checked";
            doneCount = doneCount + 1;
        }

    let linkHtml = "";
    if (tasks[i].link) {
        linkHtml = " <a href='" + tasks[i].link + "' target='_blank>Learn how</a>";
    }

    html = html + "<li><label><input type='checkbox' " + checked + " onclick='toggleTask(" + i + ")'> " + tasks[i].name + linkHtml + "</label></li>";
    }
    taskList.innerHTML = html;

    let progress = document.getElementById("progress");
    progress.textContent = doneCount + " of " + tasks.length + " done";

    let percent = (doneCount / tasks.length) * 100;

    let barFill = document.getElementById("barFill");
    barFill.style.width = percent + "%";

    if (percent >= 100) {
        barFill.style.width = "100%";
        barFill.style.backgroundColor = "#8fb38a";
    } else { 
        barFill.style.backgroundColor = "#d4a373";  
    }
}

function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
    localStorage.setItem(currentList, JSON.stringify(tasks));
    showTasks();
}

function startOver() {
    localStorage.removeItem(currentList);
    location.reload();
}

showTasks();
