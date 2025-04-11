const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const reverseWord = (str) => {
    let reversedString = "";
    for (let i = str.length; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
}

const isAPalindrome = (str) => {
    const reversedString = reverseWord(str);
    if (str === reversedString) {
        return true;
    }

    return false;
}

const resultMessage = (booleanResult) => {
    if (booleanResult) {
        return ' is a palindrome';
    }

    return ' is not a palindrome';
}

function printResult(str) {
    const printMessage = resultMessage(isAPalindrome(str));
    resultDiv.innerText = str + printMessage;
}

checkButton.addEventListener('click', printResult(textInput.value));
