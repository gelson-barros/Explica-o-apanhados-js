/*
Implemente uma função "forEach" que possui a mesma funcionalidade do método forEach original.
Você não poderá utilizar o método forEach original, embutido na linguagem;
A invocação da função "forEach" deve receber um array como 1º argumento e a declaração de uma função como 2º argumento;
Faça os testes usando a let e const abaixo;
    - Após a execução do forEach, acumulator deve armazenar 236;
    - A cada execução do forEach, a mensagem '"X" é o Xº item do array [XX, XX, XX, XX]' deve ser exibida no console. Os "X" são placeholders que devem ser preenchidos com as informações correctas.
Dica 1: O método forEach é usado para executar efeitos colaterais;
Dica 2: O método forEach nunca retorna um valor.
*/
let accumalator = 0;
const oddNumbers = [51, 97, 65, 23];

const foreach = (arr, func) => {
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        func(item, index, arr);
    }
};

const logMessage = (item, index, arr) => {
    const message = `${item} é o ${index + 1}º do [${arr.join(", ")}]`;
    console.log(message);
};

const sumArrayItens = (item) => (accumalator += item);

foreach(oddNumbers, logMessage);
foreach(oddNumbers, sumArrayItens);
console.log(accumalator);
