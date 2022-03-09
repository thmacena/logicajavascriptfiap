/*cria uma página para uma loja virtual. A pagina deve conter a descrição
do produto "baralho de uno", que custa 25. o Ousuário deve informar quantas parcelas
e a pagina mostrar o valor de cada uma delas*/


function principal(){
document.getElementById("title").innerHTML = "Parcelamento de produto";
document.getElementById("product").innerHTML = "Baralho de uno = R$ 25,00";
}

function purchase() {

    let valorProduto=25;
    let numParc = parseFloat(document.getElementById("parcelas").value);
    let valorParcela = (valorProduto / numParc).toFixed(2);
    document.getElementById("result").innerHTML= valorParcela.toString();

}