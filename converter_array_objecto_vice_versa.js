let arr = [
    ['titulo', 'Trem das Cores'],
    ['artista', 'Caetano Veloso'],
    ['album', 'Coletânea'],
    ['duracao', 150]
]



function arrayToObjecto(array){
    // return array.reduce((acc, [key, value]) => {
    //     acc[key] = value;
    //     return acc;
    // },{});

    let result = {}
    for(const [key, value] of array){
        result[key] = value;
    }
    return result;
}

// console.log(arrayToObjecto(arr));
let obj = arrayToObjecto(arr);

function objectToArray(object){
    // return Object.entries(obj);

    let result = [];
    for(key of Object.keys(object)){
        result.push(
            [key, object[key]]
        )
    }
    return result;
}

console.log(objectToArray(obj));