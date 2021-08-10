/*
06

- Implemente uma função que cria e retorna um elemento HTML;
- Ela deve receber o nome do elemento HTML a ser criado e um objecto com os atributos que o elemento deve conter;
- A quantidade de atributos que o elemento irá conter pode variar.

Dica: pesquise por object.entries
*/

const createElement = (elementName, attibutes) => {
    const element = document.createElement(elementName)

    const attributesArray = Object.entries(attibutes)

    attributesArray.forEach(([key, value])=> element.setAttribute(key, value))
    return element
}


const input = createElement('input', {
    type: 'radio',
    id: 'input1',
    name: 'main',
    value: 'principal',
    for: 'input1',
    'data-js': 'input1'
})

console.log(input)

/*
07
- Na weather app, faça com que quendo o usuário recarregar a página ou sair da aplicação e voltar, as informações da última cidade pesquisada seja exibida na interface
*/