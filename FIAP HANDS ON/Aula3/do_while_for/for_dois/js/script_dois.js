
function calcNumber() {
    let pn = parseInt(document.getElementById("pn").value);
    let sn = parseInt(document.getElementById("sn").value);
    let res = 0;

    if (pn > sn) {
        alert(`O segundo número não pode ser menor que o primeiro`);
        return
    }

    if (pn < sn) {
        for (let i = pn + 1; i < sn; i++) {
            res = res + i;
            console.log(i);
        }
        

    }
    document.getElementById("resultado").innerHTML=`O resultado foi ${res}`
}
/*Utilizando o looping for, elabore um programa que leia dois números 
quaisquer e exiba o somatório de todos os números que estão entre os dois 
digitados. Lembre-se que o primeiro número deve ser sempre menor que o 
segundo.*/