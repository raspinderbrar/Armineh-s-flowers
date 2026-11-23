let events = [
    {name: "Table centrepiece", price: 60, image:"", alt:"..."},
    {name: "Entrance arrangement", price: 150, image:"", alt:"..."},
    {name: "Welcome table flowers", price: 85, image:"", alt:"..."},
    {name: "Stage or backdrop flowers", price: 250, image:"", alt:"..."},
];

let total = 0;
let book = [];

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

    showEvents();

function addEvent(i) {
    book.push(events[i]);
    total = total + events[i]. price;
    updateEventPage();
}    

function resetOrder() {
    book = [];
    total = 0;
    updateEventPage();
}

function updateEventPage() {
    let totalText = document.getElementById("total");
    totalText.textContent = "Total: $" + total;

    let countText = document.getElementById("count");
    countText.textContent = "Count: " + book.length;

    let bookList = document.getElementById("bookList");
    let html = "";

    for (let i = 0; i < book.length; i++) {
        html = html + "<li>" + book[i].name + " - $" + book[i].price + "</li>"
    }

    bookList.innerHTML = html; 
}

showEvents();
updateEventPage();

