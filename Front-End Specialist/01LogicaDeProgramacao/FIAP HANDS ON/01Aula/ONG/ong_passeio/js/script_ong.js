var idade=parseFloat(prompt("digite a sua idade aqui: "));

function frase(texto){
    document.write(texto);
}

if(idade<16){
    alert(`Você não pode votar e nem embarcar no veículo`);

    document.getElementById("situacao").innerHTML= "Fique de olho na faixa etária mínima.";

}else if(idade<18){
    alert(`Seu voto é facultativo (opcional)`);

    document.getElementById("situacao").innerHTML=`Caso queira votar, apenas embarque no veículo e leve sua idêntidade junto ao título de eleitor.`;
}else{
    alert(`Seu voto é obrigatório.`);
    
    document.getElementById("situacao").innerHTML=`Fique de olho na Seu voto é obrigatório, dirija-se ao campo eleitoral para não haver pendências.`;
}