// Sample restaurant data
const restaurants = [
    {
        name: "Pizza Place",
        location: "Mumbai, Maharashtra",
        hours: "11 AM - 11 PM",
        price: "$$",
        menu: ["Margherita Pizza - $10", "Pepperoni Pizza - $12", "Veggie Pizza - $9"],
        description: "Best pizzas in town!",
        rating: 4.5
    },
    {
        name: "Burger Joint",
        location: "Delhi",
        hours: "10 AM - 12 AM",
        price: "$",
        menu: ["Cheeseburger - $5", "Veggie Burger - $4", "Double Bacon Burger - $8"],
        description: "Delicious burgers!",
        rating: 4.0
    },
    {
        name: "Sushi Spot",
        location: "Bangalore, Karnataka",
        hours: "12 PM - 10 PM",
        price: "$$$",
        menu: ["California Roll - $8", "Salmon Sashimi - $12", "Tempura Udon - $10"],
        description: "Fresh sushi every day!",
        rating: 4.8
    },
    {
        name: "Tandoori Nights",
        location: "Chennai, Tamil Nadu",
        hours: "11 AM - 11 PM",
        price: "$$",
        menu: ["Chicken Tandoori - $15", "Paneer Tikka - $12", "Biryani - $10"],
        description: "Authentic Indian flavors!",
        rating: 4.6
    },
    {
        name: "Seafood Haven",
        location: "Kochi, Kerala",
        hours: "12 PM - 11 PM",
        price: "$$$",
        menu: ["Fish Curry - $12", "Prawns Biryani - $15", "Crab Masala - $20"],
        description: "Best seafood in the area!",
        rating: 4.7
    },
];

const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const restaurantList = document.getElementById("restaurantList");

// Function to display restaurant details
function displayRestaurants() {
    restaurantList.innerHTML = ""; // Clear previous listings
    restaurants.forEach((restaurant) => {
        const div = document.createElement("div");
        div.className = "restaurant";
        div.innerHTML = `
            <strong>${restaurant.name}</strong><br>
            Location: ${restaurant.location}<br>
            Hours: ${restaurant.hours}<br>
            Price Range: ${restaurant.price}<br>
            Menu: <ul>${restaurant.menu.map(item => `<li>${item}</li>`).join("")}</ul><br>
            Description: ${restaurant.description}<br>
            Rating: ${restaurant.rating}
        `;
        restaurantList.appendChild(div);
    });
}

// Function to get a response based on user input
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // FAQ responses
    if (lowerCaseMessage.includes("restaurant timings")) {
        return "Our restaurant timings vary by location. Please check the specific restaurant for its hours of operation.";
    } else if (lowerCaseMessage.includes("track my food order")) {
        return "You can track your food order through the order tracking link sent to your email or via our mobile app.";
    } else if (lowerCaseMessage.includes("apply coupon codes")) {
        return "To apply a coupon code, enter it during the checkout process in the designated field.";
    } else if (lowerCaseMessage.includes("report an issue")) {
        return "To report an issue with your order, please contact our customer support through the app or website.";
    } else if (lowerCaseMessage.includes("restaurant")) {
        return "Here are some restaurant suggestions:";
    } else if (lowerCaseMessage.includes("pizza")) {
        return "You can try 'Pizza Place' for the best pizzas in town!";
    } else if (lowerCaseMessage.includes("burger")) {
        return "Check out 'Burger Joint' for delicious burgers!";
    } else if (lowerCaseMessage.includes("sushi")) {
        return "You should visit 'Sushi Spot' for fresh sushi!";
    } else if (lowerCaseMessage.includes("tandoori")) {
        return "Don't miss 'Tandoori Nights' for authentic Indian flavors!";
    } else if (lowerCaseMessage.includes("seafood")) {
        return "Try 'Seafood Haven' for the best seafood!";
    } else {
        return "Sorry, I can only help with restaurant information. Please ask about specific types of food or our services!";
    }
}

// Send button event listener
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value;
    if (userMessage) {
        const userDiv = document.createElement("div");
        userDiv.textContent = `You: ${userMessage}`;
        messagesDiv.appendChild(userDiv);

        // Get bot response and display it
        const botResponse = getBotResponse(userMessage);
        const botDiv = document.createElement("div");
        botDiv.textContent = `Bot: ${botResponse}`;
        messagesDiv.appendChild(botDiv);

        // Display restaurants if the user asks for them
        if (botResponse.includes("suggestions")) {
            displayRestaurants();
        }

        userInput.value = ""; // Clear input
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
    }
});

// Initial call to display a welcome message
messagesDiv.innerHTML = "<div>Bot: Welcome to the Restaurant Chatbox! Ask me about restaurants or common questions.</div>";
