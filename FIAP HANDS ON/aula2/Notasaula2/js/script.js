/*Calcule a média aritmética das três notas de um aluno e mostre, além 
do valor da média, uma mensagem de "Aprovado", caso a média seja 
igual ou superior a 7; a mensagem “em prova final” caso a média seja 
menor que 7 e maior ou igual a 4; e "reprovado", caso contrário.*/


let notaUm=parseFloat(prompt(`Insira a sua primeira nota aqui: `));
let notaDois=parseFloat(prompt(`Insira a sua segunda nota aqui: `));
let notaTres=parseFloat(prompt(`Insira a sua terceira nota aqui: `));


let media= (notaUm + notaDois + notaTres)/3;


if(media>=7){
    alert(`Sua média foi de ${media.toFixed(2)} você está aprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está aprovado, sua média foi de ${media.toFixed(2)}`;
}else if(media>=4){
    alert(`Sua média foi de ${media.toFixed(2)} você está em prova final.`);
    document.getElementById("mensagem").innerHTML=`Você está em prova final, sua média foi de ${media.toFixed(2)}`;
}else{
    alert(`Sua média foi de ${media.toFixed(2)} você está reprovado.`);
    document.getElementById("mensagem").innerHTML=`Você está reprovado, sua média foi de ${media.toFixed(2)}`;
}

