// Massiv 1 (1-usul)
const sliceRemoval1 = (arr, endOfSlice) =>  {
    arr.splice(0, endOfSlice);
    return arr;
}
// console.log(sliceRemoval([1, 2, 3, 4, 5, 6, 7, 8], 5));


// Massiv 1 (2-usul)
const sliceRemoval2 = (arr, endOfSlice) => {
    for (let i = 0; i <= endOfSlice - 1; i++) {
        arr.shift();
    }
    return arr;
}
// console.log(sliceRemoval2([1, 2, 3, 4, 5, 6, 7, 8], 5));

// Massiv 1 (3-usul)

const sliceRemoval3 = (arr, endOfSlice) => {
    for (let i = 0; i <= endOfSlice - 1; i++) {
        delete arr[i];
    }
    return arr;
}
// console.log(sliceRemoval3([1, 2, 3, 4, 5, 6, 7, 8], 5));


// Massiv 2
const arrayConcatenation = function(arr1, arr2) {
    if (arr1.length >= arr2.length) return arr1.concat(arr2);
    if (arr1.length < arr2.length) return arr2.concat(arr1);
}
// console.log(arrayConcatenation([1, 2, 3, 4, 5], [6, 7, 8, 9]));

// Massiv 3 (1-usul) 
function arrayNumbersSum(arr, sliceStart, sliceEnd) {
    let sum = 0;
    for (let i = sliceStart; i <= sliceEnd; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(arrayNumbersSum([1, 2, 3, 4, 5, 6, 7, 8], 1, 4));

// Massiv 3 (2-usul)
function arrayNumbersSum(arr, sliceStart, sliceEnd) {
    let sum = 0;
    arr.slice(sliceStart, sliceEnd + 1)
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(arrayNumbersSum([1, 2, 3, 4, 5, 6, 7, 8], 1, 4));

// Massiv 4 
function arrayReverseOrder(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let lastNumber = arr.at(-1 - i);
        arr2.push(lastNumber);
    }
    arr = arr.reverse()
    return arr2;
}
// console.log(arrayReverseOrder([1, 2, 3, 4, 5, 6, 7, 8]));

// Sezar shifrlash algoritmi
function caesarEncryption(Key, message) {
    let encryptedMessage = '';
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < message.length; i++) {
        // getting one character
        let oneCharacter = message[i];
        if (!(isNaN(oneCharacter))) {
            encryptedMessage += oneCharacter;
            continue;
        }
        // Checking if it's uppercase or lowercase
        let isUpperCase = true; 
        if (oneCharacter != oneCharacter.toUpperCase()) {isUpperCase = false};
        oneCharacter = oneCharacter.toLowerCase(); // converting the letter to lowercase
        let keyValue = alphabetForEncryption(oneCharacter); 
        keyValue += Key;
        if (keyValue > 25) {
            keyValue %= 25;
            keyValue -= 1;
        }
        let encryptedLetter = oneCharacter;
        if (!(isNaN(keyValue))) {
            encryptedLetter = alphabet[keyValue]
        } 
        if (isUpperCase) {encryptedLetter = encryptedLetter.toUpperCase()};
        encryptedMessage += encryptedLetter;
    }
    return encryptedMessage;
}

function alphabetForEncryption(oneCharacter) {
    switch (oneCharacter) {
        case 'a':
            return 0;
        case 'b':
            return 1;
        case 'c':
            return 2;
        case 'd':
            return 3;
        case 'e':
            return 4;
        case 'f':
            return 5;
        case 'g':
            return 6;
        case 'h':
            return 7;
        case 'i':
            return 8;
        case 'j':
            return 9;
        case 'k':
            return 10;
        case 'l':
            return 11;
        case 'm':
            return 12;
        case 'n':
            return 13;
        case 'o':
            return 14;
        case 'p':
            return 15;
        case 'q':
            return 16;
        case 'r':
            return 17;
        case 's':
            return 18;
        case 't':
            return 19;
        case 'u':
            return 20;
        case 'v':
            return 21;
        case "w":
            return 22;
        case 'x':
            return 23;
        case 'y':
            return 24;
        case 'z':
            return 25;
        default:
            return oneCharacter;
        }
}
// console.log(caesarEncryption(4, `Lekin_bu_oson_misol_ekan`));

function factorial(n, m) {
    n = BigInt(n);
    m = BigInt(m);
    let zeros = 0;
    let lastDigit;
    let product = 1n;
    for (let i = n; i <= m; i++) {
        product *= i;
    }
    lastDigit = product % 10n;
    while (lastDigit == 0) {
        lastDigit = product % 10n;
        if (lastDigit == 0) zeros++;
        product /= 10n;
    }
    return zeros;
}
console.log(factorial(3, 14));