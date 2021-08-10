// Higher-order-function

// 1) Uma função que recebe uma função por argumento;
// 2) Uma função que retorna uma função

// 1- Exemplo de uma função que recebe uma outra função como argumento;

// composicao de função
// function composicao(fn1, fn2, fn3, valor){
//     return fn3(fn2(fn1(valor)));
// }

// function gritar(texto){
//     return texto.toUpperCase();
// }

// function enfatizar(texto){
//     return `${texto}!!!!!`;
// }

// function tornarLento(texto){
//     return texto.split('').join(' ')
// }

// console.log(composicao(gritar, enfatizar, tornarLento, 'cuidado com o buraco'));

// // Mais simplificado
// const myFunc = callback => {
//     const value = 77;
//     callback(value);
// };

// myFunc(number => {
//     console.log(number);
// });

// // Mais detalhado
// function myFunc(callback){
//     const value = 77;

//     callback(value);
// }

// function func(number){
//     console.log(number);
// }

// myFunc(func);

// 2- Criaremos nossa própria função que retorna outra função;

// // criação de muitas funções
// function double (aNumber){
//     return aNumber * 2;
// }

// function triple (aNumber) {
//     return aNumber * 3;
// }

// function quadruple (aNumber) {
//     return aNumber * 4;
// }

//console.log(double(9));

// // criação de uma unica função com retorno de uma função
// function getMultiplier(multiplier){
//     return function(aNumber){
//         return aNumber * multiplier;
//     }
// }

// const double = getMultiplier(2);
// const triple = getMultiplier(3);
// const quadruple = getMultiplier(4);
// console.log(double(5));
// console.log(triple(5));
// console.log(quadruple(5));

// // refactorando para arrow function
// const getMultiplier = mutilplier => aNumber => aNumber * mutilplier;

// const double = getMultiplier(2);
// const triple = getMultiplier(3);
// const quadruple = getMultiplier(4);
// console.log(double(5));
// console.log(triple(5));
// console.log(quadruple(5));

// function pegaPotencia(potencia){
//     return function (numero){
//         return numero ** potencia;
//     }
// }

// console.log(pegaPotencia(2)(4));

// 3- Aprederemos a usar 3 higher-order functions embutidas na linguagem;

// // Map
/**
 * Porque e Quando usuar o map?
 * Vai usar  o map quando você quer obter um novo array
 * array com a mesma quantidade de itens do array
 * original mas, com cada item transformado
 */
const number = [1, 2, 3];
//number.map((item, index, array) => {});
const squareNumbers = number.map((item) => item ** 2);
//console.log(squareNumbers);

const tvShows = [
    { name: "Breaking Bad", releaseYear: 2008 },
    { name: "Mr. Robot", releaseYear: 2015 },
    { name: "True Detective", releaseYear: 2014 },
    { name: "Hannibal", releaseYear: 2013 },
    { name: "The Handmaid's Tale", releaseYear: 2017 },
    { name: "House M.D.", releaseYear: 2004 },
    { name: "Watchmen", releaseYear: 2019 },
];

//const showNames = tvShows.map(({tvShow}) => tvShow.name);
const showNames = tvShows.map(({ name }) => name);//com destructing
//console.log(showNames);
//console.table(showNames);

// // filter
/**
 * Porque e Quando usuar o filter?
 * Baseado em uma condição, você quer obter
 * um novo array com menor ou mesma quantidade 
 * de itens do array original 
 */

const randonNumbers = [ 36, 99, 37, 63];

//const numbersGreaterThan37 = randonNumbers.filter((item, index, array) => {});
const numbersGreaterThan37 = randonNumbers.filter(item => item > 37);
console.log(numbersGreaterThan37);

const tarantinoMovies = [
    { name: "Bastardos inglóris", releaseYear: 2009 },
    { name: "Pulp Fiction", release: 1994 },
    { name: "Kill Bill: Volume 2", release: 2004 },
    { name: "Quatro Quartos", release: 1995 },
    { name: "Sin City", release: 2005 },
    { name: "Era uma Vez em ... Hollywood", release: 2019 },
    { name: "Django Livre", release: 2012 },
    { name: "Cães de Aluguel", release: 1992 },
    { name: "À Prova de Morte", release: 2007 },
    { name: "Kill Bill: Volume 1", release: 2003 },
];

//const moviesBefore2000 = tarantinoMovies.filter(movies => movies.release < 2000);
const moviesBefore2000 = tarantinoMovies.filter(({release}) => release < 2000);
console.table (moviesBefore2000) 

const firstTravelerCities = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianópolis'
];

const secondTravelerCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb'];

const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));
console.table(commonCities)


// // Reduce
/**
 * Porque e Quando usuar o reduce?
 * Você quer reduzir o array á algum tipo de dado
 */

const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum);

const cart = [
    { name: "Dark Souls III", price: 95.03 },
    { name: "Shadow of the Tomb Raider", price: 101.19 },
    { name: "Sekiro: Shadows Die Twice", price: 179.99 },
    { name: "Resident Evil 2", price: 119.90 },
    { name: "Death Strading", price: 149.99 },
];

const productList = cart.reduce((accumulator, {name}) => `${accumulator} - ${name}\n` , '');
console.log(productList);

/*
 - Nome 1
 - Nome 2
 - Nome 3
 */

 const people = [
     { id: 5, name: "Angelica", age: 18, federativeUnit: "Pernambuco" },
     { id: 5, name: "Thales", age: 19, federativeUnit: "São Paulo" },
     { id: 5, name: "Ana Carolina", age: 18, federativeUnit: "Alagoas" },
     { id: 5, name: "Filipe", age: 18, federativeUnit: "Minas Gerais" },
     { id: 5, name: "Gabriel", age: 20, federativeUnit: "São Paulo" },
     { id: 5, name: "Aline", age: 19, federativeUnit: "Brasília" },
 ];

const agesFrequency = people.reduce((accumulator, {age}) => {
    accumulator[age] = accumulator[age] + 1 || 1 ;
    return accumulator;
}, {})
console.log(agesFrequency);

 /*
 resultado desejado:

 {18: 3, 19: 2, 20: 1}
 */


 const topBrazilmovies = [
     {title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney'},
     {title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount/ 20th Century'},
     {title: 'O Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney'},
     {title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distributedBy: 'Disney'},
     {title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal'},
     {title: 'Nada a Perder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes'},
     {title: 'Os dez Mandamentos', peopleAmount: 11_259_526, distributedBy: 'Paris / Downtown Filmes'},
     {title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney'},
     {title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 19_686_119, distributedBy: 'Embrafilme'},
 ]

console.log(
    topBrazilmovies
        .filter(({ distributedBy }) => distributedBy == "Disney")
        .reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0)
);


const pets = [
    { name: "Boris", age: 4, gender: "Male", type: "Dog" },
    { name: "Jimmy", age: 1, gender: "Male", type: "Cat" },
    { name: "Pérola", age: 2, gender: "Female", type: "Dog" },
    { name: "Lucy", age: 5, gender: "Female", type: "Cat" },
    { name: "Cristal", age: 3, gender: "Female", type: "Dog" },
    { name: "Chico", age: 6, gender: "Male", type: "Dog" },
];

const getDogs = ({type}) => type === 'Dog';
const convertToHumanAge = ({name, age}) => ({
    name,
    convertAge: age * 7
})
console.log(
    pets
    .filter(getDogs)
    .map(convertToHumanAge)
)