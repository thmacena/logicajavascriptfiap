function calcular(){
    
    let preco=parseFloat(document.getElementById("preco").value);
    let quant=parseInt(document.getElementById("quant").value);
    let res = 0;

    if(quant > 1){
        res = Math.floor(quant *  preco);
        
    }

    document.getElementById("res").innerHTML=res.toString();

}