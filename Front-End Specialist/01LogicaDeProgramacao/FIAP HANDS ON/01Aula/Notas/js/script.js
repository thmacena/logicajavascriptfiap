/*notaAc que vale 20% da média, 
AvaliaçãoGeral vale 10% e uma terceira
nota que será denominada por AvaliaçãoTrimestral 70%*/

let notaAc=parseFloat(prompt("Digite a sua nota Ac"));
let avaliacaoGeral=parseFloat(prompt("Digite a sua nota de avaliação geral"));
let avaliacaoTrimestral=parseFloat(prompt("Digite a sua avaliação trimestral"));
let minimo = 6;

// let media=(o.2+nome+0.1+at*o.7;)
//para calcular a média será usada a média aritmética.
let calculo=(notaAc + avaliacaoGeral + avaliacaoTrimestral)/3;

/*Neste caso, achei mais válido usar a função, pois eu quero mostrar duas opções de tex
en caso de maior ou igual que mínimo, mostrar a primeira e se menor a segunda opção*/

function quebralinha(){
    document.write("<br>");
}
function frase(texto){
    document.write(texto);
    quebralinha();
}


alert(`O resultado anual da sua média foi de ${calculo} pontos.`);

if(calculo>=minimo){
    alert(`Parabéns, você foi aprovado!`);

    frase("Parabéns, você conseguiu um aproveitamento suficiente para passar para o próximo ano.");
    frase(`Sua média foi de: ${calculo}.`);

}else{
    alert(`Você não foi aprovado,`)

    frase("Sinto muito, mas você terá que fazer a recuperação");
    frase(`Sua média foi de: ${calculo}.`);
}





