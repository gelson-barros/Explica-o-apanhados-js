/*
//feito no loop 
function factorComLoops(n){
    let result = 1
    for(let x = n; x > 0; x--){
        result*=x 
    }
    return result
}
console.log(factorComLoops(2));
console.log(factorComLoops(1));
console.log(factorComLoops(0));
//recursividade de factor
function factorComRecursao(n){
    if(n === 0 ) return 1;
    return n * factorComRecursao(n-1)
}
console.log(factorComLoops(2))
console.log(factorComLoops(1));
console.log(factorComLoops(0));
*/
//por loop
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

//recursao
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}
//arra com contagem crescente
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    alert(n)
    const countArray = countup(n - 1);
    //alert(n);
    //alert(countArray);
    countArray.push(n);
    //alert(countArray);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(5));


function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum,endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};
console.log(rangeOfNumbers(3, 7));

function multiplica(n1, n2){

    //Multiplicação por 0 é igual a 0
    if(n1 == 0 || n2 ==0){
        return 0
    }
    //Caso base, onde a recursão para
    else if(n2 == 1){
        return n1;
    }
    //Multiplicando atraves da soma com recursividade
    else{
        return (n1 + multiplica(n1, n2 - 1))
    }
}
console.log(multiplica(5,4))