function enviarNome(){
    let pn = document.querySelector("#pn");
    let sn =  document.querySelector("#sn");
    let primeiroNome = pn.value;
    let sobrenome = sn.value;
    alert(`Bem-Vindo ${primeiroNome} ${sobrenome} ao leitor de nomes!`);
}