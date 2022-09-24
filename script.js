const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

//result
console.log(resultEl);


//password length
const passLength = lengthEl.value;

//letter
const letter = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
/* let number1 = number.split("");
console.log(number1); */
let symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let symbol = symbols.split(""); //length of the symbol array
//console.log(symbol);


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {

})

generateEl.addEventListener('click', () => {

})

function generatePassword(lower, upper, number, symbol, length) {

}

function getRandomLower() {
    //let lowerC = lowercaseEl.value;
    //console.log(lowerC);
    lowerC = letter[(Math.floor(Math.random() * 26))];
    resultEl.innerHTML = lowerC.toLowerCase();

}

function getRandomUpper() {
    let lowerC = lowercaseEl.value;
    lowerC = letter[(Math.floor(Math.random() * 26))];
    resultEl.innerHTML = lowerC.toUpperCase();

}

function getRandomNumber() {
    let randomNumber = number[(Math.floor(Math.random() * 10))];
    resultEl.innerHTML = randomNumber;

}

function getRandomSymbol() {
    let randomSymbol = symbol[(Math.floor(Math.random() * (symbol.length)))];
    resultEl.innerHTML = randomSymbol;

}

getRandomLower();
getRandomUpper();
getRandomNumber();
getRandomSymbol();