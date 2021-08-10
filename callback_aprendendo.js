//Criando uma callback

function salvar(foo) {
    console.log("Salvando um dado ...");
    foo();
}
// function salvar(callback) {
//     console.log("Salvando um dado ...");
//     callback();
// }

salvar(function () {
    console.log("Dado foi salvo");
});
// Obs: a palavra callback pode ser substítuido por outra palavra

// Uma outra maneira
function salvando() {
    console.log("Dado salvado");
}

salvar(salvando);

console.log("-------------------------");

//Ter duas callback
function salvaDados(callback1, callback2) {
    console.log("Salvando dados...");
    callback1();
    console.log("Dados a ser salvo");
    callback2();
}

salvaDados(
    function () {
        console.log("Salvamento em processo");
    },
    function () {
        console.log("Salvamento completo");
    }
);

console.log("-----------------------------");

// Executando uma callback
function salvar2(callback) {
    console.log("salva o dado...");
    if (typeof callback === "function") {
        callback(1);
    }
}

function salvar3(callback) {
    console.log("Salvando o dado....");
    callback();
    callback();
}

salvar3(function () {
    console.log("dado foi salvado");
});

console.log("-----------------------------");

isUserLoged(function (isLoged) {
    if (isLoged) {
        getUserData(function (data) {
            if (data.isPremiun) {
                gotPremiunContent(function (content) {
                    console.log(content);
                });
            }
        });
    }
});

/**
 * Resumo(Summary)
 *
 * - Callback is a function passed as an argument to another function for later execution
 * - JavaScript callback is typical function that can be named or anonymous.
 * - We can provide more than one callback function.
 * - By calling the callback function we can pass any number of arguments to it.
 * - There are no restrictions on the number of times we can call the callback function.
 * - Callback Hell is a multiple nesting of callback functions.
 */
