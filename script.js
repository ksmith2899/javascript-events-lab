// ============================
// Mouse Events
// ============================
const mouseBtn = document.getElementById("mouse-btn");
const mouseMsg = document.getElementById("mouse-msg");

mouseBtn.addEventListener("mouseenter", () => {
    mouseMsg.textContent = "You are hovering over the button!";
});

mouseBtn.addEventListener("mouseleave", () => {
    mouseMsg.textContent = "Hover ended.";
});

// ============================
// Keyboard Events
// ============================
const keyInput = document.getElementById("key-input");
const keyMsg = document.getElementById("key-msg");

keyInput.addEventListener("keydown", (event) => {
    keyMsg.textContent = `Last key pressed: ${event.key}`;
});

// ============================
// Form Events
// ============================
const form = document.getElementById("demo-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page refresh
    formMsg.textContent = "Form submitted successfully!";
});

// ============================
// Focus and Blur Events
// ============================
const focusInput = document.getElementById("focus-input");
const focusMsg = document.getElementById("focus-msg");

focusInput.addEventListener("focus", () => {
    focusMsg.textContent = "Input field is focused!";
});

focusInput.addEventListener("blur", () => {
    focusMsg.textContent = "Input field lost focus.";
});

// ============================
// Event Delegation
// ============================
const container = document.getElementById("button-container");
const delegateMsg = document.getElementById("delegate-msg");

container.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        delegateMsg.textContent = `You clicked: ${event.target.textContent}`;
    }
});
