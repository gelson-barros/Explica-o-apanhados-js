let mariana = {
    nome: "Mariana da Silva",
    curso: ["Análise de Algoritmo", "Estrutura de Dados", "Introdução a computação"],
    isActive: true,
    points: 2000
};

let silva = {
    nome: "Silvia de Andrade",
    curso: ["HTML", "Estrutura de Dados", "JavaScript"],
    isActive: true,
    points: 1440
};

let laura = {
    nome: "Laura Varmerman",
    curso: ["Análise de Algoritmo", "Estrutura de Dados", "Introdução a computação", "Estatística"],
    isActive: false,
    points: 10000
};

let estudantes = [ mariana, silva, laura];

// for(estudante of estudantes){
//     console.log(estudante.nome)
// }

for (estudante of estudantes) {
    if(estudante.isActive){
        console.log(estudante.nome);
    }
}