/*

Neste exercicios, seu desafio será criar o método filter, do zero;
Implemente uma função "filter" que possui a mesma funcionalidade do método filter original;
Voçe não poderá utilizar o método filter original, embutido na linguagem;
A assinatura e retorno da invocação desta função devem ser os seguintes:
 -filter([1, 2, 3], item => item) // [1, 2, 3];
 -filter([0, 1, 2], item => item) // [1, 2];
 -filter([1, 2, 3], item => item < 2) // [1];
 -filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
 filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) // [1, 2, 3, 5]
 
Uilize os casos acima para testar sua função ;
Se voçê não se lembra como o método filter funciona, pesquisa no MDN;

*/
function filter(arr, func) {
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        const itemShouldBeAdded = func(arr[i], i, arr);
        if (itemShouldBeAdded) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter([1, 2, 3], (item) => item));
console.log(filter([0, 1, 2], (item) => item));
console.log(filter([1, 2, 3], (item) => item < 2));
console.log(filter([1, 2, 3, 5], (item, index) => item === index + 1));
console.log(
    filter(
        [1, 2, 3, 2, 1, 5],
        (item, index, array) => index === array.indexOf(item)
    )
);
