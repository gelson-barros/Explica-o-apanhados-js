// Map -> Array
/**
 * Map resulta num outro array com
 * mesma tamanho do primeiro.
 */

// const array = [3, 4, 7, 1, 9, 7];

// const dobro = nr => nr * 2;

// const resultado1 = array.map(dobro);
// console.log(resultado1);

// const array = [
//     { nome: "...", preco: 23.67, desconto: 0.2 },
//     { nome: "...", preco: 120.99, desconto: 0.3 },
//     { nome: "...", preco: 3567.67, desconto: 0.5 },
//     { nome: "...", preco: 10.8, desconto: 0.1 },
//     { nome: "...", preco: 7.43, desconto: 0.05 },
//     { nome: "...", preco: 12355.33, desconto: 0.15 },
// ];

// function getCusto(precoComDesconto) {
//     return parseInt(precoComDesconto * 0.3);
// }

// function agetPrecoComDesconto(produto) {
//     return produto.preco * (1 - produto.desconto);
// }

// const resultado = array.map(agetPrecoComDesconto).map(getCusto);
// console.log(resultado);

// Filter -> Array

/**
 * Filter resulta um array com tamanho igual
 * ou menor ao tamanho primeiro
 */

// const notas = [7.1, 6.2, 5.4, 9.0, 8.8, 10.0];

// function aprovado(nota) {
//     return nota >= 7;
// }

// const resultado = notas.filter(aprovado);

// console.log(resultado);

// const produtos = [
//     { nome: "...", preco: 23.67, desconto: 0.2 },
//     { nome: "...", preco: 120.99, desconto: 0.3 },
//     { nome: "...", preco: 3567.67, desconto: 0.5 },
//     { nome: "...", preco: 10.8, desconto: 0.1 },
//     { nome: "...", preco: 7.43, desconto: 0.05 },
//     { nome: "...", preco: 12355.33, desconto: 0.15 },
// ];

// function getCusto(precoComDesconto) {
//     return parseInt(precoComDesconto * 0.3);
// }

// function agetPrecoComDesconto(produto) {
//     return produto.preco * (1 - produto.desconto);
// }

// function altoCusto(produto){
//     return produto.preco >= 1000;
// }
// const resultado = produtos
//     .filter(altoCusto)
//     .map(agetPrecoComDesconto)
//     .map(getCusto);
// console.log(resultado);

// Reduce -> Array

/**
 * Reduce faz um tratamento e dá um
 * resultante como valor
 */

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function somar(a, b){
//     return a + b;
// }

// console.log(numeros.reduce(somar));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media(acc, num){
    console.log(acc, num)
    const novoTotal = acc.total + num;
    const novaQtde = acc.qtde + 1
    return {
        total: novoTotal,
        qtde: novaQtde,
        media:  novoTotal/novaQtde
    }
}

const valorInicial = { total: 0, qtde: 0, media: 0 };
const valorFinal = numeros.reduce(media ,valorInicial );

console.log(valorFinal.media);