function calcular() {
    let n1= parseInt(document.getElementById("n1").value)
    let n2= parseInt(document.getElementById("n2").value)
    let res = 0;

    if (n1 < n2) {
        for (let i = n1 + 1; 1 < n2; i++) {

            res = res +1;     
        }
        document.getElementById("result").innerHTML=res.toString();
    }else{
        document.getElementById("invalido").innerHTML=`Valor precisa ser valido;`
    }

}

/*Utilizando o looping for, elabore um programa que leia dois números 
quaisquer e exiba o somatório de todos os números que estão entre os dois 
digitados. Lembre-se que o primeiro número deve ser sempre menor que o 
segundo.*/