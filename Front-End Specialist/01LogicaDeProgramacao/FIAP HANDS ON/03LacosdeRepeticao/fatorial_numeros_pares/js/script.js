/*Utilizando o looping for, elabore um programa que leia dois números 
quaisquer e exiba o somatório de todos os números que estão entre os dois 
digitados. Lembre-se que o primeiro número deve ser sempre menor que o 
segundo.*/

/*a = 6
b = 10
entre o 6 e o 10 ---> 7, 8 ,9 = x;
 ex: for(let = n; n < b; i++);
*/

function calcularConta() {
    let pn = document.getElementById("pn"); //primeiro número a ser adicionado
    let sn = document.getElementById("sn"); // segundo número a ser adicionado
    let valueUm = +pn.value;
    let valueDois = +sn.value;
    let result = 0;
    const numeros = [];
    //console.log(valueUm, valueDois);
    if (valueDois < valueUm) {

        alert(`Erro, valor do segundo número precisa ser maior que o primeiro`);
        return
    }
    document.getElementById("get_number_somado").innerHTML = "";
    for (let i = valueUm + 1; i < valueDois; i++) {

        numeros.push(i); //-> joga para dentro do array

    }
    console.log(numeros);

    result = numeros.reduce((um, dois) => um + dois);

    document.getElementById("soma").innerHTML = `O resultado da soma foi de ${result}`;

    pn.value = 0;
    sn.value = 0;
}


//document.getElementById("resultado").innerHTML=result;
// todo número par divido por 2 = 0 (se o resto for != de 0 == impar)


// preventDefault; --> previne a ação padrão ao acionar um evento.