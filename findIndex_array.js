const numbers = [10, 6, 8, 19, 18, 20];

const elementIndex = numbers.findIndex(checkNumber);

function checkNumber(element, index, array) {
    return element === 20;
}

console.log(elementIndex);
/**
 * -1
 * ou index do element
 */
