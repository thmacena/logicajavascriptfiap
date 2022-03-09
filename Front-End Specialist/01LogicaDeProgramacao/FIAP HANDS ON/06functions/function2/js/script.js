/* Elabore um programa em Javascript que contém uma função denominada
verificar triangulo que recebe 3 valores por parâmetro.
Verifique se estes valores formam um triângulo(um lado sozinho é
sempre um menor que a soma dos outros dois)e, se formarem um triângulo, escreva o tipo:
Equilátero(3iguais);Escaleno (3 lados diferentes),isósceles(2ladosiguais)*/
    let leftSide = parseInt(prompt("digite o lado esquerdo"));
    let rightSide = parseInt(prompt("digite o lado direito"));
    let bottonSide = parseInt(prompt("digite o lado de baixo"));

function triangleValue(leftSide,rightSide,bottonSide) {
   
    if (leftSide < (rightSide + bottonSide) && rightSide < (leftSide + bottonSide) && bottonSide < (leftSide + rightSide)) {

        if (leftSide === rightSide && leftSide === bottonSide) {
            return "O cálculo deu um triângulo equilátero";


        } else if (leftSide === rightSide || leftSide === bottonSide || rightSide === bottonSide) {

           return " O cálculo deu um isósceles";

        } else {

            return " O cálculo deu um isósceles";
        }
    }
    
    else {

       return "Não forma um triângulo";
    
    }
    
   // alert (triangleValue(leftSide,rightSide,bottonSide)); -> para chamar a função tem que ser para fora da função
}  

alert (triangleValue(leftSide,rightSide,bottonSide));