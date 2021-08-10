const numbers = [10, 6, 4];

const total = numbers.reduce(myReduce, 0);

function myReduce(accumulator, value, index, array){
    return accumulator + value;
}

console.log(total);