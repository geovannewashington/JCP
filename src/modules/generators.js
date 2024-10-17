const SYMBOLS_STRING = "!@#$%^&*()_+[]{}|;:,.<>?";

const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomUpperChar = () => String.fromCharCode(getRandomIntBetween(65, 91));
const generateRandomLowerChar = () => String.fromCharCode(getRandomIntBetween(97, 123));
const generateRandomNumber = () => String.fromCharCode(getRandomIntBetween(48, 58));
const generateRandomSymbol = () => SYMBOLS_STRING[getRandomIntBetween(0, SYMBOLS_STRING.length)];

export default function createPassword(passwordLength, useUpperCase, useLowerCase, useNumbers, useSymbols) {
    const optionsArr = [useUpperCase, useLowerCase, useNumbers, useSymbols];
    const passwordArr = [];

    if (optionsArr.every(e => e === false)) return "Check at least one option";
    if (isNaN(passwordLength) || passwordLength <= 0) {
        return "Password length must be a positive number"
        //throw new Error('Password length must be a positive number');
    }

    for (let i = 0; i < passwordLength; i ++) {
        useUpperCase && passwordArr.push(generateRandomUpperChar());
        useLowerCase && passwordArr.push(generateRandomLowerChar());
        useNumbers && passwordArr.push(generateRandomNumber());
        useSymbols && passwordArr.push(generateRandomSymbol());
    }

    return passwordArr.join('').slice(0, passwordLength);
}