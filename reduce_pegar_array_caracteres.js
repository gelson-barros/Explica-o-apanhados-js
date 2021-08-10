/*
- Descomente o console.log abaixo e implemente a função "getIndexesOfCharacter";
- Essa função:
    - Recebe uma string e um caractere como parâmetros;
    - Retorna um array com os indexes das ocorrências do caractere na string;
- Ao implementar a função, o console.log abaixo deve exibir um array [4, 14 ];
- Para se assegurar que a função funciona com qualquer caractere, teste ela modificando o caracter que ela recebe como segundo argumento.
*/

const aString = 'Gelson De Barros Ferreira';

const getIndexesOfCharacter = (string, character) =>
    [...string].reduce(
        (acc, item, index) =>{
            console.log(acc, item, index)
            return item.toLowerCase() === character.toLowerCase()
                ? [...acc, index]
                : acc
        },
        []
    );

console.log(getIndexesOfCharacter(aString, 'e'));
console.log(getIndexesOfCharacter(aString, "o"));