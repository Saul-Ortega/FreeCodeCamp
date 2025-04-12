const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const cleanInputString = (str) => {
    const regex = /[\W_]/g;
    return str.replace(regex, '');
}

const reverseWord = (str) => {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
}

const isAPalindrome = (str) => {
    const reversedString = reverseWord(str);
    if (str.toUpperCase() === reversedString.toUpperCase()) {
        return true;
    }

    return false;
}

const resultMessage = (booleanResult) => {
    return booleanResult ? ' is a palindrome' : ' is not a palindrome';
}

const cleanInputTextValue = () => {
    textInput.value = "";
}

function printResult() {
    if (textInput.value.length == 0) {
        alert('Please input a value');
    } else {
        const str = cleanInputString(textInput.value);
        const printMessage = resultMessage(isAPalindrome(str));
        resultDiv.innerText = textInput.value + printMessage;
        cleanInputTextValue();
    }
}

checkButton.addEventListener("click", printResult);
