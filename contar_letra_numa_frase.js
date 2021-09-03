const aString = "O curso de JavaScript Roger Melo funciona com turmas fechadas, abertas poucas vezes";

// const getIndexesOfCharater = (str, char) => {
//     let newArr = [];
//     [...str].forEach((letter, index) => {
//         if (letter === char) {
//             newArr.push(index);
//         }
//     });
//     return newArr;
// };


const getIndexesOfCharater = (str, char) => {
    let newArr = [];
    return [...str].reduce((acc, item, index) => {
        if (item === char) {
            acc.push(index);
        }
        return acc;
    }, [])
};
console.log(getIndexesOfCharater(aString, 'b'))

// console.log(aString.indexOf('b'))


