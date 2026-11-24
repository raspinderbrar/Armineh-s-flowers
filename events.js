let events = [
    { name: "Table centrepiece", price: 60, image: "", alt: "..." },
    { name: "Entrance arrangement", price: 150, image: "", alt: "..." },
    { name: "Welcome table flowers", price: 85, image: "", alt: "..." },
    { name: "Stage or backdrop flowers", price: 250, image: "", alt: "..." },
];

let planTasks = [
    { name: "Choose the event type and date", done: false },
    { name: "Pick a colour theme", done: false },
    { name: "Confirm the venue address", done: false },
    { name: "Book a consultation", done: false },
];

let savedTasks = localStorage.getItem("planTasks");

if (savedTasks !== null) {
    planTasks = JSON.parse(savedTasks);
}

let total = 0;
let book = [];

let savedBook = localStorage.getItem("book");

if (savedBook !== null) {
    book = JSON.parse(savedBook);
}

for (let i = 0; i < book.length; i++) {
    total = total + book[i].price;
}

function checkBudget() {
    let budget = Number(document.getElementById("budgetInput").value);
    let message = document.getElementById("messageInput");

    if(budget >= total) {
        message.textContent = "You're $" + (budget - total) + " under budget";
    } else {
        message.textContent = "You're $" + (total - budget) + " over budget";
    }
}

function checkBudget() {
    let typed = document.getElementById("budgetInput").value;     
    let budget = Number(typed);                                       
    let message = document.getElementById("budgetMessage");

    if (typed === "") {                                           
        message.textContent = "Please enter your budget.";
    } else if (budget >= total) {                                      
        message.textContent = "You're $" + (budget - total) + " under budget 🎉";
    } else {                                                         
        message.textContent = "You're $" + (total - budget) + " over budget";
    }
}

function showEvents() {
    let eventItems = document.getElementById("eventItems");
    let html = "";

    for (let i = 0; i < events.length; i++) {
        html = html +
            "<div class='card'>" +
            "<h3>" + events[i].name + "</h3>" +
            "<p>Price: $" + events[i].price + "</p>" +
            "<a href='#' class='button' onclick='addEvent(" + i + ")'>Book</a>" +
            "</div>";
    }
    eventItems.innerHTML = html;
}

function addEvent(i) {
    book.push(events[i]);
    total = total + events[i].price;
    updateEventPage();
}

function removeEvent(i) {
    total = total - book[i].price;
    book.splice(i, 1);
    updateEventPage();
}

function resetOrder() {
    book = [];
    total = 0;
    updateEventPage();
}

function showPlan() {
    let planList = document.getElementById("planList");
    let html = "";
    let doneCount = 0;

    for (let i = 0; i < planTasks.length; i++) {
        let checked = "";
        if (planTasks[i].done === true) {
            checked = "checked";
            doneCount = doneCount + 1;
        }

        let linkHtml = "";
        if (planTasks[i].link) {
            linkHtml = " <a href='" + planTasks[i].link + "' target='_blank'>Learn how</a>";
        }

        html = html + "<li><label><input type='checkbox' " + checked + " onclick='togglePlan(" + i + ")'> " + planTasks[i].name + linkHtml + "</label></li>";
    }

    planList.innerHTML = html;

    let planProgress = document.getElementById("planProgress");
    planProgress.textContent = doneCount + " of " + planTasks.length + " done";
}

function togglePlan(i) {
    planTasks[i].done = !planTasks[i].done;
    localStorage.setItem("planTasks", JSON.stringify(planTasks));
    showPlan();
}

function updateEventPage() {
    let totalText = document.getElementById("total");
    totalText.textContent = "Total: $" + total;

    let countText = document.getElementById("count");
    countText.textContent = "Count: " + book.length;

    let bookList = document.getElementById("bookList");
    let html = "";

    for (let i = 0; i < book.length; i++) {
        html = html + "<li>" + book[i].name + " - $" + book[i].price +
            "<button onclick='removeEvent(" + i + ")'> x</button></li>";
    }

    bookList.innerHTML = html;

    localStorage.setItem("book", JSON.stringify(book));
}

showEvents();
updateEventPage();
showPlan();

