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

/***************************************/

// function composicao(fn1, fn2, fn3) {
//     return function(valor){
//         return fn3(fn2(fn1(valor)));
//     }

// }

// function gritar(texto) {
//     return texto.toUpperCase();
// }

// function enfatizar(texto) {
//     return `${texto}!!!!!`;
// }

// function tornarLento(texto) {
//     return texto.split("").join(" ");
// }

// const resultado = composicao(
//     gritar,
//     enfatizar,
//     tornarLento
// );
// console.log(resultado("cuidado com o buraco"));

/********************************************/

// utilizando um reduce

function composicao(...funcoes) {
    // Usado a técnica currying (lazy eval)
    return function (valor) {
        return funcoes.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    };
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return `${texto}!!!!!`;
}

function tornarLento(texto) {
    return texto.split("").join(" ");
}

const resultado = composicao(gritar, enfatizar, tornarLento);

const resultado1 = composicao(gritar, enfatizar);

console.log(resultado("cuidado com o buraco"));
console.log(resultado1("cuidado com o buraco"));
