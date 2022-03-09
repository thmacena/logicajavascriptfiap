/*Elabore um programa em JavaScript com uma função, denominada calcular
fatorial que recebe um valor por parâmetro e retorna o valor do fatorial
calculado 
ex: 5!=5x4x3x2x1 = 120* */

let n = parseInt(prompt("Digite o número para ter um fatorial"));
alert (fatorialRes(n));

function fatorialRes() {
    
    let fatorial = n; // fatorial recebe n que é o valor do input
    let i = 1; //incrimento para para o loop

    while (i < n) {
        fatorial = fatorial * (n - i); // no caso do exemplo, significa que 5 = 5 * ( 5 -1), na próxima volta será  5 = 5 *4 e na próxima será 5 = 5 *3 mais o resultado do valor anterior
        i++;
        console.log(fatorial);
    }
    
    return fatorial.toString();

   
}