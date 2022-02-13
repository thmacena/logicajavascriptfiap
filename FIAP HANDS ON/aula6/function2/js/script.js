/* Elabore um programa em Javascript que contém uma função denominada
verificar triangulo que recebe 3 valores por parâmetro.
Verifique se estes valores formam um triângulo(um lado sozinho é
sempre um menor que a soma dos outros dois)e, se formarem um triângulo, escreva o tipo:
Equilátero(3iguais);Escaleno (3 lados diferentes),isósceles(2ladosiguais)*/


function triangleValue() {
    let leftSide = parseFloat(document.getElementById("leftValue").value);
    let rightSide = parseFloat(document.getElementById("rightValue").value);
    let bottonSide = parseFloat(document.getElementById("bottonValue").value);

    if (leftSide < (rightSide + bottonSide) && rightSide < (leftSide + bottonSide) && bottonSide < (leftSide + rightSide)) {

        if (leftSide === rightSide && leftSide === bottonSide) {
            alert(`O cálculo deu um triângulo equilátero`);

            document.getElementById("result").innerHTML = `O resultado foi um triângulo equilátero`

        } else if (leftSide === rightSide || leftSide === bottonSide || rightSide === bottonSide) {

            alert(`O cálculo deu um triângulo isósceles`);

            document.getElementById("result").innerHTML = `O resultado foi um triângulo isósceles`

        } else {
            alert(`O cálculo deu um triângulo escaleno`);

            document.getElementById("result").innerHTML = `O resultado foi um triângulo escaleno`
        }
    }
    
    else {

        alert(`Não forma um triângulo`);
    
        document.getElementById("result").innerHTML = `Não forma um triângulo`
    }
}  