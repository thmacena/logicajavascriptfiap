/*function concluirCompra (valorCompra, desconto,frete){

    let valorFinal= (valorCompra - desconto)+frete;
}*/


function frutas(){

    let texto = "";
    for(let i = 0 ; i < arguments.length; i++){
        
        texto += ( arguments [i] + "\n"); //arguments é um vetor, um array que recebe  todos os argumentos e consegue guardar os elementos nos indices do objeto argument que você sequer declarou, é um objeto que você pode manipular quando quiser.
    }

    alert(texto);
}

frutas ("laranja","pera","maçã","manga");
