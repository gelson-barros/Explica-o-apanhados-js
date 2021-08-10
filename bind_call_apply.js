// bind

// o métod bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

//Obs:Sem o use strict o this aponta para o objecto global e com use strict é indefinido undefined

// 'use strict'

// function thisBindExemplo(){
//     console.log(this);
// }

// const obj = {exemplo : 'exemplo'}

// //thisBindExemplo = thisBindExemplo.bind(obj);

// thisBindExemplo();

//Outro exemplo bind

// const module = {
//     x: 42,
//     getX: function () {
//         return this.x;
//     },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX());// A função é chamada no escopo global // saída esperada: indefinido undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// produção esperada: 42

// outro exemplo de bind Criando uma função vinculada

// this.x = 9 //this se refere ao objecto global do node e do navegador o "window";

// var module ={
//     x: 81,
//     getX :function(){
//         return this.x;
//     }
// }

// console.log(module.getX());//81

// var retrieveX = module.getX;
// console.log(retrieveX());//undefined // a funcao foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao module
// Programadores novatos podem confundir a variavel x
//global com a propriedade x modulo
// var boundGetX = retrieveX.bind(module);
// console.log(boundGetX());//81

// Outro exemplo de bind Funções parcialmente aplicadas

// function list(){
//     return Array.prototype.slice.call(arguments);
// }

// var list1 = list(1, 2, 3);
// console.log(list1);

// //criar uma função com argumento principal predefinido
// var leadingThirtysevenList = list.bind(null, 37);

// var list2 = leadingThirtysevenList();
// console.log(list2);

// var list3 = leadingThirtysevenList(1, 2, 3);
// console.log(list3);

// outro exepmlo de bind Com setTimeout

// function InicioTardio() {
//     this.contagemPetalas = Math.ceil(Math.random() * 12) + 1;
// }

// // Declarar bloom depois de um intervalo de 1 segundo
// InicioTardio.prototype.bloom = function(){
//     setTimeout(this.declare.bind(this), 1000);
// };

// InicioTardio.prototype.declare = function(){
//     console.log('I am a beatiful flower with ' + this.contagemPetalas + ' petals!');
// }

// var flower = new InicioTardio
// flower.bloom();
// //depois de 1 segundo, activo o método 'declare'

// Nota: call()  e apply() tem uma sintaxe idêntica. A diferença é que call() aceita uma lista de argumentos, enquento apply() aceita um array de argumentos.

// call
// O método call() chama uma função com um dado 'this' e argumentos passados individualmente.
// O call() permite que uma função/método, pertencente a um dado objecto, seja atribuido e chamado por um objecto diferente. Dessa forma podendo reutilizar o método de um objecto em diversos outros objectos

// const obj1 = {
//     exemplo1: "exemplo1",
//     mostraThis: function thisCallExemplo(a, b, c) {
//         console.log(this);
//     },
// };

// obj1.mostraThis();

// const obj2 = { exemplo2: "exemplo2" };

// obj1.mostraThis.call(obj2, 1, 2, 4);


// aplly
// O método apply() chama uma função com um dado valor this, e argumentos passados como uma array (ou um objecto array-like).
//Em outras palavras é um call que aceita argumentos por meio de um array ao invés de serem passados individualmente (um a um).

const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function thisCallExemplo(a, b, c) {
        console.log(this);
    },
};

obj1.mostraThis();

const obj2 = { exemplo2: "exemplo2" };

obj1.mostraThis.apply(obj2, [1, 2, 3]);
