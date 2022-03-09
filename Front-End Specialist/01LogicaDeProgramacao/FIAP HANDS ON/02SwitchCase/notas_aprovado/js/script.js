/*Elabore um programa que leia 2 notas escolares e calcule a média.V
Deve ler também a quantidade de aulas dadas e a quantidade de aulas 
assistidas pelo aluno e calcule sua frequencia :
(aulasAssistidas/aulasDadas)*100
O aluno somente estará aprovado com média maior ou igual a 7 e frequência 
mínima de 75%.
Exiba a média, a frequência e a mensagem informando sua situação*/

let n1=parseFloat(prompt(`Insira a sua primeira nota aqui:`));
let n2=parseFloat(prompt(`Insira a sua segunda nota aqui:`));
let aulasDadas=parseInt(prompt(`Quantidade de aulas dadas:`))
let aulasAssistidas=parseInt(prompt(`Quantidade de aulas assistidas`));
let frequencia = (aulasAssistidas/aulasDadas)*100;
const minimo = 75; //const não sofre alterações

let media = (n1 + n2) / 2; 

if(frequencia >= minimo && media >= 7){

    alert(`Parabéns, você foi aprovado! Sua nota foi de ${media} e sua presença foi de ${frequencia}%`);

}else{
    
    alert(`Você foi reprovado. Sua média foi de ${media} e a sua frequência foi de ${frequencia}%`);
}
document.getElementById("media").innerHTML=`Sua frequência foi de ${frequencia}% com média de ${media}`;