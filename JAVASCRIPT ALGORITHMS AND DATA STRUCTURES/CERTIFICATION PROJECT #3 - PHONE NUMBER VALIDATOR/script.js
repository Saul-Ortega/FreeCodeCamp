const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validateNumber = () => {
    if (userInput.value === "") {
        alert('Please provide a phone number');
    } else {
        const regex = /^1?[\s-]*(?:\(\d{3}\)|\d{3})[\s-]*\d{3}[\s-]*\d{4}$/;
        resultsDiv.innerText = userInput.value.match(regex) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
    }
}

const cleanInput = () => {
    userInput.value = "";
    resultsDiv.innerText = "";
}

checkBtn.addEventListener("click", validateNumber);
clearBtn.addEventListener("click", cleanInput);