/*Crie uma aplicação web para um boletim escolar
em que o professor deve digitar o nome do aluno e inserir tres nota de 0 a 10 para ele
a aplicação web deve tirar a média das men~çes e exibir uma mensagem
com os seguintes criteiros

a maior q 7 aprovado em verde
b 5 a 6,9 recuperação em amarelo
c menor q 5 vermelho
*/

let nome;
let n1;
let n2;
let n3;

function principal() {
    document.getElementById("title").innerHTML = "Media"
    document.getElementById("subtitle").innerHTML = "Digite as 3 notas"
}

function calcNota() {
    nome = document.getElementById('nome').value;


    let total = (n1 + n2 + n3) / 3;

    if (total >= 7 && total <= 10) {
        document.getElementById("result").innerHTML = `${nome}, você está <font color = #00FF00>Aprovado</font>, sua média foi de ${total.toFixed(1).toString()}`
    } else if (total >= 5 && total <= 6.9) {
        document.getElementById("result").innerHTML = `${nome}, você está <font color = #FAD921>recuperação</font>, sua média foi de ${total.toFixed(1).toString()}`
    } else if (total >= 0 && total <= 5) {
        document.getElementById("result").innerHTML = `${nome}, você está <font color = #F51900>reprovado</font>, sua média foi de ${total.toFixed(1).toString()}`
    } else {
        document.getElementById("result").innerHTML = `Nota inválida`
    }

}


function validarNotas() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);

    if (isNaN(n1) || n1 < 0 || n1 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 1`;
        return;
    }

    if (isNaN(n2) || n2 < 0 || n2 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 2`;
        return;
    }

    if (isNaN(n3) || n3 < 0 || n3 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 3`;
        return;
    }

    if (isNaN(n4) || n4 < 0 || n4 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 4`;
        return;
    }

    calcNota()
}