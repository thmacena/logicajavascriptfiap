function formValidade(){
    let x = document.forms["myForm"]["txtName"].value;

    if(x==""){
        alert("Preencha o campo nome");
        return false;
    
    }   
}