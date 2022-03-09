function suaEscolha() {
    let saida ="";
    let radiosMarvel = document.getElementsByName("marvel");
    let radiosDc = document.getElementsByName("dc");

    for (var i = 0; i < radiosMarvel.length; i++){
        if(radiosMarvel[i].checked){
            saida = radiosMarvel[i].value;
        }
    }

    for (var i = 0; i < radiosDc.length; i++){
        if(radiosDc[i].checked){
            saida += "\n" + radiosDc[i].value;
        }
    }
}