/*Utilizando o looping do while, elabore um programa que leia dois números 
quaisquer e exiba a quantidade de números pares entre os dois valores 
digitados. Lembre-se que o primeiro número deve ser sempre menor que o 
segundo.*/

function calcularPar() {
    let pn = document.getElementById("pn");
    let sn = document.getElementById("sn");
    let valueUm = +pn.value;
    let valueDois = +sn.value;
    let result = "";

    if (valueDois <= valueUm) {
        alert(`O segundo número não pode ser menor que o primeiro`); //<= para caso o valor seja = também parar
        return
    }

    let controle = valueUm
    let soma = 0;
    do {
        if(controle % 2 == 0){

            soma++;
            console.log(controle);
        }
        
        controle++;
    } while (controle < valueDois);
    
    document.getElementById("resultado").innerHTML=`O resultado foi de ${soma}`

    pn.value = 0;
    sn.value = 0;
}



