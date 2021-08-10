var fruta = ["maçã", "banana", "safu"];
//console.log(fruta.length);//3

//acessando um array com indice
var primeiro = fruta[0];
//console.log(primeiro);

var ultimo = fruta[fruta.length - 1];
//console.log(ultimo)

//loop no array
fruta.forEach(function (item, index, array) {
    //console.log(item, index);
});

//adicionar um elemento no fim do array
var novoLength = fruta.push("Laranja");
//console.log(novoLength);
//console.log(fruta);

//adiciona no principio do array um elemento
var AdicionaElemento = fruta.unshift("Morango");
//console.log(fruta);
//console.log(AdicionaElemento);

//remover o ultimo elemento do array
var removeUltimo = fruta.pop();
//console.log(removeUltimo);
//console.log(fruta);

//remover o primeiro elemento do array
var removePrimeiro = fruta.shift();
//console.log(fruta);
//console.log(removePrimeiro);

//Procurar um indice num array
fruta.push("Manga");
//console.log(fruta);
var posicao = fruta.indexOf("banana");

var removerItem = fruta.splice(posicao, 1);
//console.log(fruta)

//copiar uma array
var frutaCopiado = fruta.slice();
//console.log(frutaCopiado);

var array = ["este é o primeiro elemento", "este é o segundo elemento"];
//console.log(array[0]);
//console.log(array[1]);
//console.log(array[array.length - 1]);

//console.log(array.0)//sintaxe errada

var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
//console.log(anos[0]);

//console.log(anos["2"] != anos["02"]);

var promise = {
    'var': 'text',
    'array': [1, 2, 3, 4]
};


//console.log(promise['array'])

var frutas = [];
frutas.push('banana', 'maçã', 'ananas');
//console.log(frutas);
//console.log(frutas.length);

frutas[5] = 'manga';
//console.log(frutas[5])//'manga'

//trazer os keys do array
//console.log(Object.keys(frutas))//[ '0', '1', '2', '5' ]

//console.log(frutas)//[ 'banana', 'maçã', 'ananas', <2 empty items>, 'manga' ]

//aumentar comprimento estatico
frutas.length = 10
//console.log(Object.keys(frutas))//[ '0', '1', '2', '5' ]
//console.log(frutas.length)//10

//reduzir o comprimento estatico
frutas.length = 2
//console.log(Object.keys(frutas))//[ '0', '1' ]
//console.log(frutas.length)//2

//Propriedades
/*
Array.length
Array.prototype
*/


//Metodos

//Array.from()
//criar um novo array com uma função com elementos que estão nos argumentos
function f(){
    return Array.from(arguments)
}
//console.log(f(1, 2, 3))


//Array.isArray()
//console.log(Array.isArray([]))
//console.log(Array.isArray([1, 2]));
//console.log(Array.isArray(new Array()));
//console.log(Array.isArray(Array.prototype));

//Array.of()
let novoArray = []
novoArray = Array.of(1, 3, 4, 6);
//console.log(novoArray);


//metodo que munda

//Array.copyWithin()
let array1 = [1, 2, 3, 4, 5]
//console.log(array1.copyWithin(-2));
//console.log(array1.copyWithin(0, 3));
//console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(-2, -3, -1));


//Array.fill()
//Array.pop()
//Array.push()
//Array.reverse()
//Array.shift()
//Array.sort()
//Array.splice()
//Array.unshift()


//metodo que acessam
/*
Array.concat()
Array.includes()
Array.join()
Array.slice()
Array.toSource()
Array.toString()
Array.toLocaleString()
Array.indexOf()
Array.lastIndexOf()
*/

//metodo de iteração
/*
Array.forEach()
Array.entries()
Array.every()
Array.some()
Array.filter()
Array.some()
Array.findIndex()
Array.keys()
Array.map()
Array.reduce()
Array.reduceRight()
Array.values()
*/