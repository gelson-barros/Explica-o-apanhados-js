/**
 * Ao eliminar o um item do array não pode
 * quebrado!!!
 */

// const numbers = [50, 100, 50];

// const sum = (x, y, z) => x + y + z;

// console.log(sum(...numbers));



const numbers = [50, 100, 34, 55, 43];

const sum = (...rest) => rest.reduce((acc, number) => number + acc, 0);

console.log(sum(...numbers));
