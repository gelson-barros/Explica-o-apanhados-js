/*
Array.prototype.sort()
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.

A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser garantido e depende da implementação realizada.

arr.sort([funcaoDeComparacao])

Parâmetros
funcaoDeComparacao Optional
Especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a pontuação de código Unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.
    primeiroElemento
    O primeiro elemento para a comparação.
    segundoElemento
    O segundo elemento para comparação.
Valor de Retorno
O array ordenado. Note que o array é ordenado de acordo com a pontuação de código Unicode de cada um dos caracteres, e nenhuma cópia é feita.
*/

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.

/*
function comparar(a, b) {
  if (a é menor que b em algum critério de ordenação) {
    return -1;
  }
  if (a é maior que b em algum critério de ordenação) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}

*/

function compararNumeros(a, b) {
    return a - b;
}

/*
O método de ordenação pode convenientemente ser usada com funções anônimas (e closures):
*/

var numbers = [4, 23, 52, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

/*
Objetos podem ser ordenados de acordo com o valor de uma de suas propriedades.
*/

var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
});

console.log(items);

/*
Criando, exibindo, e ordenando um array
O exemplo abaixo cria quatro arrays e mostra seu conteúdo original, então o conteúdo dos arrays ordenado. Os arrays numéricos são ordenados sem a função de comparação, e então, com a função.
*/

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compararNumeros(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Ordenada:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));

console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));

/*
Ordenando caracteres não-ASCII
Para ordenar strings com caracteres não-ASCII, i.e. strings com caracteres acentuados (e, é, è, a, ä, etc.), strings de línguas diferentes do Inglês: use String.localeCompare. Esta função pode comparar estes caracteres, então eles aparecerão na ordem correta.
*/

var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items é ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']


/*
Ordenando com mapa
A funcaoDeComparacao pode ser invocada múltiplas vezes por elemento do array. Dependendo da natureza da funcaoDeComparacao, isto pode causar um excesso processamento. Quanto mais trabalho a funcaoDeComparacao fizer, e quanto mais elementos houverem para ordenar, seria mais inteligente considerar  o uso de um mapa para a ordenação. A idéia é percorrer o array uma vez para extrair os valores já processados para a ordenação e armazenar em um array temporário, ordenar o array temporário e então percorrer o array temporário para conseguir a ordenação correta.
*/

// o array a ser ordenado
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container para o resultado ordenado
var result = mapped.map(function(el){
  return list[el.index];
});
