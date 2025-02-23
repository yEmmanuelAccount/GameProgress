function logar(){
    // pegando variáveis
    var login = document.getElementById('username').value;
    var senha = document.getElementById('pwd').value;

    // verifica o login e a senha
    if(login == "adm" && senha == "adm"){
        alert('Login efetuado com sucesso!');
        location.href = "todo.html"; 
    }
    else{
        alert('Login inválido. Tente novamente.');
    }
}