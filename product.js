let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let flower = null;

for (let i = 0; i < flowers.length; i++) {
    if (flowers[i].id === id) {
        flower = flowers[i];
    }
}

let productBox = document.getElementById("productBox");

let thumbsHtml = "";

if (flower !== null) {
    for (let i = 0; i < flower.images.length; i++) {
        thumbsHtml = thumbsHtml + "<img class='thumb' src='" + flower.images[i] + "' onclick='showPhoto(" + i + ")'>";
    }
}
if (flower === null) {
    productBox.innerHTML = "<p>Sorry, we couldn't find that flower.</p>";
} else {
    productBox.innerHTML =
        "<div class='product'>" +
        "<div class='productPhotos'>" +
        "<img id='mainPhoto' src='" + flower.images[0] + "' alt='" + flower.alt + "'>" +
        "<div class='thumbs'>" + thumbsHtml + "</div>" +
        "</div>" +
        "<div class='productInfo'>" +
        "<h1>" + flower.name + "</h1>" +
        "<p class='price'>$" + flower.price + "</p>" +
        "<p>" + flower.description + "</p>" +
        "</div>" +
        "</div>";
}

function showPhoto(i) {
    document.getElementById("mainPhoto").src = flower.images[i];
}

function updatePrice(){
    let extra = Number(document.getElementById("size").value);
    let total = flower.price + extra;

    document.getElementById("totalPrice").textContent = "Total: $" + total;
}

updatePrice();