
/*Um banco concederá um crédito especial aos seus clientes, variável 
com o saldo médio no último ano. Faça um programa que leia o saldo 
médio de um cliente e calcule o valor do crédito de acordo com a tabela 
abaixo. Mostre uma mensagem informando o saldo médio e o valor do 
crédito:
de 0 a 200 - nenhum crédito
de 201 a 400 - 20% do valor do saldo médio
de 401 a 600 - 30% do valor do saldo médio
acima de 601 - 40% do valor do saldo médio
*/

let saldomedio=parseFloat(prompt(`Insira o seu saldo médio anual aqui: `));

var resultado= saldomedio / 10 * 2;

if (saldomedio<=200){
    alert(`Você não tem nenhum crédito.`);
}else if(saldomedio>200, saldomedio<=400){
    alert(`Você possui crédito, seu saldo atual é de 20% do valor, totalizando: ${resultado}`);
    document.getElementById("cartao").innerHTML=`Seu crédito é de ${resultado.toFixed(2)} com 20% do valor`;
}else if(saldomedio>400, saldomedio<=600){
    resultado = saldomedio / 10 * 3;
    alert(`Você possui crédito! Seu saldo atual é de 30% do valor, totalizando: ${resultado.toFixed(2)}`);
    document.getElementById("cartao").innerHTML=`Seu crédito é de ${resultado.toFixed(2)} com 30% do valor`;
}else{
    resultado = saldomedio / 10 * 4;
    alert(`Você possui crédito! Seu saldo atual é de 40% do valor, totalizando: ${resultado.toFixed(2)}`);
    document.getElementById("cartao").innerHTML=`Seu crédito é de ${resultado.toFixed(2)} com 40% do valor`;
}