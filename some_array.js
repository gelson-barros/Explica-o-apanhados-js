const numbers = [10, 6, 2, 85, 23, 1, 3];

const value = numbers.some(isBiggerThan10);

function isBiggerThan10(element, index, array) {
    return element === 85;
}

console.log(value);
