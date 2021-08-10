/*
- Neste exercicio, seu desafio será criar, do zero o método reduce;
- Implemente uma função "reduce" que passui a mesma funcionalidade do método reduce original;
- Você não poderá utilizar o método reduce original, embutido na linguagem;
- A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9
    - reduce(
        [1, 2],
        (acc, item)=>{
            acc['number-' + item] = item;
            return acc;
        },
        {}
    ) // {"number-1": 1, "number":2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3
- utilize os casos de uso acima para testar sua função;
- Sê nao se lembra como o método reduce funciona, procura saber mais sobre o metodo reduce e callback
*/

const reduce = (arr, func, initvalue) => {
    let acc = initvalue;
    let accumulateCallbackReturn = (item, index, array) => {
        acc = func(acc, item, index, array);
    };
    arr.forEach(accumulateCallbackReturn);
    return acc;
};

console.log(reduce([1, 2, 3], (acc, item) => acc + item, 0)); //6
console.log(reduce([2, 3, 4], (acc, item) => acc + item, 0)); //9
console.log(
    reduce(
        [1, 2],
        (acc, item) => {
            acc["number-" + item] = item;
            return acc;
        },
        {}
    )
); // {"number-1": 1, "number":2};

console.log(reduce([1, 2], (acc, item, index) => acc + index, 0)); // 1

console.log(reduce([1, 2], (acc, item, index, array) => acc + array[index], 0))// 3