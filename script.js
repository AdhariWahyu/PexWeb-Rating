// script.js

// Get references to the textarea and template buttons
const textarea = document.getElementById("description");
const template1Button = document.getElementById("template1");
const template2Button = document.getElementById("template2");
const template3Button = document.getElementById("template3");
const template4Button = document.getElementById("template4");

// Define the templates
const templates = {
    template1: "This is template 1.",
    template2: "Here goes template 2.",
    template3: "You've selected template 3.",
    template4: "You choose template 4."
};

// Initialize an empty array to store selected templates
const selectedTemplates = [];

// Function to update the textarea with selected templates
function updateTextarea() {
    textarea.value = selectedTemplates.join('\n'); // Use '\n' to separate selected templates
}

// Add click event listeners to the template buttons
template1Button.addEventListener("click", function () {
    if (!selectedTemplates.includes(templates.template1)) {
        selectedTemplates.push(templates.template1);
    } else {
        const index = selectedTemplates.indexOf(templates.template1);
        selectedTemplates.splice(index, 1);
    }
    updateTextarea();
});

template2Button.addEventListener("click", function () {
    if (!selectedTemplates.includes(templates.template2)) {
        selectedTemplates.push(templates.template2);
    } else {
        const index = selectedTemplates.indexOf(templates.template2);
        selectedTemplates.splice(index, 1);
    }
    updateTextarea();
});

template3Button.addEventListener("click", function () {
    if (!selectedTemplates.includes(templates.template3)) {
        selectedTemplates.push(templates.template3);
    } else {
        const index = selectedTemplates.indexOf(templates.template3);
        selectedTemplates.splice(index, 1);
    }
    updateTextarea();
});

template4Button.addEventListener("click", function () {
    if (!selectedTemplates.includes(templates.template4)) {
        selectedTemplates.push(templates.template4);
    } else {
        const index = selectedTemplates.indexOf(templates.template4);
        selectedTemplates.splice(index, 1);
    }
    updateTextarea();
});
