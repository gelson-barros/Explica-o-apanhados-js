/*
02 Regras

1ª regra : Invoca a si mesma;
2ª regra : Tem um base case(uma estrategia que para de ser invocada)

*/

function dontDoThat(value){
    return dontDoThat(value);
}

// como parar uma função recursiva?


var getFactorial = number => {
    if(number === 1){
        return 1;
    }

    return number * getFactorial(number - 1);
 
}

getFactorial(3);