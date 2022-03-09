let primeiroKm=parseFloat(prompt("Digite a KM inicial aqui: "));
let kmFim=parseFloat(prompt("Digite a Km total: ")); 
let litros=parseFloat(prompt("Digite a quantidade de litros"));
let total=(primeiroKm-kmFim)/litros;


function mostra(frase){
    document.write(frase);
}

mostra(`O total feito por este carro foi de ${total}km litro.`);