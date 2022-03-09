let idade=parseInt(prompt("Digite a sua idade: "));

if(idade<12){
    alert("Você não pode jogar!");
}else if(idade==12){
    alert("Você pode jogar com a permissão dos pais");
}else{
    alert("Você pode jogar!");
}
/*obs: SE eu tenho 3 situações significa que eu vou ter dois IFS
sempre um a meno das quantidades de situações*/