

function celsius(f){
    
    let c = (5/9)*(f-32);//Calculo para transformar fahrenheit em celsius
    return c; //Retorna o valor de C
}

function fahrenheit(c){
    let f = (c*9/5)+32; //Calculo para transformar celsius em fahrenheit
    return f;//retorna o valor de F
}

function principal(){
    let temp = parseFloat(document.getElementById("tempNumber").value);/*Aqui é o valor da temperatura que será pega pelo html com o id "tempNumber" */
    let escale = document.getElementById("grausText").value;/*Aqui é o valor da temperatura em string, no caso F ou C que será pega pelo html com o id "grasuText" e dependendo
    da letra digitada, será convertida na função correspondente. */

    if(escale == "f"){
        celsius(temp);

        alert(`A temperatura em graus C é de ${celsius(temp).toFixed(1).toString()}`)
        /*
        neste caso, estou invocando a função celsius para pegar o valor da temperatura, junto com o tofixed para andar duas casas e o to string para converter o número em string.*/
    }else{
        fahrenheit(temp);

        alert(`A temperatura em graus F é de ${fahrenheit(temp).toFixed(1).toString()}`)
        /*
        neste caso, estou invocando a função fahrenheit para pegar o valor da temperatura, junto com o tofixed para andar duas casas e o to string para converter o número em string.*/
    }

   
}  


