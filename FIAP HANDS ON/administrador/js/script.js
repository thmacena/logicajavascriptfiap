var loginCadastrado = "admin";
var senhaCadastrada = "12345";

var maxTentativas = 3;
var tentativaAtual = 1;


while(tentativaAtual <= maxTentativas){

    var loginInformado=prompt(`Digite o seu usuário aqui: `);
    var senhaInformada=prompt(`Digite a sua senha: `);

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ){

        alert(`Seja bem-vindo, ${loginInformado}!`);

        tentativaAtual = maxTentativas;

        } else{

             if(tentativaAtual == 3){

            alert(`Tentativas ultrapassadas, por favor, tente novamente mais tarde!`);

            }else{

            alert(`Login ou senha inválidos, por favor, tente novamente!`);

            }

        
    }
    tentativaAtual = tentativaAtual++;
}
