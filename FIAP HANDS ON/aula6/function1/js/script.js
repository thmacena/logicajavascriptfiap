/*Elabora um programaa JavaScript que contem uma função denomnada verificarIdade.
 Esta funlão recebe por 
parâmetro a idade de uma pessao e retorna uma string verificando se ela

é maior ou menor de idade. */


function verificarIdade(){
    let age = parseInt(document.getElementById("age").value);
    
    if(age < 18){
        alert(`Você é menor de idade!`);
    }else{
        alert(`Você é maior de idade!`);
    }
}