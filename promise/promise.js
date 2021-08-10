//Promises 
/* 
Uma introdução prática e compreenseiva

Uma promise é um objecto que representa o sucesso ou falha de uma operação assíncrona

O que é uma operação assíncrona
*/

const myFunc = () => 'Function 1'
const myFunc2 = () => 'Function 2'

myFunc() // 'Function 1'
myFunc2() // 'Function 2'

//let randomNumber = 9

//setInterval(() => {
//    randomNumber += 100
//    console.log(randomNumber)
//}, 2000)

//console.log(randomNumber)

/*
Código assícrono pode iniciar um processo agora e finalizar esse posetriomente

Request são um exemplo de operação assícrona

Mas o javascript não é executado em uma única thread?

como criar uma promise?
*/

//const aPromise = new Promise((resolve, reject) => {
//    const aNumber = 37
//    //resolve(aNumber)
//    reject(aNumber)
//})
//
//
//aPromise
//    .then(value => value)
//    .then(value => {
//        console.log(value)
//    })
//    .catch(rejectValue => {
//        console.log(rejectValue)
//    })

const url = 'https://dog.ceo/api/breeds/image/random'

const dogImg = document.querySelector('[data-js="dog-img"]')
//console.log(dogImg)

const validateHTTPStatus = (dogData) => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`);
    }
    return dogData.json();
}

const setDogImg = ({ message: url }) => {
    //console.log(url)
    dogImg.setAttribute("src", url);
}

const handleRequestError = (error) => {
    console.log(error.message);
}
//console.log(fetch(url))
fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)
