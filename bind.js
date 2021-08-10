/**
 * Function.prototype.bind()
 */

/*
O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
*/

const modulo = {
    x: 42,
    getX: function(){
        return this.x;
    }
};

const desligadoGetX = modulo.getX;
// console.log(desligadoGetX()); // A função é chamada no escopo global
//esperado um undefined

const ligadoGetX = desligadoGetX.bind(modulo);
// console.log(ligadoGetX());


/*
Sintaxe
function.bind(thisArg[, arg1[, arg2[, ...]]])
Parâmetros
thisArg
O valor a ser passado como parâmetro this para a função de destino quando a função vinculada é chamada. O valor é ignorado se a função ligada é construída usando o operador new.
arg1, arg2, ...
Argumentos que precedem outros argumentos fornecidos para a função vinculada ao invocar a função de destino.
Valor de retorno
Uma cópia da função fornecida com o valor this especificado e argumentos iniciais.


Descrição
A função bind() cria uma nova função vinculada (bound function). Uma função vinculada é um objeto de função exótico (termo da ECMAScript 2015) que encapsula o objeto de função original. Chamar uma função vinculada geralmente resulta na execução de sua função encapsulada.

Uma função vinculada tem as seguintes propriedades internas:

[[BoundTargetFunction]] - o objeto de função encapsulado;
[[BoundThis]] - o valor que sempre é passado como this quando se chama a função encapsulada;
[[BoundArguments]] - uma lista de valores cujos elementos são usados como os primeiros argumentos para qualquer chamada da função encapsulada;
[[Call]] - executa código associado com este objeto. Invocado através de uma expressão de chamada de função. Os argumentos para o método interno são um valor this e uma lista contendo os argumentos passados para a função por uma expressão de chamada.
Quando a função vinculada é chamada, ela chama seu método interno [[Call]] na [[BoundTargetFunction]], na forma Call(boundThis, args), onde boundThis é [[BoundThis]] e args é [[BoundArguments]] seguido pelos argumentos passados pela chamada de função.

Uma função vinculada também pode ser construída usando-se o operador new; ao fazê-lo, o resultado é o mesmo que seria se a função alvo tivesse sido construída. O valor de this fornecido é ignorado, porém os argumentos precedentes são fornecidos à função emulada.
*/


// Criando uma função vinculada

/*
O uso mais simples de bind() é fazer com que uma função que, independentemente da chamada, é chamada com um determinado valor this. Um erro comum para programadores JavaScript novatos é extrair um método de um objeto e, em seguida, chamar essa função e esperar que ele use o objeto original como o seu this (por exemplo, usando esse método num código baseado em callback). Sem a devida atenção, no entanto, o objeto original é normalmente perdido. Criar uma função vinculada a partir da função, usando o objeto original, resolve perfeitamente esse problema:
*/

this.x2 = 9; // this aqui refere ao objecto global no "window" do navegador 

var modulo2 = {
    x2: 81,
    getX2: function(){ return this.x2}
}

// modulo2.getX2();//81
// console.log(modulo2.getX2());//81

var recuperarX2 = modulo2.getX2;
// recuperarX2();// 9 ????
// console.log(recuperarX2());// retorna 9 só no navegador

// Crinado uma nova função com 'this' vinculada ao módulo
// Programadores novatos podem confundir a variável X2
// global com a propriedade x2 do módulo2
var ligadoGetX2 = recuperarX2.bind(modulo2);
// ligadoGetX2();// 81
// console.log(ligadoGetX2())



// Funções parcialmente aplicadas
/*
O próximo uso mais simples de bind() é criar uma função com argumentos iniciais pré-especificados. Esses argumentos (caso existam) acompanham o valor this fornecido e então são inseridos no início dos argumentos passados para a função alvo, seguidos pelos argumentos passados para a função vinculada, sempre que a função vinculada é chamada.
*/

function list(){
    console.log(arguments);
    // return Array.prototype.slice.call(arguments)
}
console.log(list(1, 3, 5));