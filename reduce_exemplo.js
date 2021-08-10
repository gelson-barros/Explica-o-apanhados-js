const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);
// console.log(sum); // 6



const cart = [
    { name: "Dark Souls III", price: 95.03 },
    { name: "Shadow of the Tomb Raider", price: 101.09 },
    { name: "Sekiro: Shadows Die Twice", price: 179.99 },
    { name: "Resident Evil 2", price: 119.90 },
    { name: "Death Stranding", price: 149.99 }
];

const productList = cart.reduce((accumulator,{name} ) => `${accumulator} - ${name} \n`, '')
console.log(productList);
/*
- Nome 1
- Nome 2
- Nome 3
*/


const people = [
    { id: 5, name: "Angelica", age: 18, federativeUnit: "Pernambuco" },
    { id: 5, name: "Thale", age: 19, federativeUnit: "São Paulo" },
    { id: 5, name: "Ana Carolina", age: 18, federativeUnit: "Alagoas" },
    { id: 5, name: "Filipe", age: 18, federativeUnit: "Minas Gerais" },
    { id: 5, name: "Gabriel", age: 20, federativeUnit: "São Paulo" },
    { id: 5, name: "Aline", age: 19, federativeUnit: "Brasília" },
];

const ageFrequency = people.reduce((acc, {age}) => {
    acc[age] = acc[age] + 1 || 1;
    return acc
}, {})
console.log(ageFrequency);

/*
Resultados desejados:

{18: 3, 19 : 2, 20: 1}
*/