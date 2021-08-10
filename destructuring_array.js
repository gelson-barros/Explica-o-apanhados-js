// const oddNumbers = [1, 2, 3];
// const firstOddNumber = oddNumbers[0];
// const secondOddNumber = oodNumbers[1];~
// console.log(firstOddNumber, secondOddNumber);

// const [firstOddNumber, secondOddNumber] = [1, 2, 3];
// console.log(firstOddNumber, secondOddNumber);

// const [ , secondOddNumber] = [1, 2, 3];
// console.log(secondOddNumber);

// const sumFirstAndThirdNumber = ([firstEvenNumber, ,thirdEvenNumber]) => firstEvenNumber + thirdEvenNumber;
// console.log(sumFirstAndThirdNumber([2, 4, 6, 8]));

const sumFirstAndThirdNumber = ([firstEvenNumber, ,thirdEvenNumber = 0]) => firstEvenNumber + thirdEvenNumber;
console.log(sumFirstAndThirdNumber([2, 4]));