/*
03

- Implemente uma função  'combineOperations' que rercebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
- A combineOperations deve:
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 
      1ª função e assim por diante. Até que cada função
      do array tenha sido invocada;
    - Retornar o valor que a invocação da última função
      do array retornou.
- Descomente p código abaixo. A primeira invocação da 
combineOperations deve retornar 60 e a segunda invocação, 10

*/


const add100 = num => num + 100;

const divByFive = num => num / 5;

const multiplyByThree = num => num * 3;

const multiplyFive = num => num * 5;

const addTen = num => num + 10;

const combineOperations = (initValue, arrOfFuncs) => 
    arrOfFuncs.reduce((acc, func) => func(acc)
    ,initValue);



console.log(combineOperations(0, [add100, divByFive, multiplyByThree]));
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]));