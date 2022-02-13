/*Utilizando o looping while, crie um programa que leia um número qualquer 
fornecido pelo usuário e calcule o fatorial deste número. Exemplo:
5!=5x4x3x2x1 = 120*/

//var n = document.getElementById("num");//referencia do html <-- string

function calcularFatorial() {
    let n = document.getElementById("num");//referencia do html <-- string
    let value = +n.value; //valor do html  "+n -> transforma o valor em número;" converte de string para number.
    let fatorial = value;   // valor que será multiplicado.
    let i = 1; //numero que será incrementado até chegar ao valor de entrada
    while (i < value) {
        
        fatorial = fatorial * (value - i); // na primeira verificação valera o valor subtraido
        i++; // i = i + 1;
        console.log(fatorial); //sempre utilizar o log para verificar se está retornando o valor certo.
    }
    
    document.getElementById("resultado").innerHTML=fatorial; // resultado de: result += fatorial + "<br>;"
}


/*quando se coloca uma conta que não dá o valor desejado, utilizar console log para
verificar se está acumulando */

//formula fatorial n!=n * (n-1) * (n-2)...


//result += fatorial + "<br>";  --> utilizando o valor de atribuição encurdado "+=" para fazer o resultado gerar uma string com o valor + quebra de linha, utilizando a concatenação.
