// Normal
function func1(valor1, valor2){
    return valor1 + valor2;
}
console.log('normal',func1(1, 2))

// Currying 
function func2(valor1){
    return function (valor2){
        return valor1 + valor2;
    }
}
const func2Valor1 = func2(10);
console.log('currying', func2Valor1(20));
console.log('currying',func2(23)(34));

// currying com arrow
const funcArrow = (valor1) => (valor2) => (valor3) =>{
    return valor1 + valor2 + valor3;
}

console.log('currying com arrow',funcArrow(1)(2)(3))