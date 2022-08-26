angular.module("meuModulo")
.controller("indexController", function ($scope) {
    $scope.titulo = "Sistema com Angular JS";
    $scope.alunos = [
        { nome: "Camila", email: "camila@mail.com", nota1: 65, nota2: 80, nota3: 55 },
        { nome: "Pedro", email: "pedro@mail.com", nota1: 75, nota2: 80, nota3: 55 },
        { nome: "Murilo", email: "murilo@mail.com", nota1: 65, nota2: 60, nota3: 55 },
        { nome: "João", email: "joao@mail.com", nota1: 95, nota2: 80, nota3: 55 },
        { nome: "Ana", email: "ana@mail.com", nota1: 65, nota2: 30, nota3: 55 },
    ];

    function init() {
        $scope.alunos.forEach(aluno => {
            aluno.media = media(aluno);
        });
    }

    function media(aluno) {
        let media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3;
        return media.toFixed(2);
    }

    $scope.addAluno = function (aluno) {
        aluno.media = media(aluno);
        $scope.alunos.push(aluno);
    };

    init();
})