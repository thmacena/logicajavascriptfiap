/*Doações em dólar e precisa saber qual é o valor em reais.
crie um programa que permita que o usuário digite o valor da doação em dólares e converta
esse valor para reais e exiba o resultado na tela.*/

let doacao=parseFloat(prompt("Digite a quantidade a ser doada"));
let dolar=parseFloat(prompt("Digite a cotação do dólar"));;

var total= doacao * dolar;

alert(`O total da doação foi de ${total.toFixed(2)} reais.`);


document.getElementById("ong").innerHTML=`O total da doação concedida para a ONG foi de ${total.toFixed(2)} 
reais, com base na cotação atual de ${dolar.toFixed(2)} reais.`;
