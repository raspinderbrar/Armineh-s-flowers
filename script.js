
        let total = 0;
        let order = [];
        let saved = localStorage.getItem("order");
        if (saved !== null) {
            order = JSON.parse(saved);
        }
        for (let i = 0; i < order.length; i++) {
            total = total + order[i].price;
        }


        function addToOrder(flowerName, price) {
            total = total + price;
            order.push({ name: flowerName, price: price });

            let message = document.getElementById("message");
            message.textContent = flowerName + " added to your order!";

            updatePage();
        }

        function removeItem(index) {
            let message = document.getElementById("message");
            message.textContent = order[index].name + " removed from your order!";

            total = total - order[index].price;
            order.splice(index, 1);

            updatePage();
        }

        function resetOrder() {
            total = 0;
            order = [];

            let message = document.getElementById("message");
            message.textContent = "";

            updatePage();
        }

        function updatePage() {
            let totalText = document.getElementById("total");
            totalText.textContent = "Total: $" + total + " / month";

            let countText = document.getElementById("count");
            countText.textContent = "Count: " + order.length;

            let orderText = document.getElementById("orderList");
            let html = "";

            for (let i = 0; i < order.length; i++) {
                html = html + "<li>" + (i + 1) + ". " + order[i].name + " <button onclick='removeItem(" + i + ")'>x</button></li>";
            }

            if (order.length === 0) {
                orderText.innerHTML = "<li>Your cart is empty</li>";
            } else {
                orderText.innerHTML = html;
            }

            let deliveryText = document.getElementById("delivery");
            if (total >= 200) {
                deliveryText.textContent = "You get free delivery!";

            } else {
                deliveryText.textContent = " Add $" + (200 - total) + " more for free delivery";
            }

            let percent = (total / 200) * 100;

            let barFill = document.getElementById("barFill");
            barFill.style.width = percent + "%";

            if (percent >= 100) {
                barFill.style.width = "100%";
                barFill.style.backgroundColor = "#8fb38a";
            } else {
                barFill.style.backgroundColor = "#d4a373";
            }

            localStorage.setItem("order", JSON.stringify(order));
        }

        function placeOrder() {
            let name = document.getElementById("customerName").value;
            let address = document.getElementById("address").value;
            let date = document.getElementById("deliveryDate").value;
            
            let confirmation = document.getElementById("confirmation");

            if (order.length === 0) {
                confirmation.textContent = "Your cart is empty. Please add some flowers to your order.";
            } else if (name === "" || address === "" || date === "") {
                confirmation.textContent = "Please fill in all delivery details.";
            } else {
                confirmation.textContent = "Thank you " + name + "! Your flowers will be delivered to " + address + " on " + date + ".";

                resetOrder();

                document.getElementById("customerName").value = "";
                document.getElementById("address").value = "";
                document.getElementById("deliveryDate").value = "";
            }
        }

        updatePage();
    