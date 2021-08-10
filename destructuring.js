// Destructuring
/**
 * Obs: nao se pode inicializa uma 
 * variavel const sem valor
 * const s; -> errado
 * const s = value;
 */
// Array

// Antigamente

// const arr = [1, 2, 3]
// const one = arr[0];
// const two = arr[1];
// console.log(arr);
// console.log(one, two);

// nova maneira

// uma forma
// let one, two, three, rest;
// [one, two] = [1, 2, 3];
// console.log(one, two);
// [one, , three] = [1, 2, 3];
// console.log(one, three);
// [one, ...rest] = [1, 2, 3, 4];
// console.log(one, rest);

// uma forma 
// const [one, two] = [1, 2, 3]; 
// console.log(one, two);

// outra forma
// const arr = [1, 2, 3];
// const [one, two] = arr;
// console.log(one, two);

// outra forma
// const arr = [1, 2, 3];
// const [one, , three] = arr;
// console.log(one, three);

// outra forma
// const arr = [1, 2, 3];
// const [one, ...rest] = arr;
// console.log(one, rest);



// Objecto

// Da maneira antiga
// const obj = {
//     a : 1,
//     b: 2,
//     c: 3
// }
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;
// console.log(a, b, c);

// Nova maneira
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const {a, b, c} = obj
// console.log(a, b, c);

// Outra forma
// let a, b, c;
// ({ a, b, c } = { a: 1, b: 2, c: 3});
// console.log(a, b, c);



// valor padrão para array
// let a, b;
// [a=5, b=7] = [1];
// console.log(a, b);

// valor padrão para objecto
// const obj = {
//     a: undefined,
//     b: 2,
//     c: 3,
// };
// const { a = 5, b, c } = obj;
// console.log(a, b, c);


/***********Não entendi***********/
// Renomear propriedade
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const { a: z } = obj;
// console.log(obj);

// const obj = {
//     'a': 1,
//     b: 2,
//     c: 3,
// };
// const { 'a': z } = obj;
// console.log(obj);
/*********ate não entendi********/

//pegar o encademento do objecto
// const obj = {
//     parent: {
//         child: 'filho'
//     }
// }
// const {parent: {child}} = obj;
// console.log(child);

// Loops no array com ojecto
// const users = [
//     {id: 1},
//     {id: 2},
//     {id: 3}
// ]

// for (const { id } of users) {
//     console.log(id)
// }

// Como arguments da função
// const user = {id: 0, username: 'Jeff'}
// function haveFun({id, username}){
//     console.log(`hi ${username}`)
// }
// haveFun(user);


// troca de variavel com array
// o padrao
// let a = 1;
// let b = 2;
// // //troca
// let temp = a;
// a = b;
// b = temp;
// com destructuring
// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// No regex
// let re = /\w+\s/g;
// let str = 'fee fi fo fum'; 
// const [fee, fi, fo] = str.match(re);
// console.log(fee, fi, fo);


/*********Não entendi */
// propriedade dinamica
// const rando = randomKey();
// const obj = {
//     [rando]:23
// }

// // const { [rando]: randomKey }
// const { [rando]: myKey } = obj;