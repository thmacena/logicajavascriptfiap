let compras = parseFloat(prompt(`Digite o valor da sua compra: `));
let desconto = prompt(`Digite o cupom de desconto`);

let valorFinal;

if (compras >= 1000 || desconto == "desconto20"){
    valorFinal = compras - (compras * 0.2);
} else{
    valorFinal = compras;
}

alert(`O total da sua compra foi de ${valorFinal}`);

document.getElementById("total").innerHTML=`O valor da sua compra foi de R&#36;${valorFinal}`;