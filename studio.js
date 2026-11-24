let services = [
    {name: "Wedding", description: "Bridal bouquets, ceremony arches and reception flowers"},
    {name: "Corporate events", description: "Elegant arrangements for launches, offices and galas."},
    {name: "Birthdays & celebrations", description: "Colourful designs that make any party feel special."},
    {name: "Installations", description: "Large floral pieces, flower walls and statement displays."},

]

function showServices() {
     let serviceBox = document.getElementById("serviceList");
     let html = "";
    
    for (let i = 0; i < services.length; i++) {
        html = html +
            "<div class='service'>" +
            "<h3>" + services[i].name + "</h3>" +
            "<p>" + services[i].description + "</p>" +
            "</div>";

    }
    serviceBox.innerHTML = html;
}

function sendInquiry() {
    let name = document.getElementById("inquiryName").value;
    let email = document.getElementById("inquiryEmail").value;
    let date = document.getElementById("inquiryDate").value;
    let type = document.getElementById("eventType").value;
    let details = document.getElementById("inquiryDetails").value;

    let message = document.getElementById("inquiryMessage");

 if (name === "" || email === "" || date === "" || type === "" || details === "") {                                           
        message.textContent = "Please fill in all the fields.";
    } else if (!email.includes("@")) {                                      
        message.textContent = "Please enter a valid email.";
    } else {                                                         
        message.textContent = "Thank you, " + name + "! We'll be in touch about your event soon.";
 
        document.getElementById("inquiryName").value = "";
        document.getElementById("inquiryEmail").value = "";
        document.getElementById("inquiryDate").value = "";
        document.getElementById("eventType").value = "";
        document.getElementById("inquiryDetails").value = "";
    }
}
showServices();