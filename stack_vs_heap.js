/*
Tipos primitivos
-Numbers
-Strings
-Booleans
-Null
-Undefined
-Symbol
-BigInt


Tipos de referência
-Todos os tipos de objectos
-Objectos literais
-Arrays
-Funções
-Datas
-Todos os outros Objectos

Stack vs heap
Tem dois sitios de armazenamento dos tipos de dados
para o tipo de dados primitivos e guardado no stack(pilha de memoria) ja os tipos de referência e no heap (amontoado)
*/


// valores primitivos
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// valores de referência
let userOne = {name: 'Roger', age: 31};
let userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 32;
console.log(userOne, userTwo);