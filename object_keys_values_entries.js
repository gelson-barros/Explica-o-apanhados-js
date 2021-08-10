//Object.keys(obj) -> retornar um array das nomes das propriedades do objectos
//Object.values(obj) -> retornar um array das valores das propriedades do objectos
//Object.entries retornar um array de pares (key, values)

const amigos = {
    Dimuini: 28,
    Tarcio: 28,
    Silvio: 27,
    Ovidio: 31
}

console.log(Object.keys(amigos));
console.log(Object.values(amigos));
console.log(Object.entries(amigos));

function sumAge(obj){
    let sum = 0;
    for (let idade of Object.values(obj)) {
        sum += idade;
    }
    return sum;
}
console.log(sumAge(amigos));

function stringAgeNome(obj) {
    let sum = 0;
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} tem ${value} idade`);
    }
}
console.log(stringAgeNome(amigos));

// const decrAmigo = {
//     nome: 'Gelson',
//     apelido: 'Ferreira',
//     nomeCompleto: function(){
//         return this.nome + ' ' + this.apelido;
//     }
// }

// console.log(Object.keys(decrAmigo));
// console.log(Object.values(decrAmigo));
// console.log(Object.entries(decrAmigo));