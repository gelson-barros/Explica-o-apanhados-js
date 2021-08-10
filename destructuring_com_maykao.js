/**
 * #Desestruturar#
 * 
 * Tirar um valor primitivo ou uma estrutura de dados
 * de dentro de uma outra estrutura
 * 
 * *Obejct
 *      *Renomeando propriedades
 *      *Colocando em variáveis existentes
 * *Array
 *      *2 valores
 *      *Desconsiderando itens
 *      *...rest
 * 
 * *Function
 */


/**Objecto */
// const pessoa = {
//     name: "Elton",
//     age: 26
// };
// const name = pessoa.name;//normal
// const { name } = pessoa;//destructuring
// Tirando 
// const { name, age } = pessoa;
// console.log(name, age);
// Renomeando
// const { age: idade } = pessoa;
// console.log(idade);// age nao funciona porque renomeado

// sem a palavra primitiva var let const 
// ({age, name} = pessoa)
// console.log(age, name)

/**Array */
// const fruits = ["banana", "pera", "uva"];
// const banana = fruits[0];
// const [banana] = fruits;
// console.log(banana);

// const [b, p] = fruits;
// const [,b, p] = fruits;
// console.log(b, p);

// const [b, ...rest] = fruits;
// console.log(b, rest);

/**Function com object */
// function liquidificador({pera}){
//     console.log(pera);
// }
// const fruits = {
//     banana: "banana",
//     pera: "pera"
// }
// liquidificador(fruits);

/**function com objecto e rest */
// function liquidificador({name, ...resto}) {
//     console.log(name, resto);
// } 
// liquidificador({name: "Elton", age: 27, genero: "M"});

/**Function com array */
// function liquidificador([f1, ...resto]) {
//     console.log(f1, resto);
// }
// liquidificador(["banana", "pera"]);


function liquidificador([primeiro, ...resto]) {
    console.log(resto);
}

