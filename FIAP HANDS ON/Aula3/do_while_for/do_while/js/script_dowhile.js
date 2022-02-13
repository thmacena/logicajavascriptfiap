/* Utilizando o looping do while, elabore um programa que leia dois números 
quaisquer e exiba a quantidade de números pares entre os dois valores 
digitados. Lembre-se que o primeiro número deve ser sempre menor que o 
segundo*/


function calcular() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let quantPar = 0;
    let i = n1 + 1;
    if (n1 > n2) {
        alert(`O segundo número não pode ser menor que o primeiro.`)
    }

    do {
        if (i % 2 == 0) {
            quantPar++; //quantPar = quantPar + 1 --> para incrementar.
            console.log(i);
        }

        i++; //-> necessário incrementar o contador para sair do looping.

    } while (i < n2); // irá rodar enquanto o primeiro número for menor que o segundo.

    document.getElementById("resultado").innerHTML=quantPar.toString();
}