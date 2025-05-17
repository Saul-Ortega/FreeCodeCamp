const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputResult = document.getElementById('output');

const getThousands = (number) => {
    switch (Math.floor(number / 1000)) {
        case 1:
            return "M";
        break;
        case 2:
            return "MM";
        case 3:
            return "MMM";
        break;
    }
}

const getHundreds = (number) => {
    switch (Math.floor((number % 1000) / 100)) {
        case 1:
            return "C";
        break;
        case 2:
            return "CC";
        break;
        case 3:
            return "CCC";
        break;
        case 4:
            return "CD";
        break;
        case 5:
            return "D";
        break;
        case 6:
            return "DC";
        break;
        case 7:
            return "DCC";
        break;
        case 8:
            return "DCCC";
        break;
        case 9:
            return "CM";
        break;
    }
}

const getTens = (number) => {
    switch (Math.floor((number % 100) / 10)) {
        case 1:
            return "X";
        break;
        case 2:
            return "XX";
        break;
        case 3:
            return "XXX";
        break;
        case 4:
            return "XL";
        break;
        case 5:
            return "L";
        break;
        case 6:
            return "LX";
        break;
        case 7:
            return "LXX";
        break;
        case 8:
            return "LXXX";
        break;
        case 9:
            return "XC";
        break;
    }
}

const getUnits = (number) => {
    switch (Math.floor(number % 10)) {
        case 1:
            return "I";
        break;
        case 2:
            return "II";
        break;
        case 3:
            return "III";
        break;
        case 4:
            return "IV";
        break;
        case 5:
            return "V";
        break;
        case 6:
            return "VI";
        break;
        case 7:
            return "VII";
        break;
        case 8:
            return "VIII";
        break;
        case 9:
            return "IX";
        break;
    }
}

const getRomanNumber = (number) => {
    const thousands = getThousands(number) || "";
    const hundreds = getHundreds(number) || "";
    const tens = getTens(number) || "";
    const units = getUnits(number) || "";

    return `${thousands}${hundreds}${tens}${units}`;
}

const showRomanNumber = () => {
    if (numberInput.value === "") {
        outputResult.innerHTML = `<p id='paragraph' class='error'>Please enter a valid number</p>`;
    } else if (numberInput.value <= -1) {
        outputResult.innerHTML = `<p id='paragraph' class='error'>Please enter a number greater than or equal to 1</p>`;
    } else if (numberInput.value >= 4000) {
        outputResult.innerHTML = `<p id='paragraph' class='error'>Please enter a number less than or equal to 3999</p>`;
    } else {
        outputResult.innerHTML = `<p id='paragraph'>${getRomanNumber(numberInput.value)}</p>`;
    }
} 

convertBtn.addEventListener("click", showRomanNumber);
