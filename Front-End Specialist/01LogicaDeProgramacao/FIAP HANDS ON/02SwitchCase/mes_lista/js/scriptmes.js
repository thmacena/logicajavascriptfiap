/*Utilizando a estrutura switch case, elabore um programa que leia um 
número referente a um mês do ano e exiba o nome do mês. Se for 
digitado um valor que não corresponda a um mês válido, exiba uma 
mensagem indicando tal situação*/

alert(`Bem-vindo`);
let mes=parseInt(prompt(`Insira o número do mês aqui: `));

switch(mes){
    case 1:
        "Janeiro";
        alert(`Janeiro`)
        break;
    case 2:
        "Fevereiro";
        alert(`Fevereiro`)
        break;
    case 3:
        "Março";
        alert(`Março`)
        break;
    case 4:
        "Abril";
        alert(`Abril`)
        break;
    case 5:
        "Maio";
        alert(`Maio`)
        break;
    case 6:
        "Junho";
        alert(`Junho`)
        break;
    case 7:
        "Julho";
        alert(`Julho`)
        break;
    case 8:
        "Agosto";
        alert(`Agosto`)
        break;
    case 9:
        "Setembro";
        alert(`Setembro`)
        break;
    case 10:
        "Outubro";
        alert(`Outubro`)
        break;
    case 11:
        "Novembro";
        alert(`Novembro`)
        break;
    case 12:
        "Dezembro";
        alert(`Dezembro`)
        break;                    
    default:
        alert(`"código inválido!!"`)
        break;
}
