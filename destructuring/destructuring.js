//Destructuring assigment

//const oddNumbers = [1, 3, 4]
//const firstOddNumber = oddNumbers[0]
//const secondOddNumber = oddNumbers[1]

//const [firstOddNumber, secondOddNumber] = [1, 3, 4]
//const [firstOddNumber, ,thirdOddNumber] = [1, 3, 4];
//console.log(firstOddNumber, thirdOddNumber)

const sumFirstAndThirdNumber = ([firstOddNumber, , thirdOddNumber = 0]) => firstOddNumber + thirdOddNumber

//console.log(sumFirstAndThirdNumber([2, 4, 6, 8]))
console.log(sumFirstAndThirdNumber([2, 4]))//Nan
console.log(9 + undefined)





//Destructuring Assignment em objectos

const dog = {
    name: 'Ellie',
    breed: 'Corgi',
    age: 4
}

const {name: fullName, age: yearsOld = 4} = dog
 
//console.log(fullName, yearsOld)

const cities = {
    paris: {
        country: "France",
        language: "French",
    },
    stockholm: {
        country: "Swedem",
        language: "Swedish",
    }
}

const {paris, stockholm: {country}} = cities

//console.log(stockholm)//nao funciona
//console.log(country)


//Destructuring de objectos em funções 

const getName = ({name}) => name

//console.log(getName({name: 'Marcelo'}))