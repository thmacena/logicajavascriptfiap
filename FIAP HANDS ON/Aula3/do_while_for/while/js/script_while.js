function fatorial() {

    let pn = parseInt(document.getElementById("pn").value); //numero a ser posto
    let fat = 1; //saida --> retorno para fazer na ordem descrescente, necessita-se de usar o código com o valor de fat == o valor do número e subtraido dentro da condição
    let i = 1; // o let i é feito para controle de volta do looping 
    while ( i <= pn) {

        fat = fat * i;
        i++;
        
        console.log(fat);
    }
    
    document.getElementById("get_result").innerHTML=fat.toString();
}

/* Utilizando o looping while, crie um programa que leia um número qualquer 
    fornecido pelo usuário e calcule o fatorial deste número. Exemplo:
    5!=5x4x3x2x1 = 120
    */