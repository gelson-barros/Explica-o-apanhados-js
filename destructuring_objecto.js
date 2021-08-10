const dog = {
    name: 'Ellie',
    breed: 'Corgi',
    age: 4
}

// const {name, breed } = dog
// console.log(name, breed);

// const { name: fullName, age: yearsOld = 6 } = dog;
// console.log(fullName, yearsOld);


const cities = {
    paris: {
        country: 'France',
        language: 'French'
    },
    stockholm: {
        country: 'Sweden',
        language: 'Swedish'
    }
}

const { paris: {country, language} , stockholm } = cities;
console.log(country, language, stockholm);


// const getName = options => options.name;
// console.log(getName({name: 'Marcelo'}));

const getName = ({name}) => name;
console.log(getName({name: 'Marcelo'}));