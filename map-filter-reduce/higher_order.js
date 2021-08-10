//higher order

//document.addEventListener('click', handleDocumentClick)
//function handleDocumentClick(){
//    console.log('clicou no documento')
//}

//#############################

//function double(aNumber){
//    return aNumber * 2
//}
//function triple(aNumber){
//    return aNumber * 3
//}
//function quadruple(aNumber){
//    return aNumber * 4
//}
//
//console.log(double(9))
//console.log(triple(9))
//console.log(quadruple(9))
//#######


//function getMultiplier(multiplier){
//    return function(aNumber){
//        return aNumber * multiplier
//    }
//}
//
//const double = getMultiplier(2)
//const triple = getMultiplier(3)
//const quadruple = getMultiplier(4)
//
//console.log(double(5))
//console.log(triple(10))
//console.log(quadruple(4))
//########## simplificando para arrow function
//const getMultiplier = multiplier => aNumber => aNumber * multiplier

//function getMultiplier(multiplier){
//    return function(aNumber){
//        return aNumber * multiplier
//    }
//}

//const double = getMultiplier(2)
//const triple = getMultiplier(3)
//const quadruple = getMultiplier(4)

//console.log(double(5))
//console.log(triple(10))
//console.log(quadruple(4))

//######map, filter ou reduce

//map
/**
 * quando usar map
 * voce quer obter um novo 
 * array com a mesma quantidade
 * de itens do array original
 * mas, com cada item transformado
 */

const numbers = [1, 2, 3]

//console.log(numbers)


const squareNumbers = numbers.map(item => item ** 2)

//console.log(squareNumbers)

const tvShows = [
    {name: 'Breaking Bad', releaseYear:2008},
    {name: 'Mr. Robot',releaseYear: '2015' },
    {name: 'True Detective',releaseYear: '2014' },
    {name: 'Hannibal',releaseYear: '2013' }
]

const showNames = tvShows.map(({name}) => name)
//console.table(showNames)

//filter
/**
 * Qaundo vai usar filter?
 * Baseando em uma condição você
 * quer obter um novo array com só
 * alguns itens do array original
 */

const randomNumber = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumber.filter(item=> item > 37)
//console.log(numbersGreaterThan37)

const tarantinoMovies = [
    { name: "Bastardos inglórios", release: 2009 },
    { name: "Pulp Fiction", release: 2004 },
    { name: "Quatro Quartos", release: 1995 },
    { name: "Kill Bill: Volume2", release: 1995 },
    { name: "Sin City", release: 2005 },
];

const moviesBefore2000 = tarantinoMovies.filter(({ release }) => release < 2000)
//console.log(moviesBefore2000)


const firstTravelerCities = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianópolis'
]

const secondTravelerCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb']

const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city) )
//console.log(commonCities)
//console.log(['oi', 'olá', 'e aí'].includes('e aí'))
//console.log(['oi', 'olá', 'e aí'].includes('aí'))

//reduce
/**
 * Quando vai usar o reduce?
 * quando voce quer reduzir o 
 * array á algum tipo de dado
 */

const numbers1 = [1, 2, 3]

const sum = numbers1.reduce((acumulator, item) => acumulator + item, 0)
//console.log(sum)

const cart = [
    { name: "Bastardos inglórios", price: 2009 },
    { name: "Pulp Fiction", price: 2004 },
    { name: "Quatro Quartos", price: 1995 },
    { name: "Kill Bill: Volume2", price: 1995 },
    { name: "Sin City", price: 2005 },
];

const productList = cart.reduce((acumulator, { name })=> `${acumulator}-${name}\n`, '')

console.log(productList);