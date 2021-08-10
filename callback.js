// forEach e callbacks

// // Mais simplificado
// const myFunc = callback => {
//     const value = 77;
//     callback(value);
// };

// myFunc(number => {
//     console.log(number);
// });

// Mais detalhado
function myFunc(callback){
    const value = 77;

    callback(value);
}

function func(number){
    console.log(number);
}

myFunc(func);
