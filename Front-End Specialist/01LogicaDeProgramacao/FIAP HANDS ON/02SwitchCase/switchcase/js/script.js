


let codigo=parseInt(prompt("Digite o código: "));
let produto;

//default= usada para variáveis não existentes
//switch case é usado em caminhos numéricos com números inteiros 
//dentro da switch case pode-se usar várias linhas de códigos
// normalmente usado em lista
// usado com bastante frequência
switch(codigo){
    case 1:
        produto="coca-cola";
        break;
    case 2:
        produto="Sorvete";
        break;
    case 3:
        produto="chocolate";
        break;

    case 4:
        produto="biscoito";
        break;
    default:
        produto="código inválido!!"
        break;
}