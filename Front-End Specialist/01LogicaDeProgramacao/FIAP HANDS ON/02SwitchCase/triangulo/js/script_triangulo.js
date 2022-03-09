/*Dados três valores X, Y e Z, verificar se eles podem ser os comprimentos dos lados de um triângulo, e se 
forem, verificar se é um triângulo equilátero, isósceles ou escaleno. Se eles não formarem um triângulo, 
escrever uma mensagem.
Antes da elaboração do programa, torna-se necessário a revisão de algumas propriedades e definições.
Propriedade – o comprimento de cada lado de um triângulo é menor do que a soma dos comprimentos dos 
outros dois lados.
Definição 1 - chama-se de triângulo equilátero o que tem os comprimentos dos três lados iguais;
Definição 2 - chama-se de triângulo isósceles o triângulo que tem os comprimentos de dois lados iguais;
Definição 3 - chama-se triângulo escaleno o triângulo que tem os comprimentos dos três lados diferentes.*/


    
    let  lado1 = parseInt(prompt(`Digite o valor de esquerdo: `));//esquerdo
    let  lado2 = parseInt(prompt(`Digite o valor de direito: `));//direito
    let  lado3 = parseInt(prompt(`Digite o valor de baixo: `));//baixo


    if( lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)){
        
            if( lado1 == lado2 && lado1 == lado3) {
                alert(`é um triângulo equilátero`);
                document.getElementById("erro").innerHTML="O valor adicionado forma um triãngulo equilátero";

            } else if ( lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
                alert(`é um triâgulo isósceles`);
                document.getElementById("erro").innerHTML="O valor adicionado forma um triângulo isósceles";
            } else{
                alert(`É um triângulo escaleno`);
                document.getElementById("erro").innerHTML="O valor posto forma um triângulo escaleno";
            }
        }else{
            alert(`Não é um triângulo`);
            document.getElementById("erro").innerHTML="Não é um triângulo";
            }


