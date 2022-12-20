// botoes
const btnGenerate = document.querySelector("#btnGenerate");
const btnCopy = document.querySelector("#btnCopy");

// inputs
const passLength = document.querySelector("#passLenght");
const upperCase = document.querySelector("#upperCase");
const lowerCase = document.querySelector("#lowerCase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const result = document.querySelector("#result");

const getRandomLower = () => {
    const charLower = "abcdefghijlmnopqrstuvwxyz";
    return charLower[Math.floor(Math.random() * charLower.length)];
};

const getRandomUpperCase = () => {
    const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return charUpper[Math.floor(Math.random() * charUpper.length)];
};

const getRandomNumber = () => {
    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];
};

const getRandomSymbol = () => {
    const symbols = "!@#$%^&*()[]{}=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomChar = {
    lower: getRandomLower,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

btnGenerate.addEventListener("click", () => {
    const length = passLength.value;
    const hasLower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});