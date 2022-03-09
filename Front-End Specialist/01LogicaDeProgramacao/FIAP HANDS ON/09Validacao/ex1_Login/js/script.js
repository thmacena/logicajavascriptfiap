function loginUser() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("pass").value;

    if (login === "ADM" && password === "123") {

        document.getElementById("message").innerHTML=
        "<font color = #00ff00> Seja bem vindo</font>"
    }else{
       document.getElementById("message").innerHTML=
        "<font color = #FF0000> Senha incorreta!</font>"
    }
}