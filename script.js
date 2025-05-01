
document.addEventListener("DOMContentLoaded", function() {
    // 1. Dynamically change text content
    const welcomeMessage = document.querySelector(".welcome-message");
    welcomeMessage.textContent = "Winter Wonderland Party - Get Ready!";
    
    // 2. Modify CSS styles via JavaScript
    welcomeMessage.style.color = "cyan";
    welcomeMessage.style.fontWeight = "bold";
    welcomeMessage.style.textAlign = "center";
    
    // 3. Add or remove an element when a button is clicked
    const rsvpButton = document.getElementById("rsvp-message");
    const ticketDiv = document.querySelector(".ticket-selection");
    
    rsvpButton.addEventListener("click", function() {
    if (ticketDiv.innerHTML === "") {
    const message = document.createElement("p");
    message.textContent = "Thanks for choosing your ticket!";
    message.style.color = "green";
    ticketDiv.appendChild(message);
    } else {
    ticketDiv.innerHTML = ""; // Removes the message
    }
    });
    });






